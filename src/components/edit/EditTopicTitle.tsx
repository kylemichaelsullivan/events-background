import { useData } from '../../hooks/useData';

type EditTopicTitleProps = {
  topic: string;
  topicIndex: number;
};

function EditTopicTitle({ topic, topicIndex }: EditTopicTitleProps) {
  const { blurTopicTitle } = useData();

  return (
    <input
      type="text"
      className="EditTopicTitle w-full p-1 text-lg font-bold"
      defaultValue={topic}
      placeholder="Topic"
      onBlur={() => blurTopicTitle(topicIndex)}
      id={`topic-${topicIndex}`}
    />
  );
}

export default EditTopicTitle;
