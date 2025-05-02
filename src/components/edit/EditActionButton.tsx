import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import { small_button } from '../../lib/classNames';

type EditActionButtonProps = {
	action: 'add' | 'remove';
	scope: 'topic' | 'event';
	title?: string;
	handleClick: () => void;
};

function EditActionButton({
	action,
	scope,
	title,
	handleClick
}: EditActionButtonProps) {
	const icon = action === 'add' ? faPlus : faMinus;
	const buttonTitle =
		action === 'add'
			? `Add ${scope}`
			: scope === 'topic'
				? title
					? `Remove ${title}`
					: 'Remove topic'
				: `Remove ${title || 'event'}`;

	return (
		<button
			type='button'
			className={small_button}
			title={buttonTitle}
			onClick={handleClick}
		>
			<FontAwesomeIcon icon={icon} />
		</button>
	);
}

export default EditActionButton;
