import DisplayEvent from './DisplayEvent';

import type { Events, Event } from '../../types';

type DisplayEventsProps = {
	events: Events;
};

export default function DisplayEvents({ events }: DisplayEventsProps) {
	const sortedAndDedupedEvents = events
		.filter((event: Event) => event.when && event.what)
		.sort((a: Event, b: Event) => {
			const dateA = new Date(a.when);
			const dateB = new Date(b.when);
			const utcA = Date.UTC(
				dateA.getFullYear(),
				dateA.getMonth(),
				dateA.getDate()
			);
			const utcB = Date.UTC(
				dateB.getFullYear(),
				dateB.getMonth(),
				dateB.getDate()
			);
			return utcA - utcB;
		});

	return (
		<ul className='DisplayEvents'>
			{sortedAndDedupedEvents.map((event: Event) => (
				<DisplayEvent when={event.when} what={event.what} key={event.id} />
			))}
		</ul>
	);
}
