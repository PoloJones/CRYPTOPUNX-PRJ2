// var apikey = "8bd75f8c-d432-4f8c-83de-df36a896d752";

// const encodedParams = new URLSearchParams();
// encodedParams.append("start", "1");
// encodedParams.append("limit", "5");

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'content-type': 'application/x-www-form-urlencoded',
// 		'X-RapidAPI-Host': 'CoinMarketCapzakutynskyV1.p.rapidapi.com',
// 		'X-RapidAPI-Key': apikey
// 	},
// 	body: encodedParams
// };

// fetch('https://coinmarketcapzakutynskyv1.p.rapidapi.com/getCryptocurrenciesList', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

// url = 'https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest'
// parameters = {
//   'start':'1',
//   'limit':'5000',
//   'convert':'USD'
// }
// headers = {
//   'Accepts': 'application/json',
//   'X-CMC_PRO_API_KEY='+ apikey
// }

// function getApi() {
//     var url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
//     qString = '?CMC_PRO_API_KEY='+ apikey + "&start=1&limit=5&convert=USD";
//     fetch(url + qString)
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (data) {
//         console.log(data);
//       })
// }

// var apikey = "8bd75f8c-d432-4f8c-83de-df36a896d752";


// let url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
//     qString = '?X_CMC_PRO_API_KEY='+ apikey + '&start=1&limit=5&convert=USD';

// fetch(url + qString)
//     .then(function (response) {
//     return response.json();
//     })
//     .then(function (data) {
//     console.log(data);
//     })