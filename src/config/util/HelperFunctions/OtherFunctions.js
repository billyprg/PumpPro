import moment from 'moment';

const formatDate = inputDate => {
  const formats = ['YYYY-M-D', 'YYYY-M', 'YYYY-D-M'];

  let formattedDate = null;

  formats.some(format => {
    const parsedDate = moment(inputDate, format, true); // Use strict parsing
    if (parsedDate.isValid()) {
      formattedDate = parsedDate.format('DD MMM YY');
      return true; // Stop iteration if a valid format is found
    }
    return false;
  });

  return formattedDate;
};

const getMonthName = dateString => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const [year, month] = dateString.split('-');
  const monthIndex = parseInt(month, 10) - 1; // Months are zero-indexed
  return months[monthIndex];
};
export default {
  formatDate,
  getMonthName
};
