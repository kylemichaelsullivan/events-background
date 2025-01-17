import { useData } from '../../context/Data';

type EditTopicTitleProps = {
	title: string;
	topicIndex: number;
};

function EditTopicTitle({ title, topicIndex }: EditTopicTitleProps) {
	const { blurTopicTitle } = useData();

	return (
		<input
			type='text'
			className='w-full p-1 text-lg font-bold'
			placeholder='Topic'
			defaultValue={title}
			onBlur={() => blurTopicTitle(topicIndex)}
			id={`topic-${topicIndex}`}
		/>
	);
}

export default EditTopicTitle;
