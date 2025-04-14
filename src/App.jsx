import { useState } from "react";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";

// Diese ungewöhnliche Backtick-Syntax ist eine neue JavaScript-Funktion namens „ Tagged Template Literal“ .

const ButtonSimple = styled.button`
  background: white;
  border-radius: 8px;
  border: 2px solid #bf4f74;
  color: blue;
  font-size: 1.5rem;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

const ButtonProps = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.$primary ? "#BF4F74" : "white")};
  color: ${(props) => (props.$primary ? "white" : "#BF4F74")};
  font-size: 1.5rem;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 8px;
`;

// Styles extended
const ButtonSimpleBlue = styled(ButtonSimple)`
  background: #3f94f6;
  border-radius: 8px;
`;

// Theming

// Define our button, but with the use of props.theme this time
const ButtonTheming = styled.button`
  color: ${(props) => props.theme.fg};
  border: 2px solid ${(props) => props.theme.fg};
  background: ${(props) => props.theme.bg};

  font-size: 1.5rem;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 8px;
`;

// Define our `fg` and `bg` on the theme
const theme = {
  fg: "#BF4F74",
  bg: "white",
};

// This theme swaps `fg` and `bg`
const invertTheme = ({ fg, bg }) => ({
  fg: bg,
  bg: fg,
});

function App() {
  const [inverted, setInverted] = useState(false);
  const currentTheme = inverted ? invertTheme(theme) : theme;
  return (
    <>
      <ButtonSimple>Simple</ButtonSimple>
      <ButtonSimpleBlue>Simple Blue</ButtonSimpleBlue>
      <ButtonProps>Normal</ButtonProps>
      <ButtonProps $primary>Primary</ButtonProps>
      <ThemeProvider theme={currentTheme}>
        <ButtonTheming onClick={() => setInverted((prev) => !prev)}>
          {inverted ? "Inverted Theme" : "Normal Theme"}
        </ButtonTheming>
      </ThemeProvider>
    </>
  );
}

export default App;
