import { useData } from '../../hooks/useData';
import EditTopicOrderButton from './EditTopicOrderButton';

type EditTopicOrderProps = {
	topic: string;
	topicIndex: number;
	isFirst: boolean;
	isLast: boolean;
};

function EditTopicOrder({
	topic,
	topicIndex,
	isFirst,
	isLast
}: EditTopicOrderProps) {
	const { handleTopicOrder } = useData();

	return (
		<div className='EditTopicOrder flex w-full content-center justify-around pt-2'>
			<EditTopicOrderButton
				topic={topic ?? ''}
				direction='up'
				handleTopicOrder={handleTopicOrder}
				isFirst={isFirst}
				isLast={isLast}
				topicIndex={topicIndex}
			/>
			<EditTopicOrderButton
				topic={topic ?? ''}
				direction='down'
				handleTopicOrder={handleTopicOrder}
				isFirst={isFirst}
				isLast={isLast}
				topicIndex={topicIndex}
			/>
		</div>
	);
}

export default EditTopicOrder;
