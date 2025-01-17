import { useData } from '../../context/Data';

import EditActions from './EditActions';

type EditEventProps = {
	where: string;
	when: string;
	topicIndex: number;
	eventIndex: number;
};

function EditEvent({ where, when, topicIndex, eventIndex }: EditEventProps) {
	const { blurEventWhen, blurEventWhere } = useData();

	return (
		<div className='EditEvent flex flex-col border border-gray-400 bg-white p-2'>
			<div className='flex flex-auto flex-col'>
				<input
					type='text'
					className='border p-2'
					defaultValue={where}
					placeholder='Where'
					onBlur={() => blurEventWhere(topicIndex, eventIndex)}
					id={`where-${topicIndex}-${eventIndex}`}
				/>

				<input
					type='date'
					className='border p-2'
					defaultValue={when}
					placeholder='When'
					onBlur={() => blurEventWhen(topicIndex, eventIndex)}
					id={`when-${topicIndex}-${eventIndex}`}
				/>
			</div>

			<EditActions
				scope='event'
				title={where}
				topicIndex={topicIndex}
				eventIndex={eventIndex}
			/>
		</div>
	);
}

export default EditEvent;
