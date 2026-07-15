/*
	3. //-[Sakktábla]-//
	Írjatok egy függvényt, mely legenerál egy sakktáblát, ami meg is jelenik a HTML oldalon. 
    A sakktábla, n*n-es legyen, 
    (tehát ne csak 8x8-as táblát lehessen legenerálni a függvénnyel.)
.       
    a.) Miután sikerült, készíts egy másolatot a függvényről, és csináld meg úgy is, hogy balodalt a sorszámozás, 
            míg alul az oszlopok betűjelei jelenjenek meg.
*/

function renderChesstable(n, selector){

    // a szülőelem a megadott selector lesz
    const parElement = document.querySelector(selector);
    // a táblázat alapja egy div - ha táblázatelem lenne, akkor tbody lenne
    const table = document.createElement("div");
    table.className = "table";

    //létrehozzuk a sorokat - ha táblázat lenne, akkor tr lenne
    for (let rowIndex=0; rowIndex<n; rowIndex++){
        const rowElement = document.createElement("div");
        rowElement.className = "row";
        const numElement = document.createElement("div");
        numElement.className = "num";
        numElement.textContent = n - rowIndex;
        rowElement.appendChild(numElement);

        // létrehozzuk az oszlopokat - ha táblázat lenne, akkor td lenne
        for(let colIndex = 0; colIndex<n; colIndex++){
            const colElement = document.createElement("div");
            colElement.className = "col";

            colElement.classList.add((rowIndex+colIndex) % 2 == 0 ? "white" : "dark");

            rowElement.appendChild(colElement);
        }

        // amikor a sor teljesen elkészült akkor csatolom hozzá a table-hez
        table.appendChild(rowElement);
    }

    //hozzáadom a divet a szülőelemhez
    parElement.appendChild(table);

}

renderChesstable(8, "#content")


// majd még a betűket alulra meg kell csinálni, de arra már nem maradt ma kraft :D