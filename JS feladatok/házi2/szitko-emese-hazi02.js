/*
	Az eddig átvett anyagok:
			
			Kezdőlépések:
			- Math objekt függvényei, operátorok, típusok és változók
			- változók hatásköre
			- típuskonverzió 

			Vezérlési szerkezetek:
			- ciklusok: while, do while, for, for in, for off
			- if, else, else if
			- switch case
			- function
		
			Stringműveletek: 
			- escape karakterek 
			- stringkezelő függvények:  .charAt(), .charCodeAt(),  .toUpperCase(), .toLowerCase() .concat(), .includes(),  .indexOf(), .lastIndexOf() .trim(),  .trimStart(), .trimEnd(), .slice(), replace()

			// tömbökkel már korábban magamtól kicsit ismerkedtem :D //
*/

/*
	1. //-[Műveletteszt]-//
	Írj függvényt mely megkap 2 operandust, és egy eredményt. 
	A függvény döntse el, hogy a 4 alapművelet valamelyike, adhatja-e a megadott eredményt, ha igen, térjen vissza true értékkel, ha nem, egy false értékkel.
*/

function muveletteszt(szam1,szam2, eredmeny){
	switch (eredmeny) {
		case szam1 + szam2:
			return true;
		case szam1 - szam2:
			return true;
		case szam2 -szam1:
			return true;
		case szam1 * szam2:
			return true;
		case szam1 / szam2:
			return true;
		case szam2 / szam1:
			return true	;
		default:
			return false;
	}
}

console.log(muveletteszt(20,5,25));

/*
	2. //-[Számtagok összege]-//
	Írj függvényt, mely visszatér egy 2 jegyű szám tagjainak összegével. 25 esetén 2+5, vagyis 7-el
*/

function szamtagokOsszege(number){
	//határozzuk meg a kétjegyű szám első tagját//
	let first = number/10;
	first = Math.floor(first);

	// határozzuk meg a második tagot//
	let second = number%10;
	return first + second
}

console.log(szamtagokOsszege(13));

/*
	3. //-[Magánhangzó számláló]-//
	Írj függvényt, mely megszámolja egy adott karakterlánc magánhangzóinak számát!
*/

/* Eredeti megoldásom :D 

function szamlalo(karakterlanc){
	let i = 0;  
	let maganhangzo = ["A","a","Á","á","E","e","É","é","I","i","Í","í","O","o","Ó","ó","Ö","ö","Ő","ő","U","u","Ú","ú","Ü","ü","Ű","ű"]; // van egy tömböm, amiben tárolom a magánhangzókat, ez lehetett volna egy string is//
	for(let index of maganhangzo) //végig megyek a magánhangzókon//
	for(let karakter of karakterlanc) //végigmegyek a karaktereken//
	if(karakter==index) //ha az adott karakter egyezik az indexxel jelölttel//
		i++   //akkor azt feljegyzem//
	return i
}

console.log(szamlalo("programozás"));*/
//elég csak vagy a nagy vagy a kisbetűket felvenni stringbe mondjuk//

function szamlalo(karakterlanc){
	let i = 0;  
	let maganhangzo = "AÁEÉIÍOÓÖŐUÚÜŰ";
	for(let index of maganhangzo) 
		for(let karakter of karakterlanc) 
			if(karakter==index || karakter == index.toLowerCase()) 
				i++;   
	return i;
}

console.log(szamlalo("prOgramozás"));
 
/*
	4. //-[Mondat]-//
	Írj függvényt, mely eldönti, hogy egy karakerlánc lehet-e mondat, vagy sem. 
        Egy karakterlánc akkor tekinhető mondatnak, ha nagy betűvel kezdődik, és ponttal végződik.
*/

/* Eredeti megoldásom :D 

function mondat(karakterlanc){
	let kezdo = "AÁBCDEÉFGHIÍJKLMNOÓÖŐPRSTUÚÜŰVZ";
	let vege = ".!?";
	let utolsoKarakter = karakterlanc.length-1;
	
	for (let karakter of kezdo)
	for (let jel of vege)
	if (karakterlanc[0] == karakter && karakterlanc[utolsoKarakter]==jel)
		return true
	else
		return "Ez nem egy mondat"
}

console.log(mondat("Ablaktisztitas."));*/

const mondat = (karakterlanc) =>
    karakterlanc[0] == karakterlanc[0].toUpperCase() &&
    ".!?".includes(karakterlanc[karakterlanc.length - 1]);

console.log(mondat("Ablaktisztitas."));

/*
	5. //-[Tömb összeg]-//
	Írjatok egy "osszeg" nevű függvényt, mely bemeneti paraméterként megkap egy tömböt, mely számokkal van feltöltve, és 
       kimenetként visszaadja, a tömb elemeinek az összegét.
*/

function osszeg(tomb){
	eredmeny = 0;
	for (szam of tomb)
	eredmeny += szam;
	return eredmeny;
}

let szamsor = [1,6,5,7]
console.log(osszeg(szamsor));


/*
	6. //-[elől hátul, 1-e?]-//
	Írj JavaScript függvényt annak ellenőrzésére, hogy egy adott egész számok tömbjének első vagy utolsó pozíciójában 1 szerepel-e. 
    A tömb hosszának nagyobbnak vagy egyenlőnek kell lennie 1-nél.
*/

