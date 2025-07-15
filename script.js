function calculateBMI() {
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const result = document.getElementById("result");

  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    result.textContent = "Please enter valid height and weight!";
    return;
  }

  const bmi = (weight / (height * height)).toFixed(1);

  let category = "";
  if (bmi < 18.5) category = "Underweight 🤣";
  else if (bmi < 25) category = "Normal ❤️";
  else if (bmi < 30) category = "Overweight 😱";
  else category = "Obese 😳";

  result.textContent = `Your BMI is ${bmi} - ${category}`;
}

function reset() {
  document.getElementById("height").value = "";
  document.getElementById("weight").value = "";
  document.getElementById("result").textContent = "";
}

