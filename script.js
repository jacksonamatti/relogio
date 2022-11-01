const hoursHand = document.querySelector(".hand.hours");
const minutesHand = document.querySelector(".hand.minutes");
const secundsHand = document.querySelector(".hand.secunds");

const setRotation = (element, rotationPercetage) => {
  element.style.setProperty("--rotation", rotationPercetage * 360);
};

const setClock = () => {
  const correntDate = new Date();

  const secundsPercentage = correntDate.getSeconds() / 60;
  const minutesPercentage = (secundsPercentage + correntDate.getMinutes()) / 60;
  const hoursPercentage = (minutesPercentage + correntDate.getHours()) / 12;

  setRotation(secundsHand, secundsPercentage);
  setRotation(minutesHand, minutesPercentage);
  setRotation(hoursHand, hoursPercentage);
};
setClock();

setInterval(setClock, 1000);
