export const toCustomDate = (Date) => {
  let date = Date.toUTCString();
  const dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const day = dayArray[Date.getDay()];
  const monthArray = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const month = monthArray[Date.getMonth()];
  date = date.split(' ');

  return `${day}, ${date[1]} ${month}, ${date[3]}`; // <DAY-OF-WEEK>, <DAY-OF-MONTH> <MONTH>, <YEAR>
};
