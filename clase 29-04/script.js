import { getInfo } from "/getInfo.js";

window.addEventListener("DOMContentLoaded", () => {
  let infoFromAPI;

  const btn = document.getElementById("btn");
  const btn2 = document.getElementById("btn2");
  const container = document.querySelector(".container");
  const loading = document.getElementById("loading-text");
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const password = document.getElementById("password");
  const submit = document.getElementById("submit")
  const checkpassword = document.getElementById("checkPassword")
  const compareBtn = document.getElementById("comparePw")

  loading.style.display = "none";

  getInfo().then((data) => {
    loading.style.display = "block";
    infoFromAPI = data;
    setTimeout(() => {
      loading.style.display = "none";
    }, 1000);

    const fullUrl = window.location.href; 

    fullUrl === "http://127.0.0.1:5500/index.html"
      ? (container.innerHTML = `
      <div>
        <p>${infoFromAPI.disclaimer}</p>
        <h2>${infoFromAPI.chartName}</h2>
        <p class="container-sm bg-secondary bg-gradient" id="euro">${infoFromAPI.bpi.EUR.rate_float} <i class="bi bi-currency-euro"></i> ${infoFromAPI.bpi.EUR.description}</p>
        <p><sub>Last updated ${infoFromAPI.time.updated}</sub></p>
      </div>
      `)
      : (container.innerHTML = `
      <div>
        <p>${infoFromAPI.disclaimer}</p>
        <h2>${infoFromAPI.chartName}</h2>
        <p class="container-sm bg-secondary bg-gradient" id="dollar">${infoFromAPI.bpi.USD.rate_float} <i class="bi bi-currency-dollar"></i> ${infoFromAPI.bpi.USD.description}</p>
        <p><sub>Last updated ${infoFromAPI.time.updated}</sub></p>
      </div>
      `)

  });


  submit.addEventListener("click", () => {
    const firstNameValue = firstName.value;
    localStorage.setItem("firstName", firstNameValue)
    const lastNameValue = lastName.value
    localStorage.setItem("lastName", lastNameValue)
    const passwordValue = password.value
    const hashedPassword = hashPassword(passwordValue)
    localStorage.setItem("password", hashedPassword)

  })

  function hashPassword(password){
    let hash = CryptoJS.SHA512(password);
    return hash.toString(CryptoJS.enc.Hex);
  }

  function comparePassword(){
    const localPassword = localStorage.getItem("password");
    const inputPassword = checkpassword.value;
    const hashedInputPassword = hashPassword(inputPassword);
    localPassword === hashedInputPassword ?
    alert("login succesfully") :
    alert("username & password are wrong")
    
  }

  compareBtn.addEventListener("click", comparePassword)







  // btn.addEventListener("click", () => {
  //   loading.style.display = "block";

  //   getInfo().then((data) => {
  //     infoFromAPI = data;
  //     setTimeout(() => {
  //       loading.style.display = "none";
  //     }, 1000);
  //   });
  // });

  // btn2.addEventListener("click", () => {
  //   infoFromAPI
  //     ? (container.innerHTML = `
  //     <div>
  //       <p>${infoFromAPI.disclaimer}</p>
  //       <h2>${infoFromAPI.chartName}</h2>
  //       <p class="container-sm bg-secondary bg-gradient">${infoFromAPI.bpi.EUR.rate_float} <i class="bi bi-currency-euro"></i> ${infoFromAPI.bpi.EUR.description}</p>
  //       <p><sub>Last updated ${infoFromAPI.time.updated}</sub></p>
  //     </div>
  //     `)
  //     : alert("no info yet");
  // });

  //Add interval
  // setInterval(() => {
  //   getInfo().then((value) => {
  //     infoFromAPI = value;
  //     console.log(value);
  //   });
  // }, 60000);
});
