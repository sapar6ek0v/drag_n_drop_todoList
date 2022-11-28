import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDeleteProjectMutation } from '../../../store/apis/projects';
import { Project } from '../../../store/apis/projects/types';
import ButtonDelete from '../../Buttons/ButtonDelete';
import ButtonEdit from '../../Buttons/ButtonEdit';
import ErrorNotification from '../../ErrorNotification';
import FullPageLoader from '../../FullPageLoader';
import { LoaderWrapper } from '../../styles';
import ProjectUpdateModal from '../ProjectUpdateModal';
import { ButtonGroup, NavigateButton, Title, Wrapper } from './styles';

type Props = {
  project: Project
};

const ProjectCard: FC<Props> = ({ project }) => {
  const [deleteProject, { isLoading: isDeleteLoading }] = useDeleteProjectMutation();

  const navigate = useNavigate();
  const [isUpdateProject, setIsUpdateProject] = useState<boolean>(false);

  const handleDeleteProject = async () => {
    try {
      await deleteProject(project.id);
    } catch (error) {
      return <ErrorNotification message={error} />
    };
  };

  const handleUpdateProject = () => {
    setIsUpdateProject(true);
  };

  const handleNavigate = () => {
    navigate(`/${project.id}/todos`);
  };

  return (
    <>
      <Wrapper>
        {
          isDeleteLoading ?
            <LoaderWrapper minHeight={130}>
              <FullPageLoader />
            </LoaderWrapper> :
            <>
              <Title>{project.name}</Title>
              <ButtonGroup justify='space-between'>
                <NavigateButton onClick={handleNavigate}>Todos: {project.todos.length}</NavigateButton>
                <ButtonGroup justify='flex-end'>
                  <ButtonDelete onClick={handleDeleteProject} disabled={isDeleteLoading} />
                  <ButtonEdit onClick={handleUpdateProject} />
                </ButtonGroup>
              </ButtonGroup>
            </>
        }
      </Wrapper>
      {
        isUpdateProject &&
        <ProjectUpdateModal
          projectId={project.id}
          isOpen={isUpdateProject}
          onClose={() => setIsUpdateProject(false)}
        />
      }
    </>
  );
};

export default ProjectCard;