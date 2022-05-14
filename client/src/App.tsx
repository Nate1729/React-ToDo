import { TopBar } from 'components/TopBar';
import { ToDoList } from 'components/ToDoList';
import { ToDoEntry } from 'components/ToDoEntry';

import 'App.css';

import styles from './App.module.css';
export const App = () => {
  return (
    <div className={styles.container}>
      <TopBar />
      <ToDoEntry />
      <ToDoList />
    </div>
  );
}
