const inputElements = document.querySelectorAll(".card__input");
const submitButton = document.querySelector(".card__button");

const calculateAge = (year, month, day) => {
  const today = new Date();
  const birthDate = new Date(year, month - 1, day);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age -= 1;
  }

  return age;
};

const onClickHandler = () => {
  const dayElement = document.querySelector(".card__input[name=\"day\"]");
  const monthElement = document.querySelector(".card__input[name=\"month\"]");
  const yearElement = document.querySelector(".card__input[name=\"year\"]");
  const resultElement = document.querySelector(".card__resultValue");

  resultElement.textContent = calculateAge(yearElement.value, monthElement.value, dayElement.value)
    .toString();
};
submitButton.addEventListener("click", onClickHandler);
