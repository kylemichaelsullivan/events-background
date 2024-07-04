import DisplayEvent from './DisplayEvent';

import type { Events, Event } from '../../types';

type DisplayEventsProps = {
  events: Events;
};

export default function DisplayEvents({ events }: DisplayEventsProps) {
  return (
    <ul className='DisplayEvents'>
      {events.map(
        (event: Event) =>
          /* only render if there's a location AND a date */
          event.when &&
          event.where && (
            <DisplayEvent
              when={event.when}
              where={event.where}
              key={`${event.when} ${event.where}`}
            />
          ),
      )}
    </ul>
  );
}
