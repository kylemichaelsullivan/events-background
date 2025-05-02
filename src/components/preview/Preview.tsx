import { useData } from '../../hooks/useData';
import { useFormat } from '../../hooks/useFormat';

import DisplayTopic from './DisplayTopic';

import type { Item } from '../../types';

function Preview() {
	const { data } = useData();
	const { fontSize, paddingTop } = useFormat();

	return (
		<div className='Preview relative mx-auto flex flex-col gap-4 border border-black'>
			<div
				className={`flex h-full w-full flex-col gap-4 overflow-hidden p-4 text-center ${fontSize} ${paddingTop}`}
				tabIndex={0}
				id='preview'
			>
				{data.map((item: Item, i: number) => (
					<DisplayTopic
						topic={item.topic}
						events={item.events}
						key={`preview-topic-${i}`}
					/>
				))}
			</div>
		</div>
	);
}

export default Preview;
