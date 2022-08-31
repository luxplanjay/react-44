import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HiPlus } from 'react-icons/hi';
import TodoList from '../components/TodoList';
import TodoEditor from '../components/TodoEditor';
import Filter from '../components/TodoFilter';
import Stats from '../components/Stats';
import Modal from '../components/Modal';
import IconButton from '../components/IconButton';
import { todosOperations, todosSelectors } from '../redux/todos';

const barStyles = {
  display: 'flex',
  alignItems: 'flex-end',
  marginBottom: 20,
};

export default function TodosView() {
  const dispatch = useDispatch();
  const isLoadingTodos = useSelector(todosSelectors.getLoading);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(state => !state);

  useEffect(() => {
    dispatch(todosOperations.fetchTodos());
  }, [dispatch]);

  return (
    <>
      <div style={barStyles}>
        <Filter />
        <Stats />
        <IconButton onClick={toggleModal} aria-label="Добавить todo">
          <HiPlus size={24} color="#fff" />
        </IconButton>

        {isLoadingTodos && <h1>Загружаем...</h1>}
      </div>

      <TodoList />

      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <TodoEditor onSave={toggleModal} />
        </Modal>
      )}
    </>
  );
}
