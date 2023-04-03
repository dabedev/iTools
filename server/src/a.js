const axios = require("axios");

const options = {
    method: 'POST',
    url: 'https://similarityapi.com/api/v1/similarity',
    params: {
        text1: 'First text',
        text2: 'Second text'
    },
    headers: {
        'Authorization': 'dANNCUSaiRDkVBqm4khHt9DUg_i6Y3oI',
    }
};

axios.request(options).then(async function (response) {
    console.log(response.data)
}).catch(function (error) {
    console.error(error.response.data.error);
});