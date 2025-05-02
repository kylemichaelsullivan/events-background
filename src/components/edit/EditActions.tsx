import { useData } from '../../hooks/useData';

import EditActionButton from './EditActionButton';

type EditActionsProps = {
	scope: 'topic' | 'event';
	title: string;
	topicIndex: number;
	eventId?: string;
};

function EditActions({ scope, title, topicIndex, eventId }: EditActionsProps) {
	const { addTopic, removeTopic, addEvent, removeEvent, blurTopicTitle } =
		useData();

	function forceBlurActiveInput() {
		const activeElement = document.activeElement as HTMLInputElement;
		if (activeElement && 'blur' in activeElement) {
			activeElement.blur();
		}
	}

	function handleClick(action: 'add' | 'remove') {
		const activeElement = document.activeElement as HTMLInputElement;

		if (
			activeElement &&
			activeElement.id &&
			activeElement.id.startsWith('topic-')
		) {
			const activeTopicIndex = parseInt(activeElement.id.split('-')[1], 10);

			if (!isNaN(activeTopicIndex)) {
				blurTopicTitle(activeTopicIndex, activeElement.value);
			}
		}

		forceBlurActiveInput();

		if (scope === 'event') {
			if (action === 'remove') {
				if (eventId) {
					removeEvent(topicIndex, eventId);
				}
			} else {
				addEvent(topicIndex);
			}
		} else {
			if (action === 'remove') {
				removeTopic(topicIndex);
			} else {
				addTopic();
			}
		}
	}

	return (
		<div className='EditActions flex items-center gap-1 pl-2'>
			<EditActionButton
				action='add'
				scope={scope}
				handleClick={() => handleClick('add')}
			/>
			<EditActionButton
				action='remove'
				scope={scope}
				title={title}
				handleClick={() => handleClick('remove')}
			/>
		</div>
	);
}

export default EditActions;
