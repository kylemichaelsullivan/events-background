import type { Events } from '../../types';

import EditTopicTitle from './EditTopicTitle';
import EditActions from './EditActions';
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
	isLast,
}: EditTopicProps) {
	return (
		<div className='EditTopic border bg-gray-400 p-2'>
			<div className='flex justify-between pb-2'>
				<EditTopicTitle title={topic} topicIndex={topicIndex} />
				<EditActions scope='topic' title={topic} topicIndex={topicIndex} />
			</div>

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
