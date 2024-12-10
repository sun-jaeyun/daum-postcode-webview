/**
 * 값을 문자열 형태로 변환
 * 
 * @param {any} value - 문자열로 변환할 값 (any)
 * 
 * @returns {string}
 * - string: 쌍따옴표로 감싸서 반환
 * - object: 모든 속성을 문자열로 변환하고 중괄호로 감싸서 반환
 * - other types: String(value) 반환
 */
const toValueString = (value: any): string => {
    if (typeof value === 'string' || value instanceof String) {
        return `"${value}"`;
    }

    if (value instanceof Object) {
        return `{${objectToPlainText(value)}}`;
    }

    return String(value);
};

/**
 * 객체를 문자열로 변환
 * 
 * @param {Object} object - 문자열로 변환할 객체
 * 
 * @returns {string} 모든 속성을 key: value 문자열로 변환하고 ,와 줄바꿈으로 구분
 */
const objectToPlainText = (object: Object) => {
	return Object.entries(object)
		.map(([key, value]) => `${key}: ${toValueString(value)},`)
		.join('\n');
};

export default objectToPlainText;
