const toValueString = (value: any): string => {
	if (typeof value === 'string' || value instanceof String) {
		return `"${value}"`;
	}

	if (value instanceof Object) {
		return `{${objectToPlainText(value)}}`;
	}

	return String(value);
};

const objectToPlainText = (object: Object) => {
	return Object.entries(object)
		.map(([key, value]) => `${key}: ${toValueString(value)},`)
		.join('\n');
};

export default objectToPlainText;
