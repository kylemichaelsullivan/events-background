// export type DateOptions = {
//   month: string;
//   day: string;
// };

export const DAYS = ['U', 'M', 'T', 'W', 'H', 'F', 'S'];

// export const DATE_OPTIONS: DateOptions = { month: '2-digit', day: '2-digit' };

export const DATE_OPTIONS: Intl.DateTimeFormatOptions = {
  month: '2-digit',
  day: '2-digit',
};
