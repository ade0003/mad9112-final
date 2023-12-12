function getDaysUntilChristmas() {
  let date = new Date().getDate();
  let days = 25 - date;
  return days;
}

console.log(`There are ${getDaysUntilChristmas()} days until christmas`);
