/* eslint-disable indent */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import $ from "jquery";
import { CEService } from "./currency_exchanger";
let currencyFormat = require("currency-format");

$(document).ready(function () {
  $("#submitBtn").click(function () {
    let currency = $("#currency").val();
    let amount = $("#amount").val();
    (async () => {
      let currencyData = new CEService();
      const response = await currencyData.getExchangeRates(currency);
      console.log(response);
    })();
  });
  populateDropDown();
});

function populateDropDown() {
  console.log(currencyFormat);

  let currencyCodes = ["USD", "AED", "ARS", "AUD", "BGN", "BRL", "BSD", "CAD", "CHF", "CLP", "CNY", "COP", "CZK", "DKK", "DOP", "EGP", "EUR", "FJD", "GBP", "GTQ", "HKD", "HRK", "HUF", "IDR", "ILS", "INR", "ISK", "JPY", "KRW", "KZT", "MXN", "MYR", "NOK", "NZD", "PAB", "PEN", "PHP", "PKR", "PLN", "PYG", "RON", "RUB", "SAR", "SEK", "SGD", "THB", "TRY", "TWD", "UAH", "UYU", "ZAR"]
  console.log(currencyCodes.length);
  
  currencyCodes.forEach((code) => {
    for (const key in currencyFormat)
      if (code === key)
        // console.log(currencyFormat[key]['name']);
        $("#currency").append(
          `<option value="${key}">${currencyFormat[key]["name"]}</option>`
        );
  });
}
