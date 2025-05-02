import {
	useState,
	useEffect,
	useRef,
	forwardRef,
	type ChangeEvent
} from 'react';

import { useData } from '../../hooks/useData';

type EditTopicTitleProps = {
	topic: string;
	topicIndex: number;
};

const EditTopicTitle = forwardRef<HTMLInputElement, EditTopicTitleProps>(
	({ topic, topicIndex }, forwardedRef) => {
		const { blurTopicTitle } = useData();
		const [localTopic, setLocalTopic] = useState(topic);
		const inputRef = useRef<HTMLInputElement | null>(null);

		useEffect(() => {
			if (forwardedRef) {
				if (typeof forwardedRef === 'function') {
					forwardedRef(inputRef.current);
				} else {
					forwardedRef.current = inputRef.current;
				}
			}
		}, [forwardedRef]);

		useEffect(() => {
			setLocalTopic(topic);
		}, [topic]);

		const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
			const newValue = e.target.value;
			setLocalTopic(newValue);
			blurTopicTitle(topicIndex, newValue);
		};

		const handleBlur = () => {
			blurTopicTitle(topicIndex);
		};

		return (
			<input
				type='text'
				ref={inputRef}
				className='EditTopicTitle w-full p-1 text-lg font-bold'
				value={localTopic}
				onChange={handleChange}
				placeholder='Topic'
				onBlur={handleBlur}
				id={`topic-${topicIndex}`}
			/>
		);
	}
);

export default EditTopicTitle;
