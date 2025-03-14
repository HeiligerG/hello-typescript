# Hello, TypeScript! - Modul 426

Dieses Repository enthält ein TypeScript-Projekt mit Kompilierung (TypeScript zu JavaScript), Formatierung, Linting und Testing.

## Voraussetzungen

Bevor du beginnst, stelle sicher, dass du folgende Software installiert hast:

- **Git** (z. B. über [Git Bash](https://git-scm.com/downloads/win) für Windows oder über den Paketmanager für Linux/macOS)
- **Node.js** (Version >= 22), prüfbar mit:
  ```sh
  $ node --version
  v22.13.1
  ```
- **TypeScript-Compiler (tsc)** (Version >= 5.7.0), prüfbar mit:
  ```sh
  $ tsc --version
  Version 5.7.3
  ```
  Falls nicht installiert, kannst du ihn global hinzufügen:
  ```sh
  $ npm install --global tsc
  ```

## Projekt-Setup

1. Klone dieses Repository oder erstelle ein neues Verzeichnis:
   ```sh
   $ mkdir hello-typescript
   $ cd hello-typescript
   ```
2. Initialisiere ein neues Node.js-Projekt:
   ```sh
   $ npm init --yes
   ```
   Dadurch wird eine `package.json`-Datei erstellt.
3. Erstelle die Verzeichnisse `src` und `dist`:
   ```sh
   $ mkdir src dist
   $ touch src/.keep dist/.keep
   ```
4. Initialisiere ein Git-Repository:
   ```sh
   $ git init
   $ git add package.json src dist
   $ git commit -m "Initial commit: project setup"
   ```
5. Erstelle eine `.gitignore`-Datei mit folgendem Inhalt:
   ```sh
   dist/**/*.js
   ```
   Und füge sie dem Repository hinzu:
   ```sh
   $ git add .gitignore
   $ git commit -m "Ignore compiled JavaScript code"
   ```

## TypeScript-Konfiguration

1. Erstelle eine `tsconfig.json`-Datei mit folgendem Inhalt:
   ```json
   {
     "compilerOptions": {
       "target": "ES2024",
       "outDir": "./dist",
       "rootDir": "./src",
       "module": "CommonJS"
     }
   }
   ```
2. Erstelle eine Beispiel-Datei `src/index.ts`:
   ```ts
   let lang: string = "TypeScript";
   let greeting: string = `Hello, ${lang}!`;
   console.log(greeting);
   ```
3. Kompiliere das TypeScript-Projekt:
   ```sh
   $ tsc
   ```
4. Führe das kompilierte JavaScript aus:
   ```sh
   $ node dist/index.js
   ```

## Formatierung

1. Installiere Prettier global:
   ```sh
   $ npm install --global prettier
   ```
2. Formatiere den Code:
   ```sh
   $ prettier -w .
   ```

## Linting

1. Installiere ESLint:
   ```sh
   $ npm install --save-dev eslint
   ```
2. Initialisiere die ESLint-Konfiguration:
   ```sh
   $ npm init @eslint/config@latest
   ```
3. Führe ESLint auf den bestehenden Code aus:
   ```sh
   $ npx eslint src/index.ts
   ```

## Testing

1. Installiere Jest für TypeScript:
   ```sh
   $ npm install --save-dev jest ts-jest @types/jest
   ```
2. Erstelle eine `jest.config.js`-Datei:
   ```js
   export const roots = ["src"];
   export const transform = { "^.+\\.tsx?$": "ts-jest" };
   ```
3. Erstelle eine Datei `src/rounding.ts` mit einer Beispiel-Funktion:
   ```ts
   export function roundTo(x: number, granularity: number): number {
     const factor = 1.0 / granularity;
     return Math.round(x * factor) / factor;
   }
   ```
4. Erstelle eine Testdatei `src/rounding.test.ts`:
   ```ts
   import { roundTo } from "./rounding";
   test("check round to nickels", () => {
     expect(roundTo(10.0 / 3.0, 0.05)).toBe(3.35);
   });
   ```
5. Führe die Tests aus:
   ```sh
   $ npx jest
   ```

## Visual Studio Code-Empfehlungen

Falls du VS Code nutzt, installiere folgende Erweiterungen für besseren Support:
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Zusatzaufgabe: Pythagoräische Tripel

1. Erstelle eine Datei `src/pythagoras.ts` mit der Funktion `isTriplet`:
   ```ts
   export function isTriplet(a: number, b: number, c: number): boolean {
     return a * a + b * b === c * c;
   }
   ```
2. Erstelle eine Testdatei `src/pythagoras.test.ts`:
   ```ts
   import { isTriplet } from "./pythagoras";
   test("3-4-5 triplet", () => {
     expect(isTriplet(3, 4, 5)).toBe(true);
   });
   test("non-triplet", () => {
     expect(isTriplet(2, 3, 4)).toBe(false);
   });
   ```
3. Implementiere eine Funktion, die weitere pythagoräische Triplets sucht und ausgibt.

## Lizenz

Dieses Projekt steht unter der **MIT-Lizenz**.

