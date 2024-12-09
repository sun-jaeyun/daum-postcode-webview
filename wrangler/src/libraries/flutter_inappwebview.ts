import { CHANNEL_NAME } from '../consts';

const flutter_inappwebview = `(data)=>{window.flutter_inappwebview.callHandler("${CHANNEL_NAME}", data);}`;

export default flutter_inappwebview;
