import type Props from './types/props';
import objectToPlainText from './utils/objectToPlainText';

const DaumPostcodeHtml = ({ onComplete, title, ...props }: Props) => {
	return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport"
      content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, viewport-fit=cover" />
    <title>${title}</title>
  </head>
  <style>
    html,
    body {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
    }

    #wrap {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  </style>

  <body>
    <div id="wrap"></div>
  </body>
  <script src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
  <script type="text/javascript">
    const element_layer = document.getElementById('wrap');

    daum.postcode.load(() => {
      new daum.Postcode({
        oncomplete: ${onComplete},
        ${objectToPlainText(props)}
      }).embed(element_layer);
    });
  </script>
  </html>
  `;
};

export default DaumPostcodeHtml;
