# _Currency Exchanger_

#### | apr 24th. 2020_

#### By _** Josh Hellman**_

## Description

Currency exchanging app will let a user choose from a drop down list of global currency and take an ammout input.  after a user submits it will tell them the conversion rates from that currency and amount to 50 different global currencies from around the world.
## Setup/Installation Requirements


_Make sure you have [git version control](https://git-scm.com/downloads) installed on your computer._

_To run this application on your own machine you'll need to get an API key from [exchangerate-api.com](https://www.exchangerate-api.com/), you will need this in step seven of the set up_

1. find the green 'Clone or Download' button and copy the link
2. open terminal and type...

**Windows**
```sh 
cd desktop
```

 Mac & linux 
 ```sh
 cd ~/Desktop
 ```

 3. in terminal type '_git clone https://github.com/jhell85/epi-currency-exchanger.git_ '

```sh
git clone https://github.com/jhell85/epi-currency-exchanger.git
```

4. navigate to the new folder that was created on your desk
```sh
cd epi-currency-exchanger
```

5. run npm install
```sh
npm install
```
6. create a .env flie 
```sh
touch .env 
```
7. place your API key from [exchangerate-api.com](exchangerate-api.com) in your .env file
```sh
echo API_KEY={your api key here remove {}} >> .env
```
8. run development server
```sh
npm run start
```


## Specs
### Behavior Driven Development Spec List

Behavoir | Input | Output
:---------|:------:|:------:
|1 - The application will let a user select a currency from a drop down menu | 'US Dollar' selected | input display changes to selected input |
|2 - The application will take in a number from an input  | '10' | '10 will be displayed in amount input' |
|3 - The application will let a user submit the information above and the program will make an api GET request to exchangerate-api.com | 'API request made' | 'response isn returned to the program' |
|4 - The application will sift through the response calculate the exchange rate for each currency and return it to them | '10 USD' | current exchange rate for inputted amount is displayed in 50 other currencies |


## Support 

_The software is provided as is. It might work as expected - or not. Use at your own risk._


## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) - Simple Scaffolding
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Used for interactivity in the page
* [jQuery](https://jquery.com/) - Used to interact with the DOM
* [Bootstrap 4.4](https://getbootstrap.com/) - Used for styling
* [webpack](https://webpack.js.org/)
* [ESLint](https://eslint.org/)
* [Node.js](https://nodejs.org/en/)
* [Uglifyjs](https://www.uglifyjs.net/)
* [Jest](https://jestjs.io/)

### License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

Copyright (c) 2020 **_Josh Hellman_**