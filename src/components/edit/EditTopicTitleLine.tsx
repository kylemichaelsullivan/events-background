import EditTopicTitle from './EditTopicTitle';
import EditActions from './EditActions';
import { forwardRef } from 'react';

type EditTopicTitleLineProps = {
	topic: string;
	topicIndex: number;
};

const EditTopicTitleLine = forwardRef<
	HTMLInputElement,
	EditTopicTitleLineProps
>(({ topic, topicIndex }, ref) => {
	return (
		<div className='EditTopicTitleLine flex justify-between pb-2'>
			<EditTopicTitle ref={ref} topic={topic} topicIndex={topicIndex} />
			<EditActions scope='topic' title={topic} topicIndex={topicIndex} />
		</div>
	);
});

export default EditTopicTitleLine;
