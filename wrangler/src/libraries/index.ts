import console_log from './console_log';
import flutter_inappwebview from './flutter_inappwebview';
import webview_flutter from './webview_flutter';

const libraries = new Map(
	Object.entries({
		console_log,
		flutter_inappwebview,
		webview_flutter,
	}),
);

export default libraries;
