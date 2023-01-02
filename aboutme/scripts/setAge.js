// grab element that will be modified
const ageElement = document.querySelector(".age");

// set my birthdate object and put year, month, day
// in their respective variables
const myBirthdate = new Date(1996, 04, 30);
const [birthMonth, birthDay, birthYear] = [
  myBirthdate.getMonth(),
  myBirthdate.getDate(),
  myBirthdate.getFullYear(),
];

// set current birthdate object and put year, month, day
// in their respective variables
const currentDate = new Date();
const [currentMonth, currentDay, currentYear] = [
  currentDate.getMonth() + 1,
  currentDate.getDate(),
  currentDate.getFullYear(),
];
const years = currentYear - birthYear;

// subtract one from years if it hasn't been my birthday yet in current year
if (
  birthMonth > currentMonth ||
  (birthMonth === currentMonth && birthDay > currentDay)
) {
  ageElement.textContent = years - 1;
} else {
  ageElement.textContent = years;
}
