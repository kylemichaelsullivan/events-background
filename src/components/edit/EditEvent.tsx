// import { ChangeEvent } from 'react';

import { useData } from '../../context/Data';

import EditActions from './EditActions';

type EditEventProps = {
  where: string;
  when: string;
  topicIndex: number;
  eventIndex: number;
};

function EditEvent({ where, when, topicIndex, eventIndex }: EditEventProps) {
  const { blurEventWhen, blurEventWhere } = useData();

  return (
    <div className='EditEvent flex flex-col bg-white border border-gray-400 p-2'>
      <div className='flex flex-col flex-auto'>
        <input
          type='text'
          className='border p-2'
          defaultValue={where}
          placeholder='Where'
          onBlur={() => blurEventWhere(topicIndex, eventIndex)}
          id={`where-${topicIndex}-${eventIndex}`}
        />

        <input
          type='date'
          className='border p-2'
          defaultValue={when}
          placeholder='When'
          onBlur={() => blurEventWhen(topicIndex, eventIndex)}
          id={`when-${topicIndex}-${eventIndex}`}
        />
      </div>

      <EditActions
        scope='event'
        title={where}
        topicIndex={topicIndex}
        eventIndex={eventIndex}
      />
    </div>
  );
}

export default EditEvent;

/*
import EditActions from "./EditActions";

type EditEventProps = {
  where: string;
  when: Date;
  handleChange: React.ChangeEvent<HTMLInputElement>;
  handleInputBlur: any;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
};

export default function EditEvent({
  topicID,
  eventID,
  where,
  when,
  handleChange,
  handleInputBlur,
  handleClick
}: EditEventProps) {
  return (
    <div className="EditEvent flex flex-col bg-white border border-gray-400 p-2">
      <div className="flex flex-col flex-auto">
        <input
          type="text"
          className="border p-2"
          value={where}
          placeholder="Where"
          onChange={(e) => handleChange(e, "event", topicID, eventID)}
        />
        <input
          type="date"
          className="border p-2"
          value={when}
          placeholder="When"
          onChange={(e) => handleChange(e, "event", topicID, eventID)}
          onBlur={(e) => handleInputBlur(e, topicID)}
        />
      </div>
      <EditActions
        scope="event"
        topicID={topicID}
        eventID={eventID}
        handleClick={handleClick}
      />
    </div>
  );
}
*/
