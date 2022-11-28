import { FC, useMemo } from 'react';
import { useGetProjectByIdQuery, useUpdateProjectMutation } from '../../../store/apis/projects';
import { ProjectInputValue } from '../../../store/apis/projects/types';
import ErrorNotification from '../../ErrorNotification';
import FullPageLoader from '../../FullPageLoader';
import Modal from '../../Modal';
import { LoaderWrapper } from '../../styles';
import ProjectForm from '../ProjectForm';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  projectId: string;
};

const ProjectUpdateModal: FC<Props> = ({ isOpen, onClose, projectId }) => {
  const [updateProject, { isLoading: isUpdateLoading }] = useUpdateProjectMutation();
  const { data: project, isLoading } = useGetProjectByIdQuery(projectId);

  const handleSubmit = async (value: ProjectInputValue) => {
    try {
      await updateProject({ id: projectId, name: value.name });
      onClose();
    } catch (error) {
      return <ErrorNotification message={error} />
    };
  };

  const defaultValues = useMemo(() => {
    if (project) {
      return {
        name: project.name
      }
    }
  }, [project])

  return (
    <Modal isOpen={isOpen} onClose={onClose} >
      {
        (!isLoading && !!defaultValues) ?
          <ProjectForm onSubmit={handleSubmit} isLoading={isUpdateLoading} defaultValues={defaultValues} />
          : <LoaderWrapper minHeight={170}>
            <FullPageLoader />
          </LoaderWrapper>
      }
    </Modal>
  );
};

export default ProjectUpdateModal;