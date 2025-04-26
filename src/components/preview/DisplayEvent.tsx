import { formatDate, dayFromDate } from '../../lib/scripts';

type DisplayEventProps = {
  what: string;
  when: string;
};

export default function DisplayEvent({ when, what }: DisplayEventProps) {
  const date = new Date(when);
  const formattedDate = formatDate(date);
  const day = dayFromDate(date);

  return (
    <li className="DisplayEvent">{`${formattedDate} (${day}): ${what}`}</li>
  );
}
