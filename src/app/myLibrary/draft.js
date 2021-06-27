function isEqual(a, b) {
  let day1 = new Date(a);
  let day2 = new Date(b);
  console.log(day1.getFullYear(), day1.getMonth(), day1.getDate());
  console.log(day2.getFullYear(), day2.getMonth(), day2.getDate());
  if (day1.getFullYear() !== day2.getFullYear()) return false;
  if (day1.getMonth() !== day2.getMonth()) return false;
  if (day1.getDate() !== day2.getDate()) return false;

  return true;
}
