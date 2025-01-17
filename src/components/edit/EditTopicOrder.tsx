import { useData } from '../../context/Data';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

import { small_button } from '../../lib/classNames';

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
	isLast,
}: EditTopicOrderProps) {
	const { handleTopicOrder } = useData();

	return (
		<div className='EditTopicOrder flex w-full content-center justify-around pt-2'>
			<button
				type='button'
				className={isFirst ? 'invisible' : small_button}
				title={`Move ${topic ?? 'topic'} Up`}
				onClick={() => handleTopicOrder(topicIndex, 'up', isFirst)}
			>
				<FontAwesomeIcon icon={faArrowUp} />
			</button>

			<button
				type='button'
				className={isLast ? 'invisible' : small_button}
				title={`Move ${topic ?? 'topic'} Down`}
				onClick={() => handleTopicOrder(topicIndex, 'down', isLast)}
			>
				<FontAwesomeIcon icon={faArrowDown} />
			</button>
		</div>
	);
}

export default EditTopicOrder;