function one(tomb){
		if (tomb[0]==1 || tomb[tomb.length-1]==1)
			return true;
		else
			return false;
}

let szamok = [0,8,9,0]
console.log(one(szamok));

/*
	7. //-[Közelebb 100-hoz]-//
	Írj Javascript programot, mely két megadott szám közül megkeresi, hogy melyik van közelebb a 100-hoz
*/

function szazhozKozel(szam1, szam2){
	let kivonas1 = 100 - Math.abs(szam1);
	let kivonas2 = 100- Math.abs(szam2);
	if(kivonas1>kivonas2)
		return szam1;
	else
		return szam2;
}
console.log(szazhozKozel(99,9999999999999999999999999999999999));



/*
	8. //-[Itervallumban van-e?]-//
	Írj programot, mely eldönti egy számról, hogy egy adott inervallumba van-e.
*/

function benneVan(IntervallumK, IntervallumV, szam){
	let ujKezdet = IntervallumK;
	let ujVege =IntervallumV;

	if (IntervallumV<IntervallumK){
		ujKezdet = IntervallumV;
		ujVege = IntervallumK;
		}

	if (szam>=ujKezdet && szam<=ujVege)
		return true;
	else
		return false;
		
}

console.log(benneVan(9,5,7));


/*
	9. //-[3 közül a legnagyobb]-//
	Írj JavaScript programot amely, három megadott egész szám közül visszaadja a legnagyobbat.
*/

function melyikNagyobb(szam1,szam2,szam3){   // ezt ugye lehetett volna Math.max()-al is
	let nagyobb =
	szam1> szam2 ? szam1 : szam2;

	if (szam3>nagyobb)
		nagyobb = szam3;
	return nagyobb; 
}

console.log(melyikNagyobb(45,25,30));


/*
	10. //-[Utolsó számjegyek]-//
	Írj függvényt, mely 3 számról eldönti, hogy az utolsó számjegyük egyforma-e.
*/
function utolsoSzamjegy(szam1,szam2,szam3){
	let maradekok = szam1%10;
	if(maradekok==szam2%10 && maradekok == szam3%10)
		return true;
	else
		return false;
}

console.log( "10. feladat", utolsoSzamjegy(72,1122,2));



/*
	11. //-[Számtagok összege]-//
	Írj függvényt, mely visszatér egy 2 jegyű szám tagjainak összegével. 25 esetén 2+5, vagyis 7-el
*/
function szamtagokOsszege(number){
	//határozzuk meg a kétjegyű szám első tagját//
	let first = number/10;
	first = Math.floor(first);

	// határozzuk meg a második tagot//
	let second = number%10;
	return first + second;
}

console.log(szamtagokOsszege(13));

/*
	12. //-[MInden haramdik]-//
	Írj ciklust, mely "a" és "b" közt a ciklusváltozóban, csak minden harmadik számot generálja ki.
*/

function mindenHarmadik(a,b){
	let eredmeny = [];
	let ertekmegorzo = 0;
	if(a>b){
		ertekmegorzo = a;
		a = b;
		b = ertekmegorzo;
	}
	while(a<=b){
		a += 3;
		eredmeny.push(a);
	}
	return eredmeny;
}

console.log(mindenHarmadik(1,18));




/*
	13. //-[Visszafele]-//
	Írj függvényt, mely egy visszafelé haladó ciklust valósít meg. A függvény 2 paramétert kap, hogy mettől meddig haladjon.
	A függvény a ciklust, minden esetben a nagyobb értékű paraméterrel inicializálja és haladjon visszafele a kisebbik értékig.
	Az ciklusváltozó értékeit jelenítsük meg a console-ben. (Ez esetben a függvénynek nem kell visszatérési értéket adnotok)
*/

function visszafele(kezdo, vegzo){
	let tarolo = 0;
	if (vegzo>kezdo){
			tarolo=vegzo;
			vegzo = kezdo;
			kezdo = tarolo;
		}
	while(kezdo>=vegzo){
		console.log(kezdo)
		kezdo--;
	}
}

visszafele(5,10);


/*
	14. //-[Tömbfeltöltés]-//
	Írj egy függvényt, mely segítségével a felhasználó fel tud tölteni egy tömböt.
        Prompt segítségével, addig kérünk be egy újabb elemet, amíg azt nem gépeljük be, hogy "stop"
*/

/*

Eredeti megoldásom

function filling(){
	let tomb = [];
	let value = 0;
	while (value != "stop"){
		value = prompt("Kérlek írj be valamit");
		tomb.push(value);
		}
	return tomb;
}

console.log(filling());

*/

function tombFeltoltes(){
	const array = [];
	let arrayItem;
	while((arrayItem=prompt ("Kérem a következő elemet") ).toLowerCase() !="stop" ){
		array.push(arrayItem);
	}

	return array;
}

const tomb = tombFeltoltes();
alert("A bekért elemek: " + tomb);


/*
	15. //-[Hamiskás]-//
	Írj isFalsy nevezetű függvényt, mely megkap egy értéket, és eldönti, hogy a paramétere hamiskás-e.
*/

function isFalsy(value){
	let tomb = [0, null, undefined, false, "", NaN]
	for(let falsy of tomb){
		if (value === falsy)
			return true;
	}
	return false;
}

console.log(isFalsy(false));

