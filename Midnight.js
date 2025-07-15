
function calculateBMI() {
  let height = parseFloat(document.getElementById("height").value);
  let weight = parseFloat(document.getElementById("weight").value);
  let result = document.getElementById("result");

  if (height > 0 && weight > 0) {
    let bmi = (weight / (height * height)).toFixed(2);
    result.innerHTML = '<i class="fas fa-chart-line"></i> Result: ' + bmi;
  } else {
    result.innerHTML = '🧑‍⚕️';
  }
}
