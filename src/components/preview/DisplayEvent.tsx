import { formatDate, dayFromDate } from '../../lib/scripts';

type DisplayEventProps = {
	when: string;
	where: string;
};

export default function DisplayEvent({ when, where }: DisplayEventProps) {
	const makeDate = (date: string) => {
		return new Date(date.replace(/-/g, '/'));
	};

	const dateObject = makeDate(when);
	const date = formatDate(dateObject);
	const day = dayFromDate(dateObject);

	return <li className='DisplayEvent'>{`${date} (${day}): ${where}`}</li>;
}
