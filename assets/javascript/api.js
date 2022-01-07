
const axios = require('axios').default;

const api_key = 'c6fa6dd109c4bb04f5de9349a6e31e14';
const url = "https://api.themoviedb.org/3/movie/550?api_key=";
const everyThing = url + api_key;




axios({
    method: 'GET',
    
    responseType: 'movies'
})
    .then(function (response) {
        response.data.pipe(fs.createWriteStream('movies'));

    })


axios.get('data')
    .then(function (data) {
        console.log(data);
    })
    .catch(function (error) {
        console.log(error);
    });


