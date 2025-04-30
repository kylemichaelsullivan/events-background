import { useRef, useEffect } from 'react';

import type { Events } from '../../types';

import EditTopicTitleLine from './EditTopicTitleLine';
import EditEvents from './EditEvents';
import EditTopicOrder from './EditTopicOrder';

type EditTopicProps = {
	topic: string;
	events: Events;
	topicIndex: number;
	isFirst: boolean;
	isLast: boolean;
};

function EditTopic({
	topic,
	events,
	topicIndex,
	isFirst,
	isLast
}: EditTopicProps) {
	const titleRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (topic === '' && titleRef.current) {
			titleRef.current.focus();
		}
	}, [topic]);

	return (
		<div className='EditTopic border bg-gray-400 p-2'>
			<EditTopicTitleLine
				ref={titleRef}
				topic={topic}
				topicIndex={topicIndex}
			/>

			{events.length && <EditEvents events={events} topicIndex={topicIndex} />}

			<EditTopicOrder
				topic={topic}
				topicIndex={topicIndex}
				isFirst={isFirst}
				isLast={isLast}
			/>
		</div>
	);
}

export default EditTopic;
