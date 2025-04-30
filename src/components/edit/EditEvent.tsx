import EditEventDetails from './EditEventDetails';
import EditActions from './EditActions';

type EditEventProps = {
	what: string;
	when: string;
	topicIndex: number;
	eventId: string;
};

function EditEvent({ what, when, topicIndex, eventId }: EditEventProps) {
	return (
		<div className='EditEvent flex flex-col border border-gray-400 bg-white p-2'>
			<EditEventDetails
				what={what}
				when={when}
				topicIndex={topicIndex}
				eventId={eventId}
			/>

			<EditActions
				scope='event'
				title={what}
				topicIndex={topicIndex}
				eventId={eventId}
			/>
		</div>
	);
}

export default EditEvent;
