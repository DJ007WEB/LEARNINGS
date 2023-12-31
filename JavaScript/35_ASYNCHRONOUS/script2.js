"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderCountry = function (data, className = "") {
  const name = data.name.common;
  const flag = data.flags.svg;
  const region = data.region;
  const language = Object.values(data.languages)[0];
  const currency = Object.values(data.currencies)[0].name;

  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${flag}" />
    <div class="country__data">
      <h3 class="country__name">${name}</h3>
      <h4 class="country__region">${region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${language}</p>
      <p class="country__row"><span>💰</span>${currency}</p>
    </div>
  </article>
  `;

  countriesContainer.insertAdjacentHTML("beforeend", html);

  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);

  countriesContainer.style.opacity = 1;
};

const getJSon = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then(function (response) {
    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);

    return response.json();
  });
};

const getCountryData = function (country) {
  getJSon(`https://restcountries.com/v3.1/name/${country}`, "Country Not Found")
    .then(function (data) {
      renderCountry(data[0]);

      const neighbour = data[0].borders?.[0];

      return getJSon(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        "Neighbour Not Found"
      );
    })

    .then((data) => {
      console.log(data);
      renderCountry(data[0], "neighbour");
    })
    .catch((err) => {
      console.log(err);
      renderError(`Something Went Wrong ${err.message}. Try Again!`);
    });
};

btn.addEventListener("click", function () {
  getCountryData("portugal");
});


