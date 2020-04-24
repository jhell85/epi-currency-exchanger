export class CEService {
  async getExchangeRates(){
    try{
      let response = await fetch(`https://prime.exchangerate-api.com/v5/API_KEY/latest/USD`)
    }
  }
}