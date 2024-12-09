import { CHANNEL_NAME } from '../consts';

const WKWebView = `(data)=>{window.webkit.messageHandlers.${CHANNEL_NAME}.postMessage(data);}`;

export default WKWebView;
