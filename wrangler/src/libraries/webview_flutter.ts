import { DEFAULT_HANDLER_NAME } from '../consts';

const webview_flutter = `(data)=>{${DEFAULT_HANDLER_NAME}.postMessage(JSON.stringify(data));}`;

export default webview_flutter;
