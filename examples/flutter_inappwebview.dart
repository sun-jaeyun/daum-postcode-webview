import 'package:flutter/material.dart';
import 'package:flutter_inappwebview/flutter_inappwebview.dart';

class PageDaumPostcode extends StatelessWidget {
  const PageDaumPostcode({super.key});

  static final uri = Uri.parse('https://daum-postcode-webview.sun-jaeyun98.workers.dev/').replace(
    queryParameters: {'library': 'flutter_inappwebview'},
  );

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('다음 주소 검색'),
      ),
      body: SafeArea(
        child: InAppWebView(
          initialUrlRequest: URLRequest(
            url: WebUri.uri(uri),
          ),
          onWebViewCreated: (controller) {
            // 핸들러 등록
            controller.addJavaScriptHandler(
              handlerName: 'DaumPostcode',
              callback: (arguments) {
                // 뒤로가기
                Navigator.of(context).pop(arguments[0]);
              },
            );
          },
        ),
      ),
    );
  }
}
