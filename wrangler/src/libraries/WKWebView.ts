import { DEFAULT_HANDLER_NAME } from "../consts";

const WKWebView = `(data)=>{window.webkit.messageHandlers.${DEFAULT_HANDLER_NAME}.postMessage(data);}`;
