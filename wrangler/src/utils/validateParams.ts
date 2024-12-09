export const validateBooleanParams = ({
	value,
	defaultValue,
}: {
	value: string | null;
	defaultValue: boolean;
}): boolean => {
	if (value === 'true') {
		return true;
	}
	if (value === 'false') {
		return false;
	}

	return defaultValue;
};

export const validateNumberParams = ({
	value,
	defaultValue,
	min,
	max,
}: {
	value: string | null;
	defaultValue: number;
	min?: number;
	max?: number;
}): number => {
	if (!value) {
		return defaultValue;
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

export const validateSizeParams = ({
	value,
	defaultValue,
	min,
	max,
}: {
	value: string | null;
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
