/* eslint-disable indent */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import $ from "jquery";
import { CEService, CurrencyExchange } from "./currency_exchanger";
let currencyFormat = require("currency-format");

$(document).ready(function () {
  $("#submitBtn").click(function () {
    (async () => {
      let amount = $("#amount").val();
      let currency = $("#currency").val();
      let currencyData = new CEService();
      const response = await currencyData.getExchangeRates(currency);
      console.log(response);
      let currencyExchange = new CurrencyExchange(currency, amount, response);
      currencyExchange.getCurrencyData();
      let displayList = currencyExchange.convert();
      let header = displayList.shift()
      $('#output-container').html(`${header}<div class="output row justify-content-md-center"></div>`)
      $('.output').html(printList(displayList));
      
    })();

  });
  populateDropDown();
});

function printList(displayList){
  let display = ""
  display += `<div class="col-3">`
  for (let i = 0; i < displayList.length; i++) {
    const element = displayList[i];
     if (i % 10 === 0 && i != 1 && i != 0){
      display += `</div><div class="col-3 pb-3">${element}`
    } else {
      display += element
    }
  }
  return display
}

function populateDropDown() {
  console.log(currencyFormat);

  let currencyCodes = ["USD", "AED", "ARS", "AUD", "BGN", "BRL", "BSD", "CAD", "CHF", "CLP", "CNY", "COP", "CZK", "DKK", "DOP", "EGP", "EUR", "FJD", "GBP", "GTQ", "HKD", "HRK", "HUF", "IDR", "ILS", "INR", "ISK", "JPY", "KRW", "KZT", "MXN", "MYR", "NOK", "NZD", "PAB", "PEN", "PHP", "PKR", "PLN", "PYG", "RON", "RUB", "SAR", "SEK", "SGD", "THB", "TRY", "TWD", "UAH", "UYU", "ZAR"];
  currencyCodes.forEach((code) => {
    for (const key in currencyFormat)
      if (code === key)
        // console.log(currencyFormat[key]['name']);
        $("#currency").append(
          `<option value="${key}">${currencyFormat[key]["name"]}</option>`
        );
  });
}

