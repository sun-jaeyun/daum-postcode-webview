import { CHANNEL_NAME, HANDLER_NAME } from '../consts';

const WebView = `(data)=>{${CHANNEL_NAME}.${HANDLER_NAME}(JSON.stringify(data));}`;

export default WebView;
