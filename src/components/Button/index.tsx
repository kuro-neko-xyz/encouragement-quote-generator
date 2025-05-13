import styles from "./styles.module.scss";

const Button = ({ ...props }) => {
  return (
    <button className={styles.button} {...props}>
      i'm feeling down...
    </button>
  );
};

export default Button;
