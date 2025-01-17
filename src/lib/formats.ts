export const FONT_SIZES: Record<string, string> = {
	xs: 'Extra Small',
	sm: 'Small',
	base: 'Base',
	lg: 'Large',
	xl: 'Extra Large',
} as const;
for (let i = 2; i < 10; i++) {
	FONT_SIZES[`${i}xl`] = `${i} XL`;
}

export const PADDING_TOPS = [
	'0',
	'px',
	'0.5',
	'1',
	'1.5',
	'2',
	'2.5',
	'3',
	'3.5',
];
for (let i = 4; i <= 12; i++) {
	PADDING_TOPS.push('' + i);
}
PADDING_TOPS.push('14');
for (let i = 4; i <= 16; i++) {
	PADDING_TOPS.push('' + i * 4);
}
PADDING_TOPS.push('72', '80', '96');
