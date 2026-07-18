/*
	1. //-[Max szomszéd]-//
	Írj függvényt, mely megkeresi egy adott egész számokat tartalmazó tömb két szomszédos eleme közötti maximális különbséget.
*/

function diffTwoNum(arr){
	if( arr.length < 2 ) return;
	let diff = [];

	for (let i = 0; i<arr.length-1; i++){
		diff.push(Math.abs(arr[i]-arr[i+1]));
		
	}
	return Math.max(...diff);
	
}
let num = [5,12,4,34,7,85]
console.log(
	diffTwoNum(num)
);

// tömb nélkül

function maxDiff(arr) {
    if (arr.length < 2) return;

    let maxDiff = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        let diff = Math.abs(arr[i] - arr[i + 1]);

        if (diff > maxDiff) {
            maxDiff = diff;
        }
    }

    return maxDiff;
}

/*
	2. //-[multiDelete]-//
	Írjatok egy multiDelete függvényt, mely bemenetként megkap egy tömböt, melyből elemeket szeretnénk törölni, 
	és egy másik tömbben azokat az elemeket, amelyeket törölni szeretnénk. 
	A függvény törölje az első paraméterként megadott tömbből, a második paraméterként megadott tömb elemeit. 
	A függvény végül térjen vissza a sikeresen törölt elemek tömbjével.
*/
 // egy tömb amiben elemek vannak
 // egy másik a törlendő elemekkel
 // eredmény a azon elemek tömbje, melyeket töröltünk


/*
	5,15,4,7,8,36
	törlendő elemek 5,15
	megnézném a törlendő elemet
	végigmennék a listán
	ha a törlendő elem egyezik a lista elemével, akkor kivenném a tömbből
	és a kivett elemet hozzáadnám egy új tömbhöz
*/
function multiDelete(arr, delArr){
	let deletedElement = [];

	for (let i = 0; i<delArr.length; i++){
		for(let c = 0; c<arr.length; c++){
			if(delArr[i]==arr[c]){
				deletedElement.push(arr[c]);
				arr.splice(c,1) // ha feltételezzük, hogy a keresett csak egyszer szerepel a tömbben, akkor kell break 
			}
		}
	}

	return deletedElement;
}

// let num = [5,12,4,34,7,85]

let arrDelete = [5,85];
console.log(
	multiDelete(num, arrDelete)
);



/*
	3. //-[Valós Óra]-//
	Írjatok reguláris kifejezést, mely egy valós óra:perc-re illeszkedik. 
        - A formátum tehát: hh:mm
        - ha véletlenül valaki nem tudná olvasni a dátum idő formátumokat: a "hh" azt jelenti, hogy a hours 2 karakteren, míg az "mm", hogy a minutes 2 karakteren
       !A valós óra:perc, azt jelenti, hogy csak akkor illeszkedik, ha az idő 00:00 és 23:59 tartományban mozog.
*/

/*
	4. //-[Mozgatás]-//
	Írj programot, mely billentyűzetről mozgat egy négyzetet a HTML oldalon.
*/

const square = document.querySelector("#content");


document.addEventListener("keydown", function(e){
	
	let top = parseInt(square.style.top) || 0;
	let left = parseInt(square.style.left) || 0;

	if(e.key == "ArrowUp" || e.key == "w"){
		top -= 10;
	}
	if(e.key== "ArrowDown" || e.key == "s"){
		top += 10;
	}
	if(e.key== "ArrowLeft" || e.key == "a"){
		left -= 10;
	}
	if(e.key== "ArrowRight" || e.key == "d"){
		left += 10;
	}
	square.style.top = top + "px";
	square.style.left = left + "px";

})


/*
	5. //-[Karakterfigyelés]-//
	Mentsük el egy tömbbe azokat a karaktereket, amelyeket az oldalon lenyomtak.
*/
let arr = [];

document.addEventListener("keydown", function(e){

    arr.push(e.key);

    if(e.key == "Enter"){
        console.log(arr);
    }

});


/*
	6. //-[Kávéautomata]-//

	(Nem várom el, hogy ezt teljes egészében megcsináljátok, de mindenképp kezdjétek el, és ha majd kész, mutassátok be.)

	Egy külön HTML oldalon próbáljátok elkészíteni a Kávéautómatát, most már egy valódi kávéautómata dizájnal. 
	Az oldalon legyen egy div, melyben az automata dizájnja van, és melett egy másik div, ami a pénztárcánk, 
	amiben a pénzeink vannak. (lehetnek olyan érmék vagy pénzek is, amit nem fogad el az autómata)
	Amikor a egy pénzre kattintunk, az kerüljön az automatába, ha olyan pénzre kattintottunk, amit az automata elfogad. 
	Az automata kijelzőjén pedig lássuk, hogy ezzel az értékkel nőtt a bedobott érmék összege. 
	Majd ha elgendő összeg, összeg gyűlt össze egy italra, válasszunk italt. (legyen legalább 3 lehetőség az automatán.
	Eszpresszó, Jegeskávé... stb) Kattintsunk a kiválasztott italra. Ekkor a kijelzőn jelenjen meg a "Kávé folyamatban..." felírat
	a kijelzőn, majd 3 másodperc múlva, hogy "A kévé elkészült". (Ezt a már tanult setTimeout függvénnyel be tudjátok időzíteni.)
	Még az időzítés előtt pedig adjátok vissza a visszajárót. HA van visszajáró, az automata dizájnjában jelenjen meg a visszasdott pénz.
	(Pl egy kerek div, abban a divben, ami az automat dizájnjában a pénzt visszadó rekeszt jelképezi. Vagy egy png, amin aprópénz van)
	Az autómata ezen rekeszére klikkelve pedig a visszadott érmék jelenjenek meg a pénztárcában.

	Az automata és a pénztárca tervezéséhez használjatok valamilyen rajzprogramot, amiben négyszögeket tudok egymásba rajzolni,
	és utólag méretezni. Ilyen az ingyenes Inkscape, amit én is használok, vagy éppenséggel a szintén ingyenes LibreOffice Draw
	vektorgrafikus rajzprogramja. (Képzeljétek el, a LibreOffice Draw-ja a programozók számára, még folyamatábrák szerkesztésére 
	is kínál lehetőséget.) Vagy akár egy kockás füzetben is megtervezhetitek a kávéautomatát. Tudjátok: Azért fontos ez,
	hogy lássátok egybe, a teljes keretszerkezetet, ami alapján már sokkal könnyebb megcsinálni a HTML struktúrát, és a hozzá
	tartozó CSS-t :)

	Jó munkát!
*/
