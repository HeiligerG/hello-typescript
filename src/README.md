# Pythagoräische Triplets

Dieses Projekt beinhaltet eine TypeScript-Implementierung zur Überprüfung von pythagoräischen Triplets (a²+b²=c²) sowie eine Brute-Force-Suche nach solchen Triplets.

## Troubleshooting

Falls bei der Ausführung der Tests oder des Builds Probleme auftreten, beachten Sie die folgenden Lösungshinweise:

### Modultyp-Konflikt

**Problem**: Es kann ein Konflikt zwischen ES-Modulen und CommonJS auftreten.

**Symptome**:
- Bei `npm start`: `ReferenceError: exports is not defined in ES module scope`
- Bei `npm test`: `SyntaxError: Unexpected token 'export'`

**Lösung**:
1. Stelle sicher, dass in der `package.json` kein `"type": "module"` vorhanden ist (für CommonJS-Module)
2. Die Jest-Konfiguration (`jest.config.js`) sollte CommonJS-Syntax verwenden:
```javascript
/* eslint-env node */
// ODER
// eslint-disable-next-line no-undef
module.exports = {
    roots: ["src"],
    transform: {
      "^.+\\.tsx?$": "ts-jest"
    }
  };
```

Dieses Setup ermöglicht sowohl das korrekte Kompilieren und Ausführen des Projekts als auch das Durchführen der Tests.

## Funktionalität

Das Projekt enthält:

- `isTriplet`-Funktion: Prüft, ob drei Zahlen die Gleichung a²+b²=c² erfüllen
- Testfälle für die `isTriplet`-Funktion mit einem positiven (3,4,5) und einem negativen Beispiel
- Brute-Force-Algorithmus zur Suche nach pythagoräischen Triplets

## Dateien

- `src/pythagoras.ts`: Enthält die `isTriplet`-Funktion
- `src/pythagoras.test.ts`: Enthält Tests für die Funktion
- `src/index.ts`: Hauptprogramm zur Suche nach pythagoräischen Triplets

## Ausführung

### Tests ausführen

Um die Tests auszuführen:

```bash
npm run test
```

### Programm starten

Um das Programm zu starten und nach pythagoräischen Triplets zu suchen:

```bash
npm start
```

oder direkt mit ts-node:

```bash
npx ts-node src/index.ts
```

## Beispiel-Output

Bei der Ausführung des Programms werden alle gefundenen pythagoräischen Triplets bis zu einem definierten Maximalwert ausgegeben, z.B.:

```
Suche nach pythagoräischen Triplets bis 20:
Gefunden: 3² + 4² = 5² (9 + 16 = 25)
Gefunden: 5² + 12² = 13² (25 + 144 = 169)
Gefunden: 6² + 8² = 10² (36 + 64 = 100)
Gefunden: 8² + 15² = 17² (64 + 225 = 289)
Gefunden: 9² + 12² = 15² (81 + 144 = 225)
Insgesamt 5 pythagoräische Triplets gefunden.

Beispiel-Prüfung:
Ist (3,4,5) ein pythagoräisches Triplet? true
Ist (5,12,13) ein pythagoräisches Triplet? true
Ist (2,3,6) ein pythagoräisches Triplet? false
```