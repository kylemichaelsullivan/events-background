import { useData } from '../../context/Data';
import { useFormat } from '../../context/Format';

import type { Item } from '../../types';

import DisplayTopic from './DisplayTopic';

function Preview() {
	const { data } = useData();
	const { fontSize, paddingTop } = useFormat();

	return (
		<div className='Preview relative mx-auto flex flex-col gap-4 border border-black'>
			<div
				className={`flex flex-col text-${fontSize} h-full w-full p-4 text-center pt-${paddingTop} gap-4 overflow-hidden`}
				tabIndex={0}
				id='preview'
			>
				{data.map((item: Item) => (
					<DisplayTopic
						topic={item.topic}
						events={item.events}
						key={item.topic}
					/>
				))}
			</div>
		</div>
	);
}

export default Preview;
