import { useSelector } from 'react-redux';

import { ToDoElement } from 'components/ToDoElement';

import styles from './styles.module.css';

const toDoListSelector = (state: any) => state.list.value;

export const ToDoList = () => {
  const toDoArray = useSelector(toDoListSelector);

  const renderToDoElements = () => {
    return (
      toDoArray.map((el: string, ind: number) => <ToDoElement taskId={ind} taskText={el} key={ind} />)
    );
  };

  return (
    <div className={styles.container}>
      {renderToDoElements()} 
    </div>
  );
}
