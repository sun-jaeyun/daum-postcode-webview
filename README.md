# daum-postcode-webview

[데모](https://daum-postcode-webview.sun-jaeyun98.workers.dev/)

앱 개발 시 Daum Postcode를 간편하게 테스트 해보세요. 쿼리를 통해 옵션을 전달하면, 자동으로 구성이 완료된 `HTML`을 생성해 제공합니다.  

Daum Postcode 기능을 더욱 빠르고 효율적으로 앱에 통합해보세요. 🎯

## 사용가능한 파라미터
[Daum Postcode 공식문서](https://postcode.map.daum.net/guide#attributes)

- library: 사용할 라이브러리
> 기본값은 **'console_log'** 로, 결과를 콘솔에 표시하며 지원하는 라이브러리 목록은 <a name="supported-libraries">아래</a> 참조
- minWidth: 최소 너비
- width: 고정 너비
> 기본값은 500이지만 웹뷰에 적합한 UI를 위해 이 프로젝트에선  **'100%'** 로 설정되어 있음
- height: 고정 높이
> 기본값은 500이지만 웹뷰에 적합한 UI를 위해 이 프로젝트에선  **'100%'** 로 설정되어 있음
- animation: 애니메이션 효과
- focusInput: 찾기 후 검색어 입력박스에 focus(PC only)
- autoMappingRoad, autoMappingJibun: 매핑된 주소가 여러개일 경우 '선택 안함' 선택 가능
- shorthand: '시', '도' 부분을 축약 표시(한글만)
- pleaseReadGuide: 검색결과가 많을 시 검색바 아래의 가이드 영역을 강조
- pleaseReadGuideTimer: 가이드 영역 강조 시간. pleaseReadGuide 옵션과 같이 사용되는 옵션
- maxSuggestItems: 검색바 아래에 뜨는 추천의 최대 갯수
- showMoreHName: 행정동 정보를 좀 더 많이 보여주는 옵션
- hideMapBtn: 검색 결과의 '지도' 버튼 가리기
> 다른 링크로 이동하기에 웹뷰에서 사용 시 주의 필요
- hideEngBtn: 검색 결과의 '영문보기' 버튼 가리기
- alwaysShowEngAddr: 검색 결과의 한글과 영문 주소를 동시에 볼 수 있게 해주는 기능
- submitMode: history 제어가 어려울 경우에 사용
- useBannerLink: 하단 배너에 '가이드페이지'로 이동하는 링크 표시 옵션
> 다른 링크로 이동하기에 웹뷰에서 사용 시 주의 필요

---
- bgColor: 바탕 배경색
- searchBgColor: 검색창 배경색
- contentBgColor: 본문 배경색(검색결과,결과없음,첫화면,검색서제스트)
- pageBgColor: 페이지 배경색
- textColor: 기본 글자색
- queryTextColor: 검색창 글자색
- postcodeTextColor: 우편번호 글자색
- emphTextColor: 강조 글자색
- outlineColor: 테두리


> 기본 옵션과 제약 등은 공식문서에서 확인하길 권장합니다. - [Daum Postcode 공식문서](https://postcode.map.daum.net/guide#attributes)

예시) https://daum-postcode-webview.sun-jaeyun98.workers.dev/?library=flutter_inappwebview&animation=true&shorthand=false&pleaseReadGuide=true&maxSuggestItems=5&hideMapBtn=true&textColor=%23FF8000

## [지원하는 라이브러리 목록](#supported-libraries)

- [WKWebview](https://developer.apple.com/documentation/webkit/wkwebview)
- [WebView(Android)](https://developer.android.com/reference/android/webkit/WebView)
- [webview_flutter](https://pub.dev/packages/webview_flutter) - [예제](/examples/webview_flutter.dart)
- [flutter_inappwebview](https://pub.dev/packages/flutter_inappwebview) - [예제](/examples/flutter_inappwebview.dart)

## 지원 예정 라이브러리

- react-native-webview

## TODO

- 예제 추가(WKWebView, WebView(Android))
- 테스트 작성
- [serverless](https://www.serverless.com) 프레임워크 지원
- Contribution Guide
- 프로젝트별 배포 가이드
