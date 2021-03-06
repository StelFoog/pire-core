export declare const httpStatusCodesCollection: {
    readonly 100: "Continue";
    readonly 101: "Switching Protocols";
    readonly 102: "Processing";
    readonly 103: "Early Hints";
    readonly 200: "OK";
    readonly 201: "Created";
    readonly 202: "Accepted";
    readonly 203: "Non-Authoritative Information";
    readonly 204: "No Content";
    readonly 205: "Reset Content";
    readonly 206: "Partial Content";
    readonly 207: "Multi-Status";
    readonly 208: "Already Reported";
    readonly 226: "IM Used";
    readonly 300: "Multiple Choices";
    readonly 301: "Moved Permanently";
    readonly 302: "Found";
    readonly 303: "See Other";
    readonly 304: "Not Modified";
    readonly 305: "Use Proxy";
    readonly 307: "Temporary Redirect";
    readonly 308: "Permanent Redirect";
    readonly 400: "Bad Request";
    readonly 401: "Unauthorized";
    readonly 402: "Payment Required";
    readonly 403: "Forbidden";
    readonly 404: "Not Found";
    readonly 405: "Method Not Allowed";
    readonly 406: "Not Acceptable";
    readonly 407: "Proxy Authentication Required";
    readonly 408: "Request Timeout";
    readonly 409: "Conflict";
    readonly 410: "Gone";
    readonly 411: "Length Required";
    readonly 412: "Precondition Failed";
    readonly 413: "Payload Too Large";
    readonly 414: "URI Too Long";
    readonly 415: "Unsupported Media Type";
    readonly 416: "Range Not Satisfiable";
    readonly 417: "Expectation Failed";
    readonly 418: "I'm a teapot";
    readonly 421: "Misdirected Request";
    readonly 422: "Unprocessable Entity";
    readonly 423: "Locked";
    readonly 424: "Failed Dependency";
    readonly 425: "Too Early";
    readonly 426: "Upgrade Required";
    readonly 428: "Precondition Required";
    readonly 429: "Too Many Requests";
    readonly 431: "Request Header Fields Too Large";
    readonly 432: "Unavailable For Legal Reasons";
    readonly 500: "Internal Server Error";
    readonly 501: "Not Implemented";
    readonly 502: "Bad Gateway";
    readonly 503: "Service Unavailable";
    readonly 504: "Gateway Timeout";
    readonly 505: "HTTP Version Not Supported";
    readonly 506: "Variant Also Negotiates";
    readonly 507: "Insufficient Storage";
    readonly 508: "Loop Detected";
    readonly 510: "Not Extended";
    readonly 511: "Network Authentication Required";
};
export declare const httpStatusCodeMap: Record<"Continue" | "Switching Protocols" | "Processing" | "Early Hints" | "OK" | "Created" | "Accepted" | "Non-Authoritative Information" | "No Content" | "Reset Content" | "Partial Content" | "Multi-Status" | "Already Reported" | "IM Used" | "Multiple Choices" | "Moved Permanently" | "Found" | "See Other" | "Not Modified" | "Use Proxy" | "Temporary Redirect" | "Permanent Redirect" | "Bad Request" | "Unauthorized" | "Payment Required" | "Forbidden" | "Not Found" | "Method Not Allowed" | "Not Acceptable" | "Proxy Authentication Required" | "Request Timeout" | "Conflict" | "Gone" | "Length Required" | "Precondition Failed" | "Payload Too Large" | "URI Too Long" | "Unsupported Media Type" | "Range Not Satisfiable" | "Expectation Failed" | "I'm a teapot" | "Misdirected Request" | "Unprocessable Entity" | "Locked" | "Failed Dependency" | "Too Early" | "Upgrade Required" | "Precondition Required" | "Too Many Requests" | "Request Header Fields Too Large" | "Unavailable For Legal Reasons" | "Internal Server Error" | "Not Implemented" | "Bad Gateway" | "Service Unavailable" | "Gateway Timeout" | "HTTP Version Not Supported" | "Variant Also Negotiates" | "Insufficient Storage" | "Loop Detected" | "Not Extended" | "Network Authentication Required", 100 | 101 | 102 | 103 | 200 | 201 | 202 | 203 | 204 | 205 | 206 | 207 | 208 | 226 | 300 | 301 | 302 | 303 | 304 | 305 | 307 | 308 | 400 | 401 | 402 | 403 | 404 | 405 | 406 | 407 | 408 | 409 | 410 | 411 | 412 | 413 | 414 | 415 | 416 | 417 | 418 | 421 | 422 | 423 | 424 | 425 | 426 | 428 | 429 | 431 | 432 | 500 | 501 | 502 | 503 | 504 | 505 | 506 | 507 | 508 | 510 | 511>;
declare const statusCodes: readonly ("Continue" | "Switching Protocols" | "Processing" | "Early Hints" | "OK" | "Created" | "Accepted" | "Non-Authoritative Information" | "No Content" | "Reset Content" | "Partial Content" | "Multi-Status" | "Already Reported" | "IM Used" | "Multiple Choices" | "Moved Permanently" | "Found" | "See Other" | "Not Modified" | "Use Proxy" | "Temporary Redirect" | "Permanent Redirect" | "Bad Request" | "Unauthorized" | "Payment Required" | "Forbidden" | "Not Found" | "Method Not Allowed" | "Not Acceptable" | "Proxy Authentication Required" | "Request Timeout" | "Conflict" | "Gone" | "Length Required" | "Precondition Failed" | "Payload Too Large" | "URI Too Long" | "Unsupported Media Type" | "Range Not Satisfiable" | "Expectation Failed" | "I'm a teapot" | "Misdirected Request" | "Unprocessable Entity" | "Locked" | "Failed Dependency" | "Too Early" | "Upgrade Required" | "Precondition Required" | "Too Many Requests" | "Request Header Fields Too Large" | "Unavailable For Legal Reasons" | "Internal Server Error" | "Not Implemented" | "Bad Gateway" | "Service Unavailable" | "Gateway Timeout" | "HTTP Version Not Supported" | "Variant Also Negotiates" | "Insufficient Storage" | "Loop Detected" | "Not Extended" | "Network Authentication Required")[];
export declare type HttpStatusCodes = keyof typeof httpStatusCodesCollection;
export declare type HttpStatusNames = typeof statusCodes[number];
export declare type HttpStatus = HttpStatusNames | HttpStatusCodes;
export declare type HttpMethod = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';
/**
 * Converts a status to it's number format
 * @param status HTTP status
 * @returns HTTP status as number
 */
export declare function codifyHttpStatus(status: HttpStatus): HttpStatusCodes;
export {};
