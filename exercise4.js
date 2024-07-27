document.addEventListener("DOMContentLoaded", () => {
  const timeInput = document.querySelector(".time-input");
  const setTimerButton = document.querySelector(".set-timer-btn");
  const message = document.querySelector(".message");

  setTimerButton.addEventListener("click", () => {
    const time = parseInt(timeInput.value);

    if (isNaN(time) || time <= 0) {
      alert("Будь ласка, введіть правильний час.");
      return;
    }

    message.classList.add("hidden");

    setTimeout(() => {
      message.classList.remove("hidden");
      alert("Час вийшов!");
    }, time * 1000);
  });
});
