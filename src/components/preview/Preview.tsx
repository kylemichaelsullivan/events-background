import { useData } from '../../hooks/useData';
import { useFormat } from '../../hooks/useFormat';

import type { Item } from '../../types';

import DisplayTopic from './DisplayTopic';

function Preview() {
  const { data } = useData();
  const { fontSize, paddingTop } = useFormat();

  const paddingTopClass = `pt-${paddingTop}`;

  return (
    <div className="Preview relative mx-auto flex flex-col gap-4 border border-black">
      <div
        className={`flex flex-col h-full w-full p-4 text-center gap-4 overflow-hidden ${fontSize} ${paddingTopClass}`}
        tabIndex={0}
        id="preview"
      >
        {data.map((item: Item, i: number) => (
          <DisplayTopic
            topic={item.topic}
            events={item.events}
            key={`preview-topic-${i}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Preview;
