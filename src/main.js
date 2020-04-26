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
      if (response.error) {
        $('#output-container').html(`<div class="row"><div class="col-md-6 offset-md-3 output"><h2 class="text-center">Sorry something went wrong!!</h2></div></div><div class="row justify-content-md-center"><div class=""><img class="rounded error"src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Ferror-like-laptop-dead-emoji-icon-symbol-page-not-found-web-site-under-construction-maintenance-concept-cartoon-134304720.jpg&f=1&nofb=1"</div></div>`);
      } else {
        let currencyExchange = new CurrencyExchange(currency, amount, response);
        currencyExchange.getCurrencyData();
        let displayList = currencyExchange.convert();
        let header = displayList.shift();
        $("#output-container").html(
          `${header}<div id="output" class="output pt-3 pl-5 row justify-content-md-around"></div>`
        );
        $("#output").html(printList(displayList));
      }
    })();
  });
  populateDropDown();
});

function printList(displayList) {
  let display = "";
  display += `<div class="col-3">`;
  for (let i = 0; i < displayList.length; i++) {
    const element = displayList[i];
    if (i % 5 === 0 && i != 1 && i != 0) {
      display += `</div><div class="col-3 pb-1 font-weight-normal">${element}`;
    } else {
      display += element;
    }
  }
  return display;
}

function populateDropDown() {
  let currencyCodes = ["USD", "AED", "ARS", "AUD", "BGN", "BRL", "BSD", "CAD", "CHF", "CLP", "CNY", "COP", "CZK", "DKK", "DOP", "EGP", "EUR", "FJD", "GBP", "GTQ", "HKD", "HRK", "HUF", "IDR", "ILS", "INR", "ISK", "JPY", "KRW", "KZT", "MXN", "MYR", "NOK", "NZD", "PAB", "PEN", "PHP", "PKR", "PLN", "PYG", "RON", "RUB", "SAR", "SEK", "SGD", "THB", "TRY", "TWD", "UAH", "UYU", "ZAR"];
  currencyCodes.forEach((code) => {
    for (const key in currencyFormat)
      if (code === key)
        // the line of console.log below is uncomment it will not let the dropdown list populate properly, but Why?
        // console.log(currencyFormat[key]['name']);
        $("#currency").append(
          `<option value="${key}">${currencyFormat[key]["name"]}</option>`
        );
  });
}
