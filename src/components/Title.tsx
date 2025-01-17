type TitleProps = {
	title: string;
};

function Title({ title }: TitleProps) {
	return (
		<h1 className='Title py-4 text-center text-3xl sm:text-5xl'>{title}</h1>
	);
}

export default Title;
