import { FC, ReactNode } from 'react'
import { CloseBtn, ModalContentWrapper, ModalWrapper } from './styles'

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode
};

const Modal: FC<Props> = ({ isOpen, onClose, children }) => {
  return (
    <ModalWrapper onClick={onClose}>
      <ModalContentWrapper onClick={(e) => e.stopPropagation()}>
        <CloseBtn onClick={onClose}>x</CloseBtn>
        {children}
      </ModalContentWrapper>
    </ModalWrapper>
  )
}

export default Modal