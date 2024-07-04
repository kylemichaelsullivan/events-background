import { useData } from '../../context/Data';

import EditTopic from './EditTopic';

function Edit() {
  const { data } = useData();

  return (
    <div className='Edit flex flex-col gap-4 border border-black p-4'>
      {data.map((item, i, arr) => (
        <EditTopic
          topic={item.topic}
          events={item.events}
          topicIndex={i}
          isFirst={i === 0}
          isLast={i === arr.length - 1}
          key={`EditTopic: ${item.topic}`}
        />
      ))}
    </div>
  );
}

export default Edit;
