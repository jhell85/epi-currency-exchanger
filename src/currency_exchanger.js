/* eslint-disable indent */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
let currencyFormat = require("currency-format");

export class CEService {
  async getExchangeRates(currency) {
    try {
      let response = await fetch(
        `https://prime.exchangerate-api.com/v5/${process.env.API_KEY}/latest/${currency}`
      );
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch (error) {
      return false;
    }
  }
}

export class CurrencyExchange {
  constructor(currency, amount, data){
    this.currencyCode = currency;
    this.amount = amount;
    this.data = data;
  }
  getCurrencyData(){
    for (const key in currencyFormat){
      if (key === this.currencyCode){
        this.name = currencyFormat[key]['name']
        this.symbol = currencyFormat[key]['symbol']['grapheme']
        console.log(`name ${this.name} symbol ${this.symbol}`);
        
        if(currencyFormat[key]['symbol']['template'] === '1 $' ){
          this.inFront = false;
        } else {
          this.inFront = true;
        }
      }
    }
  }
  convert(){
    let rates = this.data["conversion_rates"]
    for (const code in rates){
      for(const key in currencyFormat)
      if(code === key){
        console.log(`${this.inFront ? this.symbol : ""}${this.amount}${this.inFront ? '': this.symbol} equals ${rates[code] * this.amount} ${currencyFormat[key]['name']}`);
        
      }
    }
  }
}
