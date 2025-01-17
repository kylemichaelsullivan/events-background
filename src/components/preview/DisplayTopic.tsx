import DisplayEvents from './DisplayEvents';

import type { Events } from '../../types';

type DisplayTopicProps = {
	topic: string;
	events: Events;
};

export default function DisplayTopic({ topic, events }: DisplayTopicProps) {
	return (
		<div className='DisplayTopic'>
			<h2 className='font-bold'>{topic}</h2>
			{Object.keys(events).length && <DisplayEvents events={events} />}
		</div>
	);
}
