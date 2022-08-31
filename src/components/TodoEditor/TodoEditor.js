import { useDispatch } from 'react-redux';
import todosOperations from '../../redux/todos/todos-operations';
import styles from './TodoEditor.module.css';

const TodoEditor = ({ onSave }) => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const message = e.currentTarget.elements.message.value;
    if (message !== '') {
      dispatch(todosOperations.addTodo(message));
      onSave();
      return;
    }
    alert('Заполни текст заметки.');
  };

  return (
    <form className={styles.editor} onSubmit={handleSubmit}>
      <textarea name="message" className={styles.textarea} />
      <button type="submit" className={styles.button}>
        Сохранить
      </button>
    </form>
  );
};

export default TodoEditor;
