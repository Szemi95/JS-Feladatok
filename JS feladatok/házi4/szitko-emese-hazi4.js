/*
	1. //-[Ik-es igék]-//
	Adott az alábbi string
*/
/*
    Reguláris kifejezés segítségével szedjük ki a "cicus" változóból az ik-es igéket.
*/
    let cicus = "Cirmi délben eszik majd alszik egy nagyot. Aztán ha felkelt játszik egyet.";
	const verbs = cicus.match(/[a-zA-ZáéíóöőúüűÁÉÍÓÖŐÚÜŰ]+ik\b/g);
	console.log(verbs);

/*
	2. //-[Dátumidő]-//
	irjatok regularis kifejezest, mely egy szovegbol kiveszi a datumido karakterlancokat pl 2021.09.28 09:59 (UTC)
*/

let text1 = prompt("Kérem írja be, hogy Ön hol, mikor, és hány óra hány perckor született");
let data1 = text1.match(/\d{4}\.\d{2}\.\d{2}\s\d{2}:\d{2}/g)

console.log(data1);

/*
	3. //-[Teljes nevek]-//
	Írjunk reguláris kifejezést, amely a teljes nevekre illeszkedik (Csaladnev Keresztnev)
    A név több tagból is állhat, mint 2, és illeszkedjen a kötőjeles nevekre is.
*/

let text2 = prompt("Kérem adja meg, hogy kinek a nevében ír nekünk:");
let data2 = text2.match(/[A-ZÁÉÍÓÖŐÚÜŰ][a-záéíóöőúüű]+([\s-]+[A-ZÁÉÍÓÖŐÚÜŰ][a-záéíóöőúüű]+)+/g) // lehet a kötjelen kívül is + 

// +([\s-]+ - azért így kell, hogyha több szóköz kerül, akkor is illeszkedjen
/*
text2.match(/[A-ZÁÉÍÓÖŐÚÜŰ][a-záéíóöőúüű]+(?:[\s-]+[A-ZÁÉÍÓÖŐÚÜŰ][a-záéíóöőúüű]+)+/g)  // ?:[\s-], mert ezt nem kell kimenteni a memóriába
*/


console.log(
	szoveg.match(/\p{Lu}\p{L}+(?:[\s-]+\p{Lu}\p{L}+)+/gu));  // ezt csak addig lehet, amíg az u flag rajta van, a sima a lowercase-re hogy kell?


// u flag, unicode
// van egy új szintaxisa az unicode-nak. \p{L}    vagyis letter {Lu} uppercase

console.log(data2);

/*
	4. //-[Kifejezésszámláló]-//
	Írj egy függvényt, mely megszámolja, hogy egy adott kulcskifejezés, hányszor szerepel egy stringben.
*/

function keywordsCalculation(text){
	let keyword = prompt("Adja meg a kulcsszót, amit keresni kíván:");  // nemcsak per jelek között tudunk létrehozni - a RegExp egy osztály, amiben létrehozunk egy reguláris kifejezések egy példányát
	//
	let regex = new RegExp(keyword, "g");  // ez hibás, mert ha 0 a találat, akkor null lesz az eredmény - külön változóba ki kell menteni

	return text.match(regex).length;
}

console.log(keywordsCalculation("Kutya, cica, alma, falka, kutya, cica,cica"));


/*
	5. //-[Rendszám]-//
	Írj reguláris kifejezést, ami az XXX-123 és az XX XX-123 típusu rendszámokra illeszkedik.
*/

let text = "Az autó rendszáma: IOJ-773 vagy AA II-195";
const numbers = text.match(/\b\w{3}-\d{3}|\b\w{2}\s\w{2}\s\d{3}/g);
console.log(numbers);

/*
javítva: 

const numbers = text.match(/(?:[A-Z]{2}\s)?[A-Z]{2,3}-\d{3}/g);
/[A-Z]{2,3}?[A-Z]{0,2}-\d{3}/g  - így is lehetett volna, de ez azér nem jó, mert hibásan megadott rendszámra is illeszkedik
*/



/*
	6. //-[Névátalakító]-//
	Adott az alábi lista, mely neveket tartalmaz:
*/
let nevek = "János Kovács, Péter Nagy, Anna Szabó";
/*
	Alakítsuk át a listát, a visaszahelyettesítés módszerével. Cseréljük fel a neveket úgy, 
	hogy a családnév legyen elől, és a keresztnév legyen hátul.
*/
nevek = nevek.replace(/([A-ZÁÉÍÓÖŐÚÜŰ]+[a-záéíóöőúüű]+)\s([A-ZÁÉÍÓÖŐÚÜŰ]+[a-záéíóöőúüű]+)/g,"$2 $1");

console.log(nevek);

/*
	7. //-[Piac]-//
	Adott az alábbi szöveg:
*/
let piac = `
    Erzsi néni 10 termékét vitte ki a piacra, amelyek közül a
    paradicsomot 4500 Ft, a tojást 85 Ft, és a paprikát 5000 Ft 
    ellenében árulta.
`;
/*
	Feladat: Reguláris kifejezés segítségével, a szövegből szedd ki az árakat.
*/

const price = piac.match(/\b(\d{2}|\d{4})\sFt/g);
console.log(price);


/*
	8. //-[Árcsere]-//
	Adott az alábbi árak változó:
*/
let prices = "Árak: 100 Ft, 1.500 Ft, 10 000 Ft, 50 Ft.";
/*
	Reguláris kifejezések segítségével egységesítsd a számokat, hogy azonos formátumúak legyenek. 
	Töröld ki a számok közül a "." és szóköz karaktereket, hogy azok egységesen egybe íródjanak.
*/


// /\d{1,}+[\s|.]\d{1,}\s+Ft|\d{1,}\s+Ft/g

/*const modify = prices.replace(/[\s.]/g,"")
console.log(modify);*/


console.log(
	prices.replace(/(\d+)[\s\.](\d+)/g, '$1$2')  // ezt majd chatgpt-vel el kellene magyaráztatni 
);







