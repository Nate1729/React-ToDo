import { MouseEvent, ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import { add } from 'components/ToDoList/slice';

// Styling
import styles from './styles.module.css';

export const ToDoEntry = () => {
  const [inputText, setInputText] = useState<string>('');
  const [inputError, setInputError] = useState<boolean>(false);

  const dispatch = useDispatch();
  
  const inputHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  }
  
  const submitHandler = (e: MouseEvent<HTMLButtonElement>) => {
    // Stop page from refreshing
    e.preventDefault();

    const invalidInput = inputText === "";
    setInputError(invalidInput);

    if (invalidInput) {
      return;
    }

    dispatch(add(inputText));
    setInputText('');
  };

  return (
      <form
        className={` ${styles.container}
        ${inputError ? styles.invalidContainer : styles.validContainer}`}
      >
      <div className={styles.inputContainer}>
        <textarea
          className={styles.input}
          value={inputText}
          onChange={inputHandler}
          placeholder="Enter task here"
        /> 
        <button
          className={styles.button}
          onClick={submitHandler}
          type="button"
        >
          Add item
        </button>
      </div>
      {inputError && <p>Cannot add an empty task!</p>}
      </form>
  );
};
