import console_log from './console_log';
import flutter_inappwebview from './flutter_inappwebview';
import WebView from './WebView';
import webview_flutter from './webview_flutter';
import WKWebView from './WKWebView';

const libraries = new Map(
	Object.entries({
		console_log,
		WKWebView,
		WebView,
		webview_flutter,
		flutter_inappwebview,
	}),
);

export default libraries;
