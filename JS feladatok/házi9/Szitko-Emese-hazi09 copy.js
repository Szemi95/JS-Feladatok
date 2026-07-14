/*
    1. //-[Crud on Object array]-//
	Valósítsunk meg egy egyszerű CRUD apit egy dolgozókat tartalmazó tömbön. 
	A CRUD egy rövídítés: A Create, Read, Update és Delete szavak kezdőbetűi.

   	-"Create" címszó alatt egy olyan függvényt valósítsatok meg, mely hozzáad egy új dolgozót, a tömbhöz.
        Nehézség, hogy az id-t a program kell automatikusan hozzáadja. 

	        Az id legyen AutoIncrement, ami azt jelenti, hogy az újonnan bevitt adat, 
                az addig legnagyobb ID-nál egy értékkel nagyobb lesz. 

	-"Read" címszó alatt egy olyan függvényt valósítsatok meg, 
        mely segítségével le tudunk kérdezni ID alapján egy dolgozót a dolgozók tömbből.

        -"Update" címszó alatt egy olyan függvényt valósítsatok meg, 
        mely id alapján módosítást hajt végre az adott id-val rendelkező bejegyzésen
           minta: updteDolgozo(3, {position: "vezető", age: 29, vegzettseg: "főiskola"});

        -"Delete" címszó alatt pedig egy ember törlését valósítsátok meg. 
        Amelyben a függvény megkapja a törlendő ember id-ját.
        és ha létezik ilyen id-jú elem a tömbben, akkor, azt törli az dolgozók tömbből.
*/

let dolgozok = [
    { id: 1, name: "Mária", age: 35, position: "raktáros" },
    { id: 2, name: "Béla", age: 30, position: "raktáros" },
    { id: 3, name: "Norbert", age: 28, position: "raktárvezető"}
];

// ha a tömbben külön külön objectek vannak, akkor index alapján el lehet érni külön-külön őket

function create(dolgozo, arr){
        let maxId = Math.max(...arr.map(d => d.id));  
        // szerintem kéne egy üres object a dolgozo adatainak
        dolgozo = {id:0, name:dolgozo.name, age:dolgozo.age, position:dolgozo.position};
        dolgozo.id = maxId +1; 
        return arr.push(dolgozo);
}
let dolgozo = {name: "Lajos", age: 26, position: "raktáros"};
create(dolgozo, dolgozok)
console.log(
        dolgozok   //Lajost sikeresen hozzáadtam :)
);


function read(id,arr){
        let res = 0;
        for(let i = 0; i<=arr.length; i++){
                if(arr[i].id == id)
                        return arr[i];                
        }

        return "Nincs ilyen id-val rendelkező dolgozó";
}

console.log(
        read(3,dolgozok)
);


// ha létrehoztam a read-et akkor gondolom azt kellene a kövi lépéshez használni
function update(id, newDatas){
        let person = read(id, dolgozok);
        person.position = newDatas.position;
        person.age = newDatas.age;
        person.vegzettseg = newDatas.vegzettseg;

        return person;
}       

update(3,{position: "vezető", age: 29, vegzettseg: "főiskola"})
console.log(
        dolgozok
);

function deleteP(id){
        let p = read(id, dolgozok);
        //p helye a tömbben:
        let indexp = dolgozok.indexOf(p);
        if (indexp === -1) {
                return "Nincs ilyen dolgozó";
        }
        return dolgozok.splice(indexp,1)
}

/*
	2. //-[DOM tömbfeltöltés]-//
	Készítsetek egy tömbfeltöltő programot, amit most user felületről teszünk meg, nem csak simán promtból: 
        A HTML oldalon hozzatok létre egy input mezőt, és egy "Hozzáad" gombot. 
        A gombra klikkelve, a program adja hozzá a tömbhöz az újonnan bevitt elemet. 
        - Csak akkor adjuk hozzá az elemet a tömbhöz, ha az input mező nem üres, és legkevesebb 2 karaktert tartalmaz.
        Továbbá hozzatok létre még egy listáz gombot is, melyre klikkelve, a HTML oldalon kilistázzuk a tömb elemeit.
        Így a felhasználó le tudja ellenőrizni az eddig bevitt adatokat.
*/

