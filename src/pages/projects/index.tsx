import { FC, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ProjectCard from '../../components/Project/ProjectCard';
import ProjectCreateModal from '../../components/Project/ProjectCreateModal';
import SearchForm from '../../components/SearchForm';
import { useGetAllQuery } from '../../store/apis/projects';
import { Grid, ContentWrapper, Paper } from './styles';

const Projects: FC = () => {
  const { data: projects } = useGetAllQuery();

  const [isOpen, setIsOpenModal] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <Helmet>
        <title>Projects</title>
        <meta name='description' content='All Todos' />
        <link rel='canonical' href='/projects' />
      </Helmet>
      <ContentWrapper>
        <SearchForm handleCreate={handleOpenModal} />
        <Paper>
          <Grid>
            {projects?.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </Grid>
        </Paper>
      </ContentWrapper>
      {isOpen && <ProjectCreateModal isOpen={isOpen} onClose={handleCloseModal} />}
    </>
  );
};

export default Projects;