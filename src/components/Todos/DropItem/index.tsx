import { useState, useRef, FC } from "react";
import dayjs from "dayjs";
import { useDrag, useDrop } from "react-dnd";
import { Number } from "tabler-icons-react";
import { ITEM_TYPE } from "../../../pages/todos/types";
import { TodoStatus } from "../../../store/apis/todos/types";
import TodoUpdateModal from "../TodoUpdateModal";
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
} from "./styles";
import ButtonDelete from "../../Buttons/ButtonDelete";
import ButtonEdit from "../../Buttons/ButtonEdit";

type Props = {
  item: any;
  index: number;
  moveItem: (dragIndex: number, hoverIndex: number) => void;
  status: TodoStatus;
};

const DropItem: FC<Props> = ({ item, index, moveItem, status }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

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
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  drag(drop(ref));

  const handleEdit = () => {

  };

  const handleDelete = () => {

  };

  return (
    <>
      <Wrapper
        ref={ref}
        onClick={handleOpenModal}
        className={isDragging ? 'isDragging' : ''}
      >
        <Group justify='space-between'>
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
        <Group justify='space-between'>
          <DateView>{dayjs(item.expirationDate).format('MMM D')}</DateView>
          <Group gap={10}>
            <ButtonEdit onClick={handleEdit} />
            <ButtonDelete onClick={handleDelete} />
          </Group>
        </Group>
      </Wrapper>
      {isOpenModal && <TodoUpdateModal isOpen={isOpenModal} onClose={handleCloseModal} />}
    </>
  );
};

export default DropItem;