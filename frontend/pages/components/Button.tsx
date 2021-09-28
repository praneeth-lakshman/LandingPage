import {FC, Dispatch, SetStateAction} from 'react'
import styles from '../../styles/Button.module.css'


interface ButtonProps {
    text: String,
    color?: String | any,
}

const Button:FC<ButtonProps> = (props) => {
  return <button className={styles.button} style={{backgroundColor: props.color}}>{props.text}</button>;
};

export default Button;
