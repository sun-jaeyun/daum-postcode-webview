import { DEFAULT_HANDLER_NAME } from '../consts';

const webview_flutter = `(data)=>{${DEFAULT_HANDLER_NAME}.postMessage(data);}`;

export default webview_flutter;
