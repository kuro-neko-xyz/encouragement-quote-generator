import styles from "./styles.module.scss";

interface QuoteProps {
  quote: string;
}

const Quote = ({ quote }: QuoteProps) => {
  return <p className={styles.quote}>{quote}</p>;
};

export default Quote;
