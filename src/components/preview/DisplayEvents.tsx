import DisplayEvent from './DisplayEvent';

import type { Events, Event } from '../../types';

type DisplayEventsProps = {
  events: Events;
};

export default function DisplayEvents({ events }: DisplayEventsProps) {
  const sortedAndDedupedEvents = events
    .filter((event: Event) => event.when && event.what)
    .sort(
      (a: Event, b: Event) =>
        new Date(a.when).getTime() - new Date(b.when).getTime()
    );

  return (
    <ul className="DisplayEvents">
      {sortedAndDedupedEvents.map((event: Event) => (
        <DisplayEvent when={event.when} what={event.what} key={event.id} />
      ))}
    </ul>
  );
}
