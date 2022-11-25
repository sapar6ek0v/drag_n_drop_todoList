import { FC, useState } from 'react';
import { TrashX, Edit } from 'tabler-icons-react';
import { useDeleteProjectMutation } from '../../../store/apis/projects';
import { Project } from '../../../store/apis/projects/types';
import ProjectUpdateModal from '../ProjectUpdateModal';
import { ButtonDelete, ButtonEdit, ButtonGroup, Title, Wrapper } from './styles';

type Props = {
  project: Project
};

const ProjectCard: FC<Props> = ({ project }) => {
  const [deleteProject, { isLoading }] = useDeleteProjectMutation();

  const [isUpdateProject, setIsUpdateProject] = useState<boolean>(false);

  const handleDeleteProject = async () => {
    try {
      await deleteProject(project.id);
    } catch (error) {
      console.log(error);
    };
  };

  const handleUpdateProject = () => {
    setIsUpdateProject(true);
  };

  return (
    <>
      <Wrapper>
        <Title>{project.name}</Title>
        <ButtonGroup>
          <ButtonDelete onClick={handleDeleteProject} disabled={isLoading}>
            <TrashX size={30} strokeWidth={1.5} color={'#ee4758'} />
          </ButtonDelete>
          <ButtonEdit onClick={handleUpdateProject}>
            <Edit size={20} strokeWidth={2} color={'rgba(128, 248, 174, 1)'} />
          </ButtonEdit>
        </ButtonGroup>
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