import { useData } from '../../hooks/useData';

type EditEventDetailsProps = {
	what: string;
	when: string;
	topicIndex: number;
	eventId: string;
};

function EditEventDetails({
	what,
	when,
	topicIndex,
	eventId
}: EditEventDetailsProps) {
	const { blurEventWhen, blurEventWhat } = useData();

	return (
		<div className='flex flex-auto flex-col'>
			<input
				type='text'
				className='border p-2'
				defaultValue={what}
				placeholder='What'
				onBlur={() => blurEventWhat(topicIndex, eventId)}
				id={`what-${topicIndex}-${eventId}`}
			/>

			<input
				type='date'
				className='border p-2'
				defaultValue={when}
				placeholder='When'
				onBlur={() => blurEventWhen(topicIndex, eventId)}
				id={`when-${topicIndex}-${eventId}`}
			/>
		</div>
	);
}

export default EditEventDetails;