let input = document.querySelector("#item");
let btnPlus = document.querySelector("#btn");
let arr = [];
let li = document.querySelector ("ul");
let btnLi = document.querySelector("#list");

btnPlus.addEventListener('click', function(){
        let inputValue = input.value.trim();
        if (inputValue.length<2)
                return;
        arr.push(inputValue);
        let liItem = document.createElement("li");
        liItem.textContent = inputValue;
        li.appendChild(liItem)
        li.style.display = "none";
        input.value = "";
});

btnLi.addEventListener('click', function(){
        li.style.display = "block"
})

/*
	3. //-[Véletlenszinező]-//
	Írj függvényt, mely véletlenszerűen generál egy css rgb színkódot.
        És egy fill nevezetű függvényt, aminek átadunk egy selectort. A függvény a selectornak megfelelő elemet, az előző
        véleltelszín generátorral fesse ki.
*/

// Minden paraméter (piros, zöld és kék) 0 és 255 között határozza meg a szín intenzitását.
// a random pedig 0 és 1 között ad meg számot
function randomRgb(){
        /*let colors={
                red:0,
                green:0,
                blue:0,
        }*/


        let value1 = Math.floor(Math.random()*256); // az 1-et már nem generálja ki a random, vagyis a 255-öt se generálná, ezért kell növelni
        let value2 = Math.floor(Math.random()*256);
        let value3 = Math.floor(Math.random()*256);


        return `rgb(${value1},${value2},${value3})`;
}

function fill(selector){
        const element = document.querySelector(selector);
        return element.style.backgroundColor = randomRgb();
}

fill("#content")

/*
	4. //-[Táblázatfeltöltő]-//
	A html oldalatokon készítsetek egy 3 mezőből álló űrlapot, és egy hozzáad gombot.
        A 3 űrlapmező a következők: Név, cím, telefonszám.
        A hozzáad gomb hatására a 3 mezőből hozzátok létre egy táblázat sorát (dom függvények segítségével)
        majd adjátok hozzá a html oldalatokon elhelyezett táblázathoz.
        (egyéni döntés, hogy table-tr-td, vagy div alapú táblázatot készítetek.)
*/

// úgy látom értelmét, ha a hozzáad gomb megnyomásával az űrlapba bevitt adat kerül a table adataiba


const inName = document.querySelector("#name");
const address = document.querySelector("#address");
const phone = document.querySelector("#phone");
const btn = document.querySelector("#give");
const table = document.createElement("table");
document.body.appendChild(table);
const tbody = document.createElement("tbody");
table.appendChild(tbody);

btn.addEventListener("click", function(){
        
        const tableRow = document.createElement("tr");
        tbody.appendChild(tableRow);
        const tableDataN = document.createElement("td");
        const tableDataA = document.createElement("td");
        const tableDataP = document.createElement("td");
        tableRow.appendChild(tableDataN);
        tableRow.appendChild(tableDataA);
        tableRow.appendChild(tableDataP);
        tableDataN.textContent = inName.value;
        tableDataA.textContent = address.value;
        tableDataP.textContent = phone.value;
})


/*
        Órai megoldások:
*/

const employees = [
        {
                id: 1,
                lastName: "Teszt",
                firstName: "Elek",
                age: 25,
                profession: "Tesztelő",
        },
        {
                id: 2,
                lastName: "Gipsz",
                firstName: "Jakab",
                age: 30,
                profession: "Karbantartó",
        },
];

const template = document.createElement('template');
const htmlStr = `
        <table>
                <thead>
                        <tr>
                                <th>Családnév</th>
                                <th>Keresztnév</th>
                                <th>Életkor</th>
                                <th>Foglalkozás</th>
                        </tr>
                </thead>
                <tbody></tbody>
        </table>
`;
template.innerHTML = htmlStr.trim();

function renderTable(data, selector){
        const parentElement = document.querySelector(selector);

        const tableFragment = template.content.cloneNode(true);

        const tbody = tableFragment.querySelector('tbody');

        for (const item of data){
                const tr = document.createElement('tr');
                tr.innerHTML = `
                <td>${item.lastName}</td>
                <td>${item.firstName}</td>
                <td>${item.age}</td>
                <td>${item.profession}</td>
                `;

                tbody.appendChild('tr');
        }
         parentElement.appendChild(tableFragment);
}

renderTable(employees, "#content");

