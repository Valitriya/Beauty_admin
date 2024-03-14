type HTTPRequestMethods = "GET" | "POST" | "PATCH" | "DELETE";
interface HTTPHeaders {
	[key: string]: string
}
export interface RequestConfig {
	url: string;
	method?: HTTPRequestMethods;
	body?: string | null;
	headers?: HTTPHeaders;
}