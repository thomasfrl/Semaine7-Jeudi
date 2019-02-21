function factorielle(n){
	if (n > 0){
		return n*factorielle(n-1);
	}
	return 1
}

let n = prompt('De quel nombre veut tu calculer la factorielle ?')
console.log('le résultat est : ' + factorielle(n));