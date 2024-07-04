import { useData } from '../../context/Data';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import { small_button } from '../../lib/classNames';

type EditActionsProps = {
  scope: 'topic' | 'event';
  title?: string;
  topicIndex: number;
  eventIndex?: number;
};

function EditActions({
  scope,
  title,
  topicIndex,
  eventIndex,
}: EditActionsProps) {
  const { addTopic, removeTopic, addEvent, removeEvent } = useData();

  function handleClick(action: 'add' | 'remove') {
    if (scope === 'event') {
      action === 'remove'
        ? removeEvent(topicIndex, eventIndex ?? -1)
        : addEvent(topicIndex);
    } else {
      action === 'remove' ? removeTopic(topicIndex) : addTopic();
    }
  }

  return (
    <div className='EditActions flex items-center gap-1 pl-2'>
      <button
        type='button'
        className={small_button}
        title={`Add ${scope}`}
        onClick={() => handleClick('add')}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>

      <button
        type='button'
        className={small_button}
        title={`Remove ${title ?? scope}`}
        onClick={() => handleClick('remove')}
      >
        <FontAwesomeIcon icon={faMinus} />
      </button>
    </div>
  );
}

export default EditActions;
