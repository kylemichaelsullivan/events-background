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
      className='text-lg font-bold w-full p-1'
      placeholder='Topic'
      defaultValue={title}
      onBlur={() => blurTopicTitle(topicIndex)}
      id={`topic-${topicIndex}`}
    />
  );
}

export default EditTopicTitle;
