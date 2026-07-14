/*
	1. //-[Gondoltam egy számra]-//
	Készíts egy egyszerű tippelős játékot. A program generáljon egy véletlen számot 1 és 10 között. 
	A ciklus addig kérjen be tippeket(számokat), amíg a tipp nem egyezik a "gondolt" (a program elején generált random) számmal. 
	Ha a játékos eltalálta, a program álljon le és írja ki: "Gratulálok! A számot sikerült 'x' lépésben kitalálnod.". 
	Az 'x' helyére generáljátok be, hogy hány tipp kellett a játékosnak a megfejtéshez.
*/

function tippGame(){
	let solution = Math.random()*10;
	solution = Math.floor(solution)
	let tipp = 0;
	let tippcount = 0;

	while (tipp != solution){
		tipp = Number(prompt("Kérlek írd be a tipped"));
		tippcount++;
	}

	return alert(`Gratulálok! A számot sikerült ${tippcount} lépésben kitalálnod`)

}

// rájöttem, hogy nekem itt ez function lett :D //
console.log (tippGame())

/*
	2. //-[Kávéautomata]-//
	Képzelj el egy automatát, ami kávét ad, ami 250 Ft. Tehát ennyit kell bedobni. 
	A programod szimuláljon egy ciklust, ahol a felhasználó érméket dob be (20, 50, 100 és 200-as érméket). 
	A ciklusnak addig kell érméket fogadnia, amíg a bedobott érmék összege, el nem éri vagy meg nem haladja a 250 Ft-ot.

	Kimenet: Ha a bedobott érmék összege elérte a 250-et, írja ki: "Kávé elkészült.". 
	Ha több pénzt dobott be, írja ki a visszajárót is! (Pl.: "Kávé elkészült. Visszajáró: 20 Ft.").
*/

alert("Jön a következő játék!")

function kaveMachine(){
	let throwIn = 0;
	let credit = 0;

	while (credit< 250){ // még ráér kér még egy érmét, ha egyenlőségjel is van//
		throwIn = Number(prompt(`Aktuális egyenleg: ${credit} Ft. Kérem dobjon be egy érmét!`));
		if (throwIn == 20 || throwIn == 50 || throwIn == 100 || throwIn == 200){
			credit += throwIn;
		}

		else{
			alert("Rossz érme! Kérem 20,50,100 vagy 200-as érmét dobjon be!");
		}
	}

	if(credit == 250){
			console.log ("Kávé elkészült.");
		}
		else{
			console.log (`Kávé elkészült. Visszajáró: ${credit-250} Ft`);
		}
	return 0;
}
	
	console.log(kaveMachine());



