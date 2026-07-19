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

/*
const coffeprice = 250;
let sumCoins = 0;
const coins = [20,50,100,200];

do{
	const coin = Number(prompt("Dobj be egy érmét: "))
	if (coins.includes(coin)){
		sumCoins +=coin;
	}
	else (`Csak a ${coins} Ft-os érmék elfogadottak!`)
}while(sumCoins<coffeprice)

const change = sumCoins - coffeprice;
alert(`A kávé elkészült! A visszajáró ${change} Ft.`);

*/
const coins = [20,50,100,200];

const btnCoins = document.querySelectorAll(".coin");
const screen1 = document.querySelector("#screen-1");
const screen2 = document.querySelector("#screen-2") 
const coffees = document.querySelectorAll(".coffee");
const refund = document.querySelector("#refund");

let money = 0;

btnCoins.forEach(function(btnCoin){

    btnCoin.addEventListener("click", function(){

        if(
            Number(btnCoin.dataset.value) == 20 ||
            Number(btnCoin.dataset.value) == 50 ||
            Number(btnCoin.dataset.value) == 100 ||
            Number(btnCoin.dataset.value) == 200
        ){
            money += Number(btnCoin.dataset.value);
			btnCoin.style.display = "none";
        }

        screen1.textContent = money;

    });

});

coffees.forEach(function(coffee){
	coffee.addEventListener("click", function(){

		screen2.textContent = "Kávé folyamatban...";
		refund.style.display = "block";

	
	setTimeout(function(){
    	screen2.textContent = "Kávé elkészült!";
		screen1.textContent = "0Ft"
	}, 3000);
	});

	
	
});