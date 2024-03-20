import { useState, useCallback } from "react";
import { RequestConfig, LoadingStatusOptions } from "../shared/interfaces/hook.interface";

export const useHttp = () => {
	const [loadingStatus, setLoadingStatus] = useState<LoadingStatusOptions>("idle");

	const request = useCallback(
		async ({
			url,
			method = "GET",
			body = null,
			headers = { "Content-Type": "application/json" },
		}: RequestConfig) => {
			setLoadingStatus("loading");

			try {
				const response = await fetch(url, { method, body, headers });
				if (!response.ok) {
					throw new Error(`Could not fetch ${url}, status: ${response.status}`);
				}

				const data = await response.json();

				setLoadingStatus("idle");
				return data;
			} catch (e) {
				setLoadingStatus("error");
				throw e;
			}
		},
		[]
	);

	return { loadingStatus, request };
};
