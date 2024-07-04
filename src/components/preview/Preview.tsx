import { useData } from '../../context/Data';
import { useFormat } from '../../context/Format';

import type { Item } from '../../types';

import DisplayTopic from './DisplayTopic';

function Preview() {
  const { data } = useData();
  const { fontSize, paddingTop } = useFormat();

  return (
    <div className='Preview relative flex flex-col border border-black gap-4 mx-auto'>
      <div
        className={`flex flex-col text-${fontSize} text-center w-full h-full p-4 pt-${paddingTop} gap-4 overflow-hidden`}
        tabIndex={0}
        id='preview'
      >
        {data.map((item: Item) => (
          <DisplayTopic
            topic={item.topic}
            events={item.events}
            key={item.topic}
          />
        ))}
      </div>
    </div>
  );
}

export default Preview;
