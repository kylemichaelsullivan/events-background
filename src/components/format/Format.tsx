import { useFormat } from '../../hooks/useFormat';
import { FONT_SIZES, PADDING_TOPS } from '../../constants/formats';

function Format() {
	const { fontSize, paddingTop, handleFormatChange } = useFormat();

	return (
		<div className='Format flex flex-col gap-4 border border-black p-4 sm:flex-row'>
			<label className='flex-1 cursor-pointer' title='Font Size'>
				Font Size
				<select
					className='w-full cursor-pointer p-1 hover:ring-1'
					defaultValue={fontSize}
					onChange={(e) => handleFormatChange(e, 'fontSize')}
				>
					{FONT_SIZES.map((size) => (
						<option value={size.value} key={`font-size-${size.value}`}>
							{size.label}
						</option>
					))}
				</select>
			</label>

			<label className='flex-1 cursor-pointer' title='Padding Top'>
				Padding Top
				<select
					className='w-full cursor-pointer p-1 hover:ring-1'
					defaultValue={paddingTop}
					onChange={(e) => handleFormatChange(e, 'paddingTop')}
				>
					{PADDING_TOPS.map((padding) => (
						<option value={padding.value} key={`padding-top-${padding.value}`}>
							{padding.label}
						</option>
					))}
				</select>
			</label>
		</div>
	);
}

export default Format;
