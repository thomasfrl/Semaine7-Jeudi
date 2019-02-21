const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Bill', last: 'Newton', year: 1955 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

console.log("Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70");
let seventies = [];
entrepreneurs.forEach(e=>{
  if(e.year<1980 && e.year >=1970){
    seventies.push(e)
  }
})

console.log(seventies);

console.log("Quel âge aurait chaque inventeur aujourd'hui ?");
entrepreneurs.map(e=>{
  e.year = 2019 - e.year;
})

console.log(entrepreneurs);

console.log("Trie les inventeurs par ordre alphabétique du nom de famille");
entrepreneurs.sort((a,b)=>{
  if(a.last < b.last){
    return -1
  }else if (a.last === b.last){
    return 0
  }else{
    return 1
  }
})
console.log(entrepreneurs);
