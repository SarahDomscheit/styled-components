# styled-Components

## Übersicht

styled components ist eine library zum Erstellen von Komponenten, die es ermöglicht CSS direkt in Javascript zu schreiben. Es wird keine externe CSS-Datei benötigt und es gibt keine Klassen, die mehrfach verwendet werden.

#### Unterschied zu Tailwind und Inline-CSS

Im Gegensatz zu Tailwind wird normale CSS Syntax benutzt,man muss sich die Tailwind Klassen nicht merken und bleibt aber übersichtlich, weil die Komponenten nur einmal definiert werden. Außerdem können im Gegensatz zu Inline-Styles Mediaqueries und Pseudoselektoren benutzt werden. Außerdem gibt es die Möglichkeit props an die Komponenten zu übergeben und damit variabel zu stylen.

##### Beispiele

`Tailwind: Klassen wie bg-red-500, text-xl, p-4`

`Inline-style: style={{ backgroundColor: 'red', fontSize: '20px' }}`

```
styled-components:
const Button = styled.button`
--accent-color: white;
background: transparent;
border-radius: 3px;
border: 1px solid var(--accent-color);
color: var(--accent-color);
display: inline-block;
margin: 0.5rem 1rem;
padding: 0.5rem 0;
transition: all 200ms ease-in-out;
width: 11rem;`

```

### Vorteile

- Theming
  Theming ermöglicht es ein "gleichbleibendes" Thema mit Farben und Schriftarten zu definieren, dass mit dem `<ThemeProvider/>` einheitlich an verschiedene Komponenten weitergegeben werden kann (z.B. light/darkmode).
  Der Style wird in einer Variable gespeichert und als Prop an den ThemeProvider weitergegeben.
- Props
  Durch Props können wir das Styling unkompliziert dynamisch machen.
- es ist möglich eine bestehende Komponente für einmalige Benutzung erweitern

## Installation

`npm install styled-components`

Um das Paket in einer Komponente zu benutzen, muss man `styled` aus der React library importieren.

```
import styled from 'styled-components'
const Button = styled.button``
```

! Diese ungewöhnliche Backtick-Syntax ist eine neue JavaScript-Funktion namens „ Tagged Template Literal“ .

###### Intellisense Erweiterung für styled-components

[Extension styled-Components](https://marketplace.visualstudio.com/items?itemName=styled-components.vscode-styled-components)

###### Resources

[Styled Components](https://styled-components.com/)
