import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';

class PageDaumPostcode extends StatelessWidget {
  const PageDaumPostcode({super.key});

  static final uri = Uri.parse('https://daum-postcode-webview.sun-jaeyun98.workers.dev/').replace(
    queryParameters: {'library': 'flutter_inappwebview'},
  );

  @override
  Widget build(BuildContext context) {
    final controller = WebViewController()
      ..setJavaScriptMode(JavaScriptMode.unrestricted)
      // 핸들러 등록
      ..addJavaScriptChannel(
        'DaumPostcode',
        onMessageReceived: (message) {
          // 데이터 parsing
          final data = jsonDecode(message.message);
          // 뒤로가기
          Navigator.of(context).pop(data);
        },
      )
      ..loadRequest(uri);

    return Scaffold(
      appBar: AppBar(
        title: const Text('다음 주소 검색'),
      ),
      body: SafeArea(
        child: WebViewWidget(controller: controller),
      ),
    );
  }
}
