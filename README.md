Majusi-h-sz-Javascript-2026
Javascript tematika
1. JavaScript (ECMAScript, ES6) alapok
   
Az ES6 után több új szabvány is megjelent, mégis azért emeljük ki pont ezt a verziót, és nem valamelyik későbbit, mert ez volt a "nagy" vízválasztó, melyben nem csupán náhány függvénnyel, vagy osztályal bővült a Javascript, hanem olyan radikális változásokat hozott, mint a változók hatáskörének kibővítése vagy az OOP nagy átalakulása, vagy a modul módban való programozás.

Mi is az a JavaScript?
A JavaScript eredete és felhasználási lehetőségei
JavaScript elhelyezése, importálása, betöltése egy HTML dokumentumban
Egy kis ízelitő
A programozás alapvető koncepciói
A JavaScript programozás alapjai
DOM Manipuláció
Gyakorlás: Tartalom megjelenítése HTML oldalon JavaScript segítségével

2. A programozás alapjai Javascript nyelven


Ebben a részben elsajáítjuk a programozás alapjait. Ha ezt megérted, akkor a többi programnyelvvel is boldogulni fogsz, hiszen a logikája minden programozási nyelvnek hasonló. Természetesen ezeken az órákon a Javascript szemszögéből.

Típusok, változó, állandok
Típusok csoportosítása:
Primitívek - (egyszerű típusok) melyek egyszerre csak egy adat tárolására alkalmasak
Szám - Number
Ide tartozik a NaN érték is, ami a Not a Number rövidítése. Tehát ez nem egy típus, hanem, egy érték.
Szöveg - String
Logikai - Boolean
lehetséges értékei, a true és a false
undefined - undefined
Egyetlen értéket vehet fel, és ez az undefined
Összetett Adattípusok, melyek egyszerre több adat tárolására alaklmasak
Az Object, mint adattípus
Array azaz Tömb: Fontos mehjegyezni, hogy Javascriptben, a tömb számára nincs külön adattípus. Az az Object-ből van származtatva, ám a gyakorlatban, úgy használjuk, mintha külön típus lenne.
Operátorok: - Melyek műveleteket hajtanak végre, az operandusaik közt, és visszatérnek a művelet eredményével.

Az Operátorokat csoportosíthatjuk operandusaik száma szerint:
Egy operandusú unary
Két operandusú binary
Három operandusú thernary
Az általa elvégzett művelet típusa szerint:
Aritmetikai műveleteket végző operátorok
Hozzárendelő vagy értékadó operátorok
Összehasonlító operátorok
Logikai operátorok
Léptető operátorok
Típuskonverzió - Gyakran van szükség arra, hogy egy változó értékét valami más típusú értékké alakítsuk át. Páldául, amikor egy szám szövegként van definiálva, ekkor ezt a szöveget, ami számot tartalmaz, át kell alakítani, számmá. Ez az átalakítás a típuskonverzió.

A Math object - A Math tartalmazza, a komplekszebb matematikai műveletek elvégzéséhez szükséges függvényeket, mint például a trigonometriai függvényeket, krekítéseket, vagy a gyökvonást és a konstans matematikai értékek is itt vannak tárolva, mint a PI érték. (Amolyan tudományos számológépként lehet használni)

Vezérlési szerkezetek
function - Függvények - Amelyek nem mások, mint programba írt programok, melyeket akárhányszor fel tudunk használni (futtatni) a programunkon belül.
arrow function - nyílfüggvény, rövidített függvény. ES6 szintaxis
if-else - feltételes mód
switch-case - szelekciós vezérlési szerkezet
Ciklusok - Iterációk
for - léptető ciklus
for in
for of
while - feltételes ciklus
while - elől tesztelő ciklus
do while - hátúl tesztelő ciklus
try-catch-finaly - hibakezelés, kivételkezelés
Változók hatásköre -Azt határozza meg, hogy meddig terjed egy változó láthatósága. Hogy hol érhetjük el az egyes hatókörökben definiált változókat.

Sztringműveletek - Stringkezelő függvények

Reguláris kifejezések -A reguláris kifejezés egy speciális mintázat, amely segít szövegek keresésében és feldolgozásában. Használatával egyszerűbbé válik az adatok ellenőrzése, szűrése vagy átalakítása a programozásban és a mindennapi feladatokban. Olyan esetekre ad megoldást, amikor nem tudjuk megnevezni a string összes jelét, hanem csak a stringet leíró "szabályokat" mint egy dátum esetén. A szabály világos: 4 szám, majd egy kötőjel, majd 2 szám, majd megint egy kötőjel, majd ismét 2 szám. Reguláris kifejezésben ez a következőképpen néz ki: [0-9]{4}-[0-9]{2}-[0-9]{2} Ez minden YYYY-MM-DD formátumú dátumot meghatároz. Kiváló lehetőség ürlapelemek validálására.

