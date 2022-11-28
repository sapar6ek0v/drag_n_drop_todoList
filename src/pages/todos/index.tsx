import { FC, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { useChangeTodoStatusMutation, useGetAllTodosQuery } from '../../store/apis/todos';
import { Params, Todo, TodoStatuses } from '../../store/apis/todos/types';
import SearchForm from '../../components/SearchForm';
import { ContentWrapper, Paper } from '../../components/styles';
import TodoCreateModal from '../../components/Todos/TodoCreateModal';
import FullPageLoader from '../../components/FullPageLoader';
import DropWrapper from '../../components/Todos/DropWrapper';
import DropColumn from '../../components/Todos/DropColumn';
import DropItem from '../../components/Todos/DropItem';
import { Row, Column, ColumnHeader } from './styles';
import statuses from './statuses';


const Todos: FC = () => {
  const { id } = useParams();
  const [search, setSearch] = useState<string>('');
  const [params, setParams] = useState<Params>({
    projectId: id as string
  });

  const { data, isLoading } = useGetAllTodosQuery(params);
  const [changeTodoStatus] = useChangeTodoStatusMutation();

  const [isOpen, setIsOpenModal] = useState<boolean>(false);
  const [todos, setTodos] = useState(data);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const onDrop = async (item: Todo, monitor: any, status: TodoStatuses) => {
    if (todos) {

      setTodos(prevState => {
        if (prevState) {
          const newItems = prevState
            .filter((todo) => todo.id !== item.id)
            .concat({ ...item, status });
          return [...newItems];
        }
      });

      await changeTodoStatus({ id: item.id, projectId: item.projectId, status: status });
    }
  };

  const moveItem = (dragIndex: number, hoverIndex: number) => {
    if (todos) {
      const item = todos[dragIndex];
      setTodos(prevState => {
        if (prevState) {
          const newItems = prevState.filter((i, idx) => idx !== dragIndex);
          newItems.splice(hoverIndex, 0, item);
          return [...newItems];
        }
      });
    }
  };

  useEffect(() => {
    if (!isLoading) {
      setTodos(data);
    }

  }, [isLoading, data])

  const handleSearchSubmit = () => {
    setParams({ ...params, search: `&search=${search}` })
    setSearch('');
  };

  return (
    <>
      <Helmet>
        <title>Todos</title>
        <meta name='description' content='All Todos' />
        <link rel='canonical' href='/todos' />
      </Helmet>
      <ContentWrapper>
        <SearchForm
          search={search}
          setSearch={setSearch}
          handleSearchSubmit={handleSearchSubmit}
          isLoading={isLoading}
          handleCreate={handleOpenModal}
        />
        <Paper>
          <Row>
            {
              (!isLoading && !!todos) ?
                statuses.map((todoStatus) => {
                  return (
                    <Column key={todoStatus.status}>
                      <ColumnHeader>{todoStatus.status.toUpperCase()}</ColumnHeader>
                      <DropWrapper onDrop={onDrop} status={todoStatus.status}>
                        <DropColumn>
                          {
                            todos
                              .filter((todo) => todo.status === todoStatus.status)
                              .map((todo, idx) =>
                                <DropItem
                                  key={todo.id}
                                  item={todo}
                                  index={idx}
                                  moveItem={moveItem}
                                  status={todoStatus}
                                />
                              )
                          }
                        </DropColumn>
                      </DropWrapper>
                    </Column>
                  );
                })
                : <FullPageLoader />
            }
          </Row>
        </Paper>
      </ContentWrapper>
      {isOpen && <TodoCreateModal isOpen={isOpen} onClose={handleCloseModal} projectId={id as string} />}
    </>
  );
};

export default Todos;