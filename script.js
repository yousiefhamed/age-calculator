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

const validateDay = (day) => {
  if (day && day > 0 && day <= 31) {
    return true;
  }
  return false;
};

const validateMonth = (month) => {
  if (month && month > 0 && month <= 12) {
    return true;
  }
  return false;
};

const validateYear = (year) => {
  const currentYear = new Date().getFullYear();
  if (year && year > 0 && year <= currentYear) {
    return true;
  }
  return false;
};

const isDateValid = (dayElement, monthElement, yearElement) => {
  const isValid = [false, false, false];

  if (!validateDay(dayElement.value)) {
    dayElement.classList.add("card__input--error");
  } else {
    isValid[0] = true;
    dayElement.classList.remove("card__input--error");
  }

  if (!validateMonth(monthElement.value)) {
    monthElement.classList.add("card__input--error");
  } else {
    isValid[1] = true;
    monthElement.classList.remove("card__input--error");
  }

  if (!validateYear(yearElement.value)) {
    yearElement.classList.add("card__input--error");
  } else {
    isValid[2] = true;
    yearElement.classList.remove("card__input--error");
  }

  return isValid.every((item) => item === true);
};

const onClickHandler = () => {
  const dayElement = document.querySelector(".card__input[name=\"day\"]");
  const monthElement = document.querySelector(".card__input[name=\"month\"]");
  const yearElement = document.querySelector(".card__input[name=\"year\"]");
  const resultElement = document.querySelector(".card__resultValue");

  if (!isDateValid(dayElement, monthElement, yearElement)) {
    resultElement.textContent = "--";
    return;
  }

  resultElement.textContent = calculateAge(yearElement.value, monthElement.value, dayElement.value)
    .toString();
};

inputElements.forEach((item) => {
  item.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      onClickHandler();
    }
  });
});

submitButton.addEventListener("click", onClickHandler);
