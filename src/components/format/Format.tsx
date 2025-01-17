import { useFormat } from '../../context/Format';

import { FONT_SIZES, PADDING_TOPS } from '../../lib/formats';

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
					{Object.entries(FONT_SIZES).map(([key, value]) => (
						<option value={key} key={`font-size-${key}`}>
							{value}
						</option>
					))}
				</select>
			</label>

			<label className='flex-1 cursor-pointer' title='Padding Top'>
				Padding-Top
				<select
					className='w-full cursor-pointer p-1 hover:ring-1'
					defaultValue={paddingTop}
					onChange={(e) => handleFormatChange(e, 'paddingTop')}
				>
					{PADDING_TOPS.map((padding_top) =>
						padding_top === 'px' ? (
							<option value={padding_top} key='padding-top-1px'>
								1px || 0.0625rem
							</option>
						) : (
							<option
								value={padding_top}
								key={`padding-top-${padding_top}`}
							>{`${+padding_top * 4}px || ${+padding_top / 4}rem`}</option>
						),
					)}
				</select>
			</label>
		</div>
	);
}

export default Format;
