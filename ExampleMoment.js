var moment = require('moment');
console.log(moment(moment.now()).utcOffset('+0000').format('YYYY-MM-DD HH:mm'));