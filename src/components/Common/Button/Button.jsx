import styles from './Button.module.scss';

// Button(obj)
// Button({text,active})
export function Button({ text, active = true, type ,onClick}) {
  let btnStyles = active ? styles.btn__primary : styles.btn__secondary;
  return <button className={`${styles.btn} ${btnStyles}`} type={type} onClick={onClick}>{text}</button>;
}
