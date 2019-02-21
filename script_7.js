const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 9 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 2 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 6 },
  { title: 'Les frères Karamazov', id: 450911, rented: 5 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");
let n = 0;
books.forEach(book =>{
	if(book.rented !== 0){
		n++;
	}
})
console.log(n>0);

console.log("Quel est livre le plus emprunté ?");
let maxRented;
let max = 0;
books.forEach(book =>{
	if(book.rented > max){
		max = book.rented;
		maxRented = book;
	}
})
console.log(maxRented);


console.log("Quel est le livre le moins emprunté ?");
let minRented;
let min = Infinity;
books.forEach(book =>{
	if(book.rented < min){
		min = book.rented;
		minRented = book;
	}
})
console.log(minRented);

console.log("Trouve le livre avec l'ID: 873495 ");
let searchBook;
books.forEach(book =>{
	if(book.id === 873495){
		searchBook = book;
	}
})
console.log(searchBook);

console.log("Supprime le livre avec l'ID: 133712 ");
let index;
let booksBis = JSON.parse(JSON.stringify(books));
books.forEach((book,i) =>{
	if(book.id === 133712){
		index = i;
	}
})
booksBis.splice(index,1);
console.log(booksBis);

console.log("Trie les livres par ordre alphabétique");
books.sort((a,b)=>{
  if(a.title < b.title){
    return -1
  }else if (a.title === b.title){
    return 0
  }else{
    return 1
  }
})
console.log(books);
