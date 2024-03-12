import { useState, useCallback } from "react";
import {HTTPRequestMethods, HTTPHeaders, RequestConfig} from './interfaces';


export const useHttp = () => {
	const [loadingStatus, setLoadingStatus] = useState<string>("idle");

	const request = useCallback(
		async (
			{url,
			method = "GET",
			body = null,
			headers = { "Content-Type": "application/json" }}: RequestConfig
		) => {},
        []
	);
};
