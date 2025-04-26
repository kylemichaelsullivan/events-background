import EditTopicTitle from './EditTopicTitle';
import EditActions from './EditActions';

type EditTopicTitleLineProps = {
	topic: string;
	topicIndex: number;
};

function EditTopicTitleLine({ topic, topicIndex }: EditTopicTitleLineProps) {
	return (
		<div className='EditTopicTitleLine flex justify-between pb-2'>
			<EditTopicTitle topic={topic} topicIndex={topicIndex} />
			<EditActions scope='topic' title={topic} topicIndex={topicIndex} />
		</div>
	);
}

export default EditTopicTitleLine;
