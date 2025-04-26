import { useData } from '../../hooks/useData';
import type { Item } from '../../types';

import EditTopic from './EditTopic';

function Edit() {
	const { data } = useData();

	return (
		<div className='Edit flex flex-col gap-4 border border-black p-4'>
			{data.map((item: Item, i: number, arr: Item[]) => (
				<EditTopic
					topic={item.topic}
					events={item.events}
					topicIndex={i}
					isFirst={i === 0}
					isLast={i === arr.length - 1}
					key={`topic-${item.topic || 'blank'}-${i}`}
				/>
			))}
		</div>
	);
}

export default Edit;
