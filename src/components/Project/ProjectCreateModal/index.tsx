import { FC } from 'react';
import { useCreateProjectMutation } from '../../../store/apis/projects';
import { ProjectInputValue } from '../../../store/apis/projects/types';
import ErrorNotification from '../../ErrorNotification';
import Modal from '../../Modal';
import ProjectForm from '../ProjectForm';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const ProjectCreateModal: FC<Props> = ({ isOpen, onClose }) => {
  const [createProject, { isLoading }] = useCreateProjectMutation();

  const handleSubmit = async (value: ProjectInputValue) => {
    try {
      await createProject(value);
      onClose();
    } catch (error) {
      return <ErrorNotification message={error} />
    };
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} >
      <ProjectForm onSubmit={handleSubmit} isLoading={isLoading} />
    </Modal>
  );
};

export default ProjectCreateModal;