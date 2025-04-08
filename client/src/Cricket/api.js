import axios from "axios";

const API_KEY = "12559956-0cf1-4b0a-a10c-682a3202da81";

export const getMatches =async() => {

  //second account api 

// const options = {
//   method: 'GET',
//   url: 'https://cricbuzz-cricket.p.rapidapi.com/matches/v1/live',
//   headers: {
//     'X-RapidAPI-Key': '9db29f31e2msh6d1f7d503d62ec2p14da10jsnb675d50393c8',
//     'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	return(response.data);
// } catch (error) {
// 	console.error(error);
// }

const options = {
  method: 'GET',
  url: 'https://cricbuzz-cricket.p.rapidapi.com/matches/v1/live',
  headers: {
    'X-RapidAPI-Key': 'd31a95c477msha9473a0377c8bc2p15e76ajsn17337edb01fd',
    'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	return(response.data);
} catch (error) {
	console.error(error);
}
  // const url = `https://api.cricapi.com/v1/currentMatches?apikey=${API_KEY}&offset=0`;
  // console.log("URL", url);
  // return fetch(url)
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .catch((error) => {
  //     console.log("ERROR ", error);
  //   });
};

//get the score of the cuurent match

export const getMatchDetail = async(id) => {
  const url =await axios.get(`https://api.cricapi.com/v1/match_scorecard?apikey=${API_KEY}&offset=0&id=${id}`)
  return(url.data.data);
  // return fetch(url)
  //   .then((response) =>console.log(response) && response.json())
  //   .catch((error) => console.log(error));
};
