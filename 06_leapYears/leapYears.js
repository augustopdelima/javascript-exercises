const leapYears = function(year) {
  const divisableBy4 = year % 4 === 0;
  const divisableBy100 = year % 100 === 0;
  const divisableBy400 = year % 400 === 0;

  const leapYear = divisableBy4 && (divisableBy400 || !divisableBy100);
  return leapYear;
};

// Do not edit below this line
module.exports = leapYears;
