import { CHANNEL_NAME } from '../consts';

const webview_flutter = `(data)=>{${CHANNEL_NAME}.postMessage(JSON.stringify(data));}`;

export default webview_flutter;
