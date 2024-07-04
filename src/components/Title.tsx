type TitleProps = {
  title: string;
};

function Title({ title }: TitleProps) {
  return (
    <h1 className='Title text-3xl text-center py-4 sm:text-5xl'>{title}</h1>
  );
}

export default Title;
