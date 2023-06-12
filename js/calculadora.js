const btn = document.getElementById("calculate");

btn.addEventListener("click", function () {
  let height = document.querySelector("#height").value;
  //let weight = document.querySelector("#weight").value;

 /*  if (height == "" || weight == "") {
    alert("Por favor ingrese la cantidad!");
    return;
  }*/
  
  if (height == "") {
    alert("Por favor ingrese la cantidad!");
    return;
  }
  // BMI = weight in KG / (height in m * height in m)

  //height = height / 100;


  //let BMI = weight / (height * height);

  let BMI = height  / 3;

  BMI = BMI.toFixed(2);
   Result = Math.ceil(BMI)
  document.querySelector("#result").innerHTML = Result;

  document.querySelector(
    ".comment"
  ).innerHTML = `Sacos de 25 <span id="comment">KG</span>`;

  /*let status = "";

  if (BMI < 18.5) {
    status = "Underweight";
  }
  if (BMI >= 18.5 && BMI < 25) {
    status = "Healthy";
  }
  if (BMI >= 25 && BMI < 30) {
    status = "Overweight";
  }
  if (BMI >= 30) {
    status = "Obese";
  }
  document.querySelector(
    ".comment"
  ).innerHTML = `Comment: you are <span id="comment">${status}</span>`;*/
});