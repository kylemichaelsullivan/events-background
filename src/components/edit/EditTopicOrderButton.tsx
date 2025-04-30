import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { small_button } from '../../lib/classNames';

type EditTopicOrderButtonProps = {
	topic?: string;
	direction: 'up' | 'down';
	isFirst: boolean;
	isLast: boolean;
	topicIndex: number;
	handleTopicOrder: (
		index: number,
		direction: 'up' | 'down',
		isDisabled: boolean
	) => void;
};

function EditTopicOrderButton({
	topic,
	topicIndex,
	direction,
	isFirst,
	isLast,
	handleTopicOrder
}: EditTopicOrderButtonProps) {
	const icon = direction === 'up' ? faArrowUp : faArrowDown;
	const title = `Move${topic ? ` ${topic}` : ''} ${direction === 'up' ? 'Up' : 'Down'}`;
	const isDisabled = direction === 'up' ? isFirst : isLast;

	return (
		<button
			type='button'
			className={isDisabled ? 'invisible' : small_button}
			title={title}
			onClick={() => handleTopicOrder(topicIndex, direction, isDisabled)}
		>
			<FontAwesomeIcon icon={icon} />
		</button>
	);
}

export default EditTopicOrderButton;
