import { FC, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDeleteProjectMutation } from '../../../store/apis/projects';
import { Project } from '../../../store/apis/projects/types';
import { Paths } from '../../../utils/paths';
import ButtonDelete from '../../Buttons/ButtonDelete';
import ButtonEdit from '../../Buttons/ButtonEdit';
import ProjectUpdateModal from '../ProjectUpdateModal';
import { ButtonGroup, Title, Wrapper } from './styles';

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
      console.log(error);
    };
  };

  const handleUpdateProject = () => {
    setIsUpdateProject(true);
  };

  const handleNavigate = () => {
    navigate(Paths.TODOS, { state: { id: project.id } });
  };

  return (
    <>
      <Link to={`/${project.id}/todos`}>
        <Wrapper>
          {
            isDeleteLoading ?
              <div>Удаление...</div> :
              <>
                <Title>{project.name}</Title>
                <ButtonGroup>
                  <ButtonDelete onClick={handleDeleteProject} disabled={isDeleteLoading} />
                  <ButtonEdit onClick={handleUpdateProject} />
                </ButtonGroup>
              </>
          }
        </Wrapper>
      </Link>
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