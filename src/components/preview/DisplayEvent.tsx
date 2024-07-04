import { DATE_OPTIONS, DAYS } from '../../lib/settings';

type DisplayEventProps = {
  when: string;
  where: string;
};

export default function DisplayEvent({ when, where }: DisplayEventProps) {
  const makeDate = (date: string) => {
    return new Date(date.replace(/-/g, '/'));
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-us', DATE_OPTIONS);
  };

  const dayFromDate = (date: Date) => {
    return DAYS[date.getDay()];
  };

  const dateObject = makeDate(when);
  const date = formatDate(dateObject);
  const day = dayFromDate(dateObject);

  return <li className='DisplayEvent'>{`${date} (${day}) @ ${where}`}</li>;
}
