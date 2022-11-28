import { useState, useRef, FC } from "react";
import dayjs from "dayjs";
import { useDrag, useDrop } from "react-dnd";
import { Number } from "tabler-icons-react";
import { ITEM_TYPE } from "../../../pages/todos/types";
import { useDeleteTodoMutation } from "../../../store/apis/todos";
import { TodoStatus } from "../../../store/apis/todos/types";
import ButtonDelete from "../../Buttons/ButtonDelete";
import ButtonEdit from "../../Buttons/ButtonEdit";
import FullPageLoader from "../../FullPageLoader";
import SubtaskCreateModal from "../SubtaskCreateModal";
import TodoUpdateModal from "../TodoUpdateModal";
import SubtaskListItem from "../SubtaskListItem";
import {
  DateView,
  Description,
  Group,
  Header,
  NumberView,
  StatusView,
  ViewPriority,
  Wrapper,
  TextGroup,
  CreateTitle,
  ListStack,
} from "./styles";

type Props = {
  item: any;
  index: number;
  moveItem: (dragIndex: number, hoverIndex: number) => void;
  status: TodoStatus;
};

const DropItem: FC<Props> = ({ item, index, moveItem, status }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [isSubtaskCreate, setIsSubtaskCreate] = useState<boolean>(false);

  const [deleteTodo, { isLoading: isDeleteLoading }] = useDeleteTodoMutation();

  const [, drop] = useDrop({
    accept: ITEM_TYPE,
    hover(item: any, monitor) {

      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoveredRect = ref.current.getBoundingClientRect();
      const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2;
      const mousePosition = monitor.getClientOffset();
      const hoverClientY = mousePosition?.y as number - hoveredRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveItem(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ITEM_TYPE,
    item: { type: ITEM_TYPE, ...item, index },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    }),
  });

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  drag(drop(ref));

  const handleOpenEditModal = () => {
    setIsUpdate(true);
  };

  const handleCloseEditModal = () => {
    setIsUpdate(false);
  };

  const handleDelete = async () => {
    try {
      await deleteTodo({ id: item.id, projectId: item.projectId });
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpenSubtaskCreateModal = () => {
    setIsSubtaskCreate(true);
  };

  const handleCloseSubtaskCreateModal = () => {
    setIsSubtaskCreate(false);
  };

  return (
    <>
      <Wrapper
        ref={ref}
        onClick={handleOpenModal}
        className={isDragging ? 'isDragging' : ''}
      >
        {
          isDeleteLoading ?
            <FullPageLoader /> :
            <>
              <Group justify='space-between' >
                <Group gap={10}>
                  <ViewPriority className={item.priority}>{item.priority}</ViewPriority>
                  <StatusView bg={status.color}>{item.status}</StatusView>
                  <div>{status.icon}</div>
                </Group>
                <NumberView>
                  <Number size={20} strokeWidth={2.5} color={'#938e8e'} />
                  <span>{item.number}</span>
                </NumberView>
              </Group>
              <TextGroup>
                <Header>{item.header}</Header>
                <Description>{item.description}</Description>
              </TextGroup>
              <ListStack spacing={item.subtasks.length ? 10 : 0} onClick={(e) => e.stopPropagation()}>
                <CreateTitle onClick={handleOpenSubtaskCreateModal}>Создать подзадачу +</CreateTitle>
                {
                  item.subtasks.length ?
                    <SubtaskListItem subtasks={item.subtasks} projectId={item.projectId} />
                    : null
                }
              </ListStack>
              <Group justify='space-between'>
                <DateView>{dayjs(item.expirationDate).format('MMM D')}</DateView>
                <Group gap={10} onClick={(e) => e.stopPropagation()}>
                  <ButtonEdit onClick={handleOpenEditModal} />
                  <ButtonDelete onClick={handleDelete} />
                </Group>
              </Group>
            </>
        }
      </Wrapper>
      {isOpen && <TodoUpdateModal isOpen={isOpen} onClose={handleCloseModal} />}
      {isUpdate && <TodoUpdateModal isOpen={isUpdate} onClose={handleCloseEditModal} />}
      {
        isSubtaskCreate &&
        <SubtaskCreateModal
          isOpen={isSubtaskCreate}
          onClose={handleCloseSubtaskCreateModal}
          todoId={item.id}
          projectId={item.projectId}
        />
      }
    </>
  );
};

export default DropItem;