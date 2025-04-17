import { Event, Events } from '../../types';

import EditEvent from './EditEvent';

type EditEventsProps = {
  topicIndex: number;
  events: Events;
};

function EditEvents({ topicIndex, events }: EditEventsProps) {
  return (
    <ul className="EditEvents flex flex-col gap-1">
      {events.map((event: Event, i: number) => (
        <EditEvent
          where={event.where}
          when={event.when}
          topicIndex={topicIndex}
          eventIndex={i}
          key={`${topicIndex}-${i}`}
        />
      ))}
    </ul>
  );
}

export default EditEvents;
