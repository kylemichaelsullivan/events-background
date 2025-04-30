import { useData } from '../../hooks/useData';
import { forwardRef } from 'react';

type EditTopicTitleProps = {
	topic: string;
	topicIndex: number;
};

const EditTopicTitle = forwardRef<HTMLInputElement, EditTopicTitleProps>(
	({ topic, topicIndex }, ref) => {
		const { blurTopicTitle } = useData();

		return (
			<input
				type='text'
				ref={ref}
				className='EditTopicTitle w-full p-1 text-lg font-bold'
				defaultValue={topic}
				placeholder='Topic'
				onBlur={() => blurTopicTitle(topicIndex)}
				id={`topic-${topicIndex}`}
			/>
		);
	}
);

export default EditTopicTitle;
