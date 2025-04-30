import { Event, Events } from '../../types';

import EditEvent from './EditEvent';

type EditEventsProps = {
	topicIndex: number;
	events: Events;
};

function EditEvents({ topicIndex, events }: EditEventsProps) {
	return (
		<ul className='EditEvents flex flex-col gap-1'>
			{events.map((event: Event) => (
				<EditEvent
					what={event.what}
					when={event.when}
					topicIndex={topicIndex}
					eventId={event.id}
					key={event.id}
				/>
			))}
		</ul>
	);
}

export default EditEvents;
