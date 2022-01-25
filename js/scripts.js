//Hamburger toggle menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

//Leaflet.js maps

if (window.hasOwnProperty("L")) {
  const mapCa = L.map("map-ca").setView([43.62, -79.4], 13);

  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    maxZoom: 18,
    zoomControl: false,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken: "pk.eyJ1IjoiYXJtdWtlbCIsImEiOiJja3lkZTB6OTUwanVvMm51cnQwbThpa2Y2In0.KgqUcuR6AhslVhzDlYkUxg",
  }).addTo(mapCa);

  const mapAu = L.map("map-au").setView([-30.3245, 149.7858], 13);

  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    maxZoom: 18,
    zoomControl: false,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken: "pk.eyJ1IjoiYXJtdWtlbCIsImEiOiJja3lkZTB6OTUwanVvMm51cnQwbThpa2Y2In0.KgqUcuR6AhslVhzDlYkUxg",
  }).addTo(mapAu);

  const mapUk = L.map("map-uk").setView([51.729, -3.861], 13);

  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    maxZoom: 18,
    zoomControl: false,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken: "pk.eyJ1IjoiYXJtdWtlbCIsImEiOiJja3lkZTB6OTUwanVvMm51cnQwbThpa2Y2In0.KgqUcuR6AhslVhzDlYkUxg",
  }).addTo(mapUk);
}

//Error message on submiting form

function validateEmptyField() {
  const inputField = document.querySelectorAll(".input");

  inputField.forEach((input) => {
    if (input.value == "") {
      input.nextElementSibling.innerHTML = `
        <p>Can't be empty</p>
        <img src="assets/contact/desktop/icon-error.svg" />
      `;
    } else if (input.nextElementSibling.value !== "") {
      input.nextElementSibling.innerHTML = "";
    }
  });
}

function validateEmail() {
  const email = document.querySelector("#email");
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.value.match(mailformat)) {
    email.nextElementSibling.innerHTML = "";
  } else {
    email.nextElementSibling.innerHTML = `
    <p>Please enter a valid email</p>
    <img src="assets/contact/desktop/icon-error.svg" />
  `;
  }
}

function validateForm() {
  validateEmptyField();
  validateEmail();
}

if (document.getElementById("contact")) {
  document.getElementById("submit").addEventListener("click", validateForm);
}
