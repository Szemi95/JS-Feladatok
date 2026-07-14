/*
	1. //-[Szószámláló]-//
	Írj függvényt, mely megszámolja egy szöveg szavainak számát. 
	Tehát bemeneti értéke egy szöveg, kimenete pedig, a szöveg szavainak száma.
*/

function wordcounter(text){
	let textitem = text.split(" ");
	return textitem.length;
}

console.log(
	wordcounter("Alma kertes kis ablak, benne van a nagy alak")
);


/*
	2. //-[Fogas kérdés]-//
	Írjatok egy szójáték függvényt, mely bemenetként megkap egy szöveget, kimenetként pedig a szó első és utolsó betűjét. 
	A két betű közt pedig annyi pontot, ahány karakter van a 2 betű közt.
        ("Fogas kérdés" esetén a kimenet "F..........s" lenne.)
*/

function wordGame(text){
	let firstChar = text[0]; 
	let lastChar = text[text.length-1];
	let point =".";

	return firstChar + point.repeat(text.length-2) + lastChar;
}

console.log(
	wordGame("alattomos")
);



/*
	3. //-[Sok lúd disznót győz :)]-//
	Írj függvényt, mely megnézi, hogy egy karakterláncban kis vagy nagy betűből van-e több, és az egész stringet, olyanná alakítja.
*/

function whichCase(text){
	const lowerCase = "aábcdeéfghiíjklmnoóöőprsszttyuúüűvzzs"
	let counterl = 0;
	const upperCase = lowerCase.toUpperCase();
	let counterU=0;

	for(char of text){
		if(lowerCase.includes(char))
			counterl ++;
		else if (upperCase.includes(char))
			counterU++
	}
	
	if (counterU>counterl)
		return text.toUpperCase();
	else
		return text.toLowerCase();
	
}

console.log(
	whichCase ("ALakoskoDó")
);


//másik megoldás:

const whichCase2 = (text) =>
	text.match(/[a-z]/g).length >= text.match(/[A-Z]/g).length ? text.toLowerCase() : text.toUpperCase();

console.log(
	whichCase2("ABLAk")
);





/*
	4. //-[Szomszédos betű]-//
	Írj függvényt, amely egy adott karakterlánc minden karakterét lecseréli az angol ABC következőjére!  
       Megjegyzés: az „a” helyett „b” lesz, a „z” helyett „a”.
*/

function nextChar(str){
	if (typeof str != "string")
		return str.toString();

	let resStr = "";

	for (const char of str){
		switch (true){
			case char >= 'a' && char < 'z' || char >= 'A' && char < 'Z':
				resStr += String.fromCharCode(char.charCodeAt(0) + 1);
				break;
			case char == 'z' || char == 'Z':
				resStr += String.fromCharCode(char.charCodeAt(0) - 25);
				break;
			default:
				resStr += char;
		}
	}

	return resStr;
}

console.log(
	nextChar("alma")
);



/*
	5. //-[Script a vége]-//
	Írj függvényt annak tesztelésére, hogy egy karakterlánc "Script"-re végződik-e. 
       A karakterlánc hosszának 6-nál nagyobbnak vagy egyenlőnek kell lennie.
*/

function endOfText(text){
	if (text<=6) return "Adj meg egy hosszabb szót";

	if (text.slice(-6)== "Script")
		return true;
	else
		return false;
}

console.log(
	endOfText ("JavaScrip")
);


/*
	6. //-[Dr.]-//
	Írj egy "dr(name)" függvényt, mely doktorrá nevezi ki azokat a neveket, amelyek előtt nincs ott a "dr." és visszatér az új névvel.
       Ha a bemenetként kapott név nem már rendelkezik a "dr." előtaggal, akkor simán a bemeneti névvel térjen vissza.
*/

function drName(name){
		if(name.slice(0,3)=="dr.")
			return name
		else
			return "dr." + name
}

console.log(
	drName("Béla")
);


/*
	7. //-[Fájl kiterjesztés]-//
	Írj egy függvényt, mely visszaadja egy fájl kiterjesztést. (bemenetként megkapja a fájl nevét, vagy egy teljes elérési útvonalat.)
*/

let fileName = "script.js";

function fileType(filename){
	let res = 0;
	let lasti = filename.lastIndexOf(".")
	return res = filename.slice(lasti);
}

console.log(
	fileType(fileName)
);


/*
szebb és jobb megoldás lett volna:
function fileType(filename) {
    return filename.slice(filename.lastIndexOf("."));
}

console.log(fileType("script.js")); // .js

*/


/*
	8. //-[Ékezetmentesítő]-//
	Írkjatok egy "deAccent" nevű ékezetmentesítő függvényt, mely bemenetként megkap egy stringet, és visszatér az ékezetmentes változattal. 
	Tehát az "á" hangot "a"-ra, az "ó" hangot "o"-ra, ... cseréli.
*/

function deAccent(str){
	const replaceChars = {
		"á": "a",
		"é": "e",
		"í": "i",
		"ó": "o",
		"ö": "o",
		"ő": "o",
		"ú": "u",
		"ü": "u",
		"ű": "u",
	};

	return str.replace(/[öüóőúéáűí]/gi, (char) => {
		
		return char == char.toUpperCase() ? replaceChars[char.toLowerCase()].toUpperCase() : replaceChars[char];
	});
}


/*
	9. //-[Előléptetés]-//
*/
	//Adott az alábbi beosztások tömb:
const beosztasok = ["raktáros", "adminisztrátor", "logisztikus"];

//És adott az alábbi szöveg:

let s = "A cégnél Sándor raktáros, Ottó logisztikus és Irma adminisztrátor, Jakab pedig biztonsági őr.";

//A feladat az, hogy az s szövegben léptessük elő "vezető" beosztásba azokat, akiknek
//pozíciója szerepel a beosztások tömbbe

for (const beosztas of beosztasok) {
    s = s.replaceAll(beosztas, "vezető");
}

console.log(s);
/*
	10. //-[Szöveg a HTML-be]-// :)
	Prompt segítségével olvassatok be egy szöveget, amit jelenítsetek meg a HTML oldalon egy tetszőleges HTML tegben.
*/


const text = prompt("Kérlek írd ide a megjelenítendő szöveget")
const element = document.querySelector("#content");
element.textContent = text;
