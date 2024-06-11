// Lös nedanstående problem


// #1) Se om den här arrayen inkluderar namnet "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

dragons.includes('John') //Falskt


// #2) Se om den här array inkluderar något namn som har bokstäverna "John" inuti sitt namn. om det inte finns, return att
// namnen i arrayen
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

dragons.filter(name => name.includes('John')) //Jonathan

// #3) Skapa en funktion som kalkulerar kraften av 100 med ett nummer som en parameter
const power100 = (num) => num**100;


// #4) Med hjälp av din funktion från övning #3, stoppa in parametern 10000. Vad blir resultatet?
// Efterforsksa varför resultatet blir som det blir
power100(10000) // Oändligt














