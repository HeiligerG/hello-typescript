import { isTriplet } from './pythagoras';

/**
 * Findet pythagoräische Triplets bis zu einem Maximalwert
 * @param max Obergrenze für die Suche
 */
function findPythagoreanTriplets(max: number): void {
  console.log(`Suche nach pythagoräischen Triplets bis ${max}:`);
  
  let count = 0;
  
  // Brute Force mit drei verschachtelten Schleifen
  for (let a = 1; a <= max; a++) {
    for (let b = a; b <= max; b++) { // b beginnt bei a, um Duplikate zu vermeiden (3,4,5 ist das gleiche wie 4,3,5)
      for (let c = b; c <= max; c++) { // c beginnt bei b, da c die Hypothenuse ist und somit immer größer als a und b
        if (isTriplet(a, b, c)) {
          console.log(`Gefunden: ${a}² + ${b}² = ${c}² (${a*a} + ${b*b} = ${c*c})`);
          count++;
        }
      }
    }
  }
  
  console.log(`Insgesamt ${count} pythagoräische Triplets gefunden.`);
}

// Aufruf der Funktion, um Triplets bis 20 zu finden
findPythagoreanTriplets(20);

// Als Beispiel ausgeben das bekannte Triplet
console.log("\nBeispiel-Prüfung:");
console.log(`Ist (3,4,5) ein pythagoräisches Triplet? ${isTriplet(3, 4, 5)}`);
console.log(`Ist (5,12,13) ein pythagoräisches Triplet? ${isTriplet(5, 12, 13)}`);
console.log(`Ist (2,3,6) ein pythagoräisches Triplet? ${isTriplet(2, 3, 6)}`);