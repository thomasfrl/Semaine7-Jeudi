function pyramide(n){
	for(i=1;i<=n;i++){
		let l =''
		for(j=1;j<=n-i;j++){
			 l += ' ';
		}
		for(j=1;j<=i;j++){
			l += '#';
		}
		console.log(l);
	}
}


let n = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
pyramide(n)