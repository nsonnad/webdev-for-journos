let popData = [
  ["Brazil","213,445,417"],
  ["China","1,439,323,776"],
  ["India","1,380,004,385"],
  ["Indonesia","273,523,615"],
  ["Pakistan","220,892,340"],
  ["United States","331,449,281"]
]

let energyData = [
  // 2019 data
  // value is consumption in million tonnes oil equivalent
  ["Coal",3863.3],
  ["Hydroelectric",3106.7],
  ["Natural Gas",3776.1],
  ["Nuclear",2556.9],
  ["Oil",4836.2],
  ["Renewables",2961.6]
]

let langData = [
  // 2021 data from ethnologue
  // value is number of speakers in millions
  ["Chinese (Mandarin)",1111],
  ["Spanish",536],
  ["English",1191],
  ["Hindi",615],
  ["Bengali",265],
  ["Portuguese",258],
  ["Russian",258],
  ["Japanese",128],
  ["Punjabi",119],
  ["German",132],
  ["Javanese",98.1],
  ["Wu",80],
  ["Korean",77.2],
  ["French",300],
  ["Telugu",92.7],
  ["Marathi",83.1],
  ["Turkish",83.2],
  ["Tamil",78.5],
  ["Vietnamese",95.4],
  ["Yue (Cantonese)",71.5],
  ["Urdu",68.6],
  ["Min Nan",49],
  ["Jin",45],
  ["Gujarati",56.5],
  ["Polish",45],
  ["Pashto",43],
  ["Kannada",44.9],
  ["Xiang",36],
  ["Malayalam",38.8],
  ["Sundanese",36.6],
  ["Hausa",38.8],
  ["Oriya (Odia)",33.2],
  ["Burmese",33.2],
  ["Hakka",34.3],
  ["Ukrainian",33.7],
  ["Bhojpuri",33.1],
  ["Tagalog",29.7],
  ["Yoruba",28.9],
  ["Maithili",33.7],
  ["Swahili",16.7]
];

// Array.forEach
// The forEach() method executes a provided function 
// once for each array element.

// popData.forEach(function(country) {
//   console.log(country);
// });

popData.forEach(convertPopToNumber)

function convertPopToNumber(country) {
  let population = country[1].replaceAll(",", "")
  let populationInt = parseInt(population);
  country[1] = populationInt;
}

popData.sort(function(countryA, countryB) {
    // each country looks like: ["Country", PopInt]
    return countryB[1] - countryA[1];
});

// Array.filter
// filter language data by > 50 million
let smallerLanguages = langData.filter(function(language) {
  let numSpeakers = language[1];
  return numSpeakers <= 50;
})

// Working with HTML elements in JavaScript
//- `document.querySelector`
//- `document.createElement`
//- `document.appendChild`

let container = document.querySelector(".container");

popData.forEach(function(country) {
  let p = document.createElement("p")
  p.textContent = country[0] + ", " + country[1];
  container.appendChild(p);
})

