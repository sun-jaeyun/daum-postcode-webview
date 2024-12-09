import { DEFAULT_HANDLER_NAME } from '../consts';

const flutter_inappwebview = `(data)=>{window.flutter_inappwebview.callHandler("${DEFAULT_HANDLER_NAME}", data);}`;

export default flutter_inappwebview;
