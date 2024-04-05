const submitButton = document.getElementById("submitButton");
const resultDiv = document.getElementById("result");

submitButton.addEventListener("click", () => {
  let age = parseInt(prompt("What is your age? "));

  if (age < 18) {
    resultDiv.textContent = "Too young to buy alcohol";
  } else {
    resultDiv.textContent = "You are allowed to enter the club!";
  }
});
