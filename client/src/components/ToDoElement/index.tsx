import { useDispatch } from 'react-redux';

// Actions
import { remove } from 'components/ToDoList/slice'
import { MdCancel } from 'react-icons/md';

import styles from './styles.module.css';

interface Props {
  taskText: string,
  taskId: number
};

export const ToDoElement = ({taskId, taskText}: Props) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <p className={styles.entry}>{taskText}</p>
      <MdCancel
        onClick={() => dispatch(remove(taskText))}
        size={30}
        className={styles.delete}
        aria-label={`delete-${taskId}`}
      />
    </div>
  );
};
