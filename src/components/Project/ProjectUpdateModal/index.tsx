import { FC } from 'react';
import { useUpdateProjectMutation } from '../../../store/apis/projects';
import { ProjectInputValue } from '../../../store/apis/projects/types';
import Modal from '../../Modal';
import ProjectForm from '../ProjectForm';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  projectId: string;
};

const ProjectUpdateModal: FC<Props> = ({ isOpen, onClose, projectId }) => {
  const [updateProject, { isLoading }] = useUpdateProjectMutation();

  const handleSubmit = async (value: ProjectInputValue) => {
    try {
      await updateProject({ id: projectId, name: value.name });
      onClose();
    } catch (error) {
      console.log(error);
    };
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} >
      <ProjectForm onSubmit={handleSubmit} isLoading={isLoading} />
    </Modal>
  );
};

export default ProjectUpdateModal;