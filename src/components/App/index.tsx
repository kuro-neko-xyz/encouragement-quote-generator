import { useState } from "react";
import Button from "../Button";
import Quote from "../Quote";
import styles from "./styles.module.scss";

const GREETINGS = [
  "Hello",
  "Hi",
  "Hey",
  "Howdy",
  "Greetings",
  "Salutations",
  "Good to see you",
  "What's up",
  "Long time no see",
];

const ADJECTIVES = [
  "awesome",
  "fantastic",
  "incredible",
  "amazing",
  "wonderful",
  "remarkable",
  "extraordinary",
  "exceptional",
  "phenomenal",
];

const NOUNS = [
  "friend",
  "buddy",
  "pal",
  "companion",
  "mate",
  "chum",
  "comrade",
  "partner",
];

const getRandomElement = (arr: string[]) => {
  const length = arr.length;
  const randomIndex = Math.floor(Math.random() * length);
  return arr[randomIndex];
};

const getQuote = () => {
  return `${getRandomElement(GREETINGS)}, ${getRandomElement(
    NOUNS
  )}! You are ${getRandomElement(ADJECTIVES)}.`;
};

function App() {
  const [quote, setQuote] = useState("");

  return (
    <div className={styles.app}>
      {quote && <Quote quote={quote} />}
      <Button onClick={() => setQuote(getQuote())} />
    </div>
  );
}

export default App;
