const dayjs = require('dayjs');

module.exports = (
 addDateSuffix = (date) => {
  let dateStr = dayjs(date).format('MM/DD/YYYY [at] h:mma')

  return dateStr;
});