Tömbműveletek:

Tömbkezelő függvények
A tömbök magasabb rendű függvényei
A Spread syntax, avagy a ... (másoló) operátor:
mely segítségével tömböket és objectecet tudunk ki és be csomagolni. Többek közt, lehetővé teszi két változó, harmadik változó ígénybevétele nélküli felcserélését.
Halmaz műveletek:
A Set Object
Műveletek Object adattípussal
A Map object - mely segítségével egyszerűen kezelhetjük a kulcs-érték párokat. Segíti a lekérdezést, hozzáadást, törlést...
Referencia típusok: Menden olyan típus, ami a motorházfedél alatt Object. Ilyenek az Object, Array, és a function is
Ebben a fejezetben újra csoportosítjuk az adattípusokat. Hiszen nem csak értékük alapján lehet őket csoportosítani, hanem egy adott típus, hozzárendelésben való működése alapján is.
Amikor egy változó nem a konkrét értéket tárolja, hanem annak memóriacímét, azaz referenciáját. Javascripteb nem tudjuk meghatározni, hogy mi legyen referencia, és mi nem.

A Date object, avagy dátumok a Javascriptben


3. DOM (Document Object Modell)
Javascript alkalmazása front-enden
Ebben a részben gyakorlatban alkalmazzuk azt, amit elméletben már megalapoztunk Hasznos, vagy szórakoztató mini-alkalmazásokat készítünk a weboldalunkra.

Warning

Ebben a fejezetben, már szükség lesz az eddigi ismereteinkre.

DOM (Document Object Model)
DOM szerkezet
Csomópontok (Node)
Text
HtmlElement
a document object
DOM műveletek - HTML elemek manipulálása, Javascript segítségével
a children és a childnode
köztük levő különbség
DOM kezelő függvények
egy HTML elem elérése
Hagyományos módszerrel, mint pl a .getElementById
Modern módszer, avagy a .querySelector és a .querySelectorAll, melyek segítségével egy CSS selector alapján tudunk eg vagy akár több elemt kiválasztani.
[!NOTE] Többek közt ez az ES6 újítás ásta alá a jQuery létjogosultságát, mert most már nem szükséges a jQuery használata a CSS selectorok alapján történő HTML elemek kiválasztásához.

a document object-en keresztül elérhető függvények
Egy Text, vagy HTMLElement csomóponton keresztül elérhető függvények
A DOM, egy HTML elemre vonatkozó fontosabb attribútumai
Ahol külömbséget teszünk a pusztán csomópont, és HTML csomópont viszonyítási pontok közt
Stíluslap (style) kezelése
Attribútumok kezelése
Szabványos HTML attribútumok közvetlen elérése, egy DOM elementen keresztül.(például: HTMLElement.id, HTMLElement.src vagy HTMLElement.style, ... stb.)
HTML attribútumok kezelése az attribute függvénycsaládon keresztül.
Saját attríbútumok kezelése:
A dataset - mely segítségével egy HTML elem adathordozóvá válik.
segítségével lehetőség nyílik, a HTML kóddal együtt, a hozzá tartozó adatok betöltésére is. Arra, hogy egy HTML szerkezet (például egy productbox egy webshopban) adatokat is hordozzon a HTML struktúra mellett.

Eseménykezelés - mely keretén belül lehetőségünk van lekezelni, a HTML oldalon végbeneő eseményeket, mint az oldalbetöltés, egy billentyű lenyomása, vagy az egérkattintás.
Két fajta eseménykezelés létezik:
Attribútum típusú eseménykezelés; - Amelyekkel főleg ES5 vagy régebbi szintaxisú JS kódban találkozhatunk.
EventTarget-en keresztül való eseménykezelés, a Javascript modern eseménykezelője.
A DocumentFragment - avagy hogyan tudunk a memóriába HTML struktúrákat építeni anélkül, hogy az építés alatt, újra, meg újra újrarajzolná, s így újraszámolná a weboldal elrendezését a böngésző, anélkül, hogy sok fölösleges erőforrát pazarolnánk el. Sokkal optimálisabb futásidőt, és stabílabb működést biztosítva weboldalinknak.
gyakorlati megvalósítás template element-en keresztül: például amikor egy webshop termékkártyáját hozzuk létre. A memóriába rakjuk össze, és, amikor teljesen kész van, hozzáaadjuk a dokumentumunkhoz. Így csak egyszer rajzolja újra az aktuális HTML dokumentumot.

4. Struktúrális programozás
   
Tervezési minták
Ahhoz, hogy a 3. fejezetben elkezdett projekteket tovább tudjuk fejleszteni, szükségünk van arra a tudásra, melynek segítségével a kódjainkat, bizonyos modellek alapján rendszerezni, strukturálni tudjuk.

