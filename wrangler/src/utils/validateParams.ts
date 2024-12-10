/**
 * searchParams을(를) boolean으로 변환하고 검증
 *
 * @param {string | null} value - searchParams
 * 
 * @returns {boolean | null}
 * - 'true': true
 * - 'false': false
 * - other: null
 */
export const validateBooleanParams = (value: string | null): boolean | null => {
	if (value === 'true') {
		return true;
	}
	if (value === 'false') {
		return false;
	}

	return null;
};

/**
 * searchParams을(를) number로 변환하고 검증. min or max 범위를 넘어가지 않도록 함
 *
 * @param {string | null} value - searchParams
 * @param {Object} options - { min?: number; max?: number }
 * @param {number} [options.min] - 최솟값
 * @param {number} [options.max] - 최댓값
 * 
 * @returns {number | null} Number()로 캐스팅한 값
 * - null: null
 * - NaN: null
 */
export const validateNumberParams = (
	value: string | null,
	{ min, max }: { min?: number; max?: number } = {},
): number | null => {
	if (!value) {
		return null;
	}

	const parsedValue = Number(value);

	if (isNaN(parsedValue)) {
		return null;
	}

	if (min && parsedValue < min) {
		return min;
	}

	if (max && parsedValue > max) {
		return max;
	}

	return parsedValue;
};

/**
 * searchParams을(를) size(% 비율 표기 or number)로 변환하고 검증
 *
 * @param {string | null} value - searchParams
 * @param {Object} options - { defaultValue: number | string; min?: number; max?: number }
 * @param {number | string} options.defaultValue - 검증에 실패했을 때 반환할 기본값
 * @param {number} [options.min] - 최솟값 (number)
 * @param {number} [options.max] - 최댓값 (number)
 * 
 * @returns {string | number}
 * - 비율표기 (0-100%): string 그대로 반환
 * - null: options.defaultValue
 * - NaN: options.defaultValue
 */
export const validateSizeParams = (value: string | null, {
	defaultValue,
	min,
	max,
}: {
	defaultValue: number | string;
	min?: number;
	max?: number;
}): string | number => {
	if (!value) {
		return defaultValue;
	}

	if (value.includes('%')) {
		const parsedValue = Number(value.replace('%', ''));
		if (isNaN(parsedValue) || parsedValue < 0 || parsedValue > 100) {
			return defaultValue;
		}

		return value;
	}

	const parsedValue = Number(value);

	if (isNaN(parsedValue)) {
		return defaultValue;
	}

	if (min && parsedValue < min) {
		return min;
	}

	if (max && parsedValue > max) {
		return max;
	}

	return parsedValue;
};

/**
 * searchParams을(를) hex code로 변환하고 검증
 *
 * @param {string | null} value - searchParams
 * 
 * @returns {string | null} hex code(# 생략가능)이면 #을 붙여서 반환, 아니면 null 반환
 */
export const validateHexCode = (value: string | null): string | null => {
  if (!value) {
    return null;
  }

  const hexCodeRegex = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  const match = value.match(hexCodeRegex);

  if (!match) {
    return null;
  }

  return `#${match[1]}`;
};