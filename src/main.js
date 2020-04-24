/* eslint-disable indent */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import $ from "jquery";
import { CEService } from "./currency_exchanger";

$(document).ready(function () {
  $("#submitBtn").click(function () {
    
    async () => {
      console.log("in");
      let currencyData = new CEService();
      const response = await currencyData.getExchangeRates();
      console.log(response);
    };
  });
});
