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
	handleClick,
}: EditActionButtonProps) {
	return (
		<button
			type='button'
			className={`EditActionButton ${small_button}`}
			title={`${action === 'add' ? 'Add' : 'Remove'} ${title ?? scope}`}
			onClick={handleClick}
		>
			<FontAwesomeIcon icon={action === 'add' ? faPlus : faMinus} />
		</button>
	);
}

export default EditActionButton;
