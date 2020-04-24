/* eslint-disable indent */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

export class CEService {
  async getExchangeRates(){
    try{
      let response = await fetch(`https://prime.exchangerate-api.com/v5/API_KEY/latest/USD`);
      let jsonifiedResponse;
      if(response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch (error){
      return false;
    }
  }
}