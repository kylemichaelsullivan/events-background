import { ChangeEvent } from 'react';

import { useFormat } from '../../context/Format';

import { FONT_SIZES, PADDING_TOPS } from '../../lib/formats';

function Format() {
  const { fontSize, paddingTop, setFontSize, setPaddingTop } = useFormat();

  function handleFormatChange(
    e: ChangeEvent<HTMLSelectElement>,
    attribute: 'fontSize' | 'paddingTop',
  ) {
    if (attribute === 'fontSize') {
      setFontSize(() => e.target.value);
    }
    if (attribute === 'paddingTop') {
      setPaddingTop(parseInt(e.target.value as string));
    }
  }

  return (
    <div className='Format flex flex-col border border-black gap-4 p-4 sm:flex-row'>
      <label className='cursor-pointer flex-1' title='Font Size'>
        Font Size
        <select
          className='cursor-pointer p-1 w-full hover:ring-1'
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

      <label className='cursor-pointer flex-1' title='Padding Top'>
        Padding-Top
        <select
          className='cursor-pointer p-1 w-full hover:ring-1'
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