Függvénytárak - Melyek segítségével elkerülhetjük, bonyolult if elágazások, vagy switch vezérlési szerkezetek írását.

A szakirodalomban, kontextus függvényében, ezt több néven is illetik, mint például:

Function Dispatch Table - függvénykiosztási tábla röviden, függvénytárak;
Ha az OOP világába költöztetjük ezt a mintát, akkor ez a Strategy Pattern (Stratégia tervezési minta);
Vagy, ha összetettebb feladatok végzésére használjuk, akkor ez a Command Pattern (Parancs minta).
Gyakorlat: - Vezérlők készítése
A Closure és az Encapsulation
Zárványok, Függvénygyárak - Olyan függvények, melyek "emlékeznek" környezetükre azután is, hogy az őt létrehozó függvény befejezte futását. Ez kiemelten nagy adatbiztonságot jelent. Más szóval: A zárványt létrehozó függvény praméterihez, és a benne létrehozott változókhoz, csak a zárványokon (Closure) keresztül férhetünk hozzá. Ez az Encapsulation
Module Pattern
A moduláris programozás - mely segítségével lehetőségünk nyílik, a kódunk egyes részeit a többitől elkülöníteni, és függetleníteni. Ezzel lehetőségünk nyílik az egyes mechanizmusok szétválasztására, ami a kód átláthatóságát, karbantarthatóságát, és továbbfejleszthetőségét segíti elő. Nem utolsó sorban, egy modul nemcsak átláthatóságot, továbbfejleszthetőséget, és karbantarthatóságot biztosít, hanem mobilitást is, hiszen a modulok, projktről, projekre hordozhatóak, ami egy újabb fejlesztés produktivitását biztosítja.
Itt beszélni fogunk:

Hagyomásnyos függvény alapu modulokról
A felefedő modul modell
ES6 modules - A module mód - Aminek segítségével, Javascript állományok publikus interfészeit tudjuk egymásba ágyazni. - export - import
Érdekesség: Voltaképpen minden modul egy Closure :) Csak egy kicsit más megközelítésben.

[!INFO] Ebben a fejezetben saját modulokat építünk, melyeket beépítünk a HTML dokumentumunkban. Mint például egy szövegdoboz, vagy egy saját alert ablak, melyek segítségével a legmodernebb lehetőségekkel ismerkedhetünk meg a gyakorlatban.

A CSSStyleSheet osztály- Lehetőséget teremt teljes stíluslapok memóriában való kezelésére, anélkül, hogy újabb HTML tagként <link rel="styleshhet" href="style.css"> hozzá kéne adjuk a HTML head részéhez.
css adoptálása - memóriához való hozzárendelése

5. A document.cookie - Sütik kezelése
Mik azok a sütik?
Mire használhatjuk a sütiket? (Mire valóak egyáltalán)
Egy komplett cookie modul építése
A cookie modul építése közben, átismételjük, és gyakoroljuk a modulos programozást, miközben megtapasztaljuk azok előnyeit, és nagyszerűségét, egy hasznos gyakoralti példa keretén belül.

A localStorage
külömbségek, a document.cookie-val szemben

6. Form Validation - Űrlapok ellenőrzése
Note

Ebben a fejezetben, Egy összetett, gyakorlati, és a mindennapi programozásban, igen hasznos példán keresztül nézzük meg, mindazt, amit eddig tanultuk.

Az eddigiekben Javascript nélkül elküldtük a kitöltött űrlapot vagy kérdőívet, és majd kiderült, hogy az jó, vagy hiba van benne. Viszont a böngészőben futó Javascript segítségével, szabályokat határozhatunk meg a felhasználó számára, és csak ezen szabályok mentén tesszük számára lehetővé az űrlap elküldését. Ilyen szabályok például: helyes email formátum, karakterszámra vonatkozó megkötések, bizonyos mezők kötelező kitöltése, stb.

7. Programozási Paradigmák
   
OOP - Objektum Orientált Programozás
Egy olyan programozási paradigma, mely az életből vett mintákra alapszik, és ahol egy objektumnak, egyaránt vannak tulajdonságai, és funkcionalitásai is. Segítségével, egész, működési mechanizmusokat hozhatunk létre, melyeket ezután példányosíthatunk.

Osztály szerkezete
Osztályok tulajdonságai és metódusai
class alapú osztálydefiníció
Setter és Getter függvények
private változók és függvények
statikus változók és függvények
Osztályok származtatása - öröklődés
Nyílfüggvények objektumokban való viselkedése, függvények objektumokhoz való tapadásának szabályai
A OOP és a DOM
Gyakorlati példák, feladatok megvalósítása OOP-vel
ES6 modulok, melyek osztályokat implementálnak. - Segítségükkel minden osztály definíció saját, és védett ökoszisztémával fog rendelkezni, ami nem szennyezi a globális környezetet. Ez egységes kódstruktúrákat hoz létre, mely nagyaban segíti nagyobb projektek átláthatóságát, karbantarthatóságát és továbbfejleszthetőségét, megtisztítva az osztályokat a fölösleges statikus terheléstől.


8. AJAX - Asynchron Javascript And XML
- Amely aszinkron adatcserét tesz lehetővé a kliens és a szerver között a weboldal újratöltése nélkül. Többek közt ez az a technológia, tette lehetővé, hogy a weboldalakból „webalkalmazások” váljanak (mint a Gmail vagy a Facebook), ahol a felület folyamatosan frissül anélkül, hogy a böngésző fehér képernyővel villanna minden kattintásnál.

- Összességében az AJAX az a „láthatatlan híd”, ami összeköti a böngésződben futó kódot a távoli szerveren lévő adatokkal, folyamatos élményt biztosítva.
Note

Ebben a fejezetben nemcsak a programozásban való megvalósításáról lesz szó, hanem szó esik többek közt:

Az URL szerkezetéről
A kérés szerkezetéről, mely a kérésben küldött adatok mellett, sok fejléc adat is utazik.
és a kérés törzséről, melyeben a konkrét adatok utaznak POST típusu kérések esetén.
Időzített scriptek - a javascript több szálon való kezelése - belépés az AJAX világába.
setTimeout
setInterval
A fetch api - amit (régebben az XMLHttpRequest segítségével valósítottunk meg)
Kérések küldése távoli erőforrásra
Válasz fogadása és feldolgozása és megjelenítése
JSON - (JavaScript Object Notation, JavaScript objektumjelölés)
ez az adatformátum teszi lehetővé a kilens (böngésző) és szerver közti adatcserét. A JSON váltotta fel a korábbi XML adat struktúrát.

Javascript nyelven alapuló, olvasható adastruktúra, melyet többek közt, kliens-szerver közti adatcsere megvalósítására használunk.
A JSON függvényei:
parse - mely segítségével a szövegként érkezett JSON adatstruktúrát használható formára hozzuk.
stringify - mely segítségével szöveggé alakítjuk a JSON-t. Ebben a formában tudjuk tartósan tárolni, vagy akár egy kérésben a szerver felé továbbítani.
JSON importálása ES6 modulba: - Adatok egyszerű betöltése, akár távoli szerverről is.
a Promise - Mint igéret, melyet 2 forgatókönyv jellemez.
Amire szükség van a modern Javascript alapú programozásban, már csak annál az aprócska ténynél is fogva, hogy megértsük a fetch api tényleges működését, hiszen a fetch is egy Promise-al tér vissza.

A promis két forgatókönyvet valósít meg:
Mi történjen akkor, ha az ígéretet sikerült teljesíteni
Mi történjen akkor, ha az ígéret nem teljesült.
Asynchron függvények
Az async és az await - Segítségükkel lehetőségünk nyílik kikerülni a callback szintű megközelítést a then és catch ágakban. Helyettük egy async függvényben az await segítségével, a korábban megszokott lineáris programozási stílust valósíthatjuk meg, ahol a hibák elkapását a korábban tanult egyszerű try - catch vezérlési szerkezetben kaphatjuk el.


9. Optimalizálás
Ebben a fejezetben bepillantunk a javascript futtató környezetébe, abba a mechanizmusban, ahogy a Javascript sorba állítja az épp futásra váró proceszeket. Mivel a Javascript egy szálon fut, előfordulhat, hogy beragad egy-egy hoszabban tartó függvény, vagy ciklus, amit egy helyes optimalizálással, ki tudunk küszöbölni.

EventLoop - ez a mechanizmus felel, azért, hogy a futásra várakozó proceszek, sorban le is fussanak.
Optimalizálás EventLoop segítségével

10. PWA - Progressive Web Application
A PWA nem más, mint olyan böbgészőben futtatható HTML+CSS+Javascript alkalmazások, melyeket eszközünkre (PC, Laptop, Tablet, Telefon,...) telepíthetünk. Az így telepített alkalmazások offline is elérhetőek lesznek, mint bármilyen más telepített alkalmazás az eszközünkön.
Rekurzív függvények


11. Frontend Vizsga
Note

Vizsga: 2,5 órás gyakorlati vizsga a végén

Beadandó: időpontfoglaló rendszer

pontos leírást a kurzus végén ad az oktató
elkészítésére általában 3 hét áll rendelkezésre
választható nyelv: JavaScript vagy TypeScript
Tanfolyam közben: órai tesztek

Folytatás: a 15. hét után TypeScript modul, melynek végén külön vizsga van
