import { FC, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import FullPageLoader from '../../components/FullPageLoader';
import ProjectCard from '../../components/Project/ProjectCard';
import ProjectCreateModal from '../../components/Project/ProjectCreateModal';
import SearchForm from '../../components/SearchForm';
import { ContentWrapper, Grid, Paper } from '../../components/styles';
import { useGetAllQuery } from '../../store/apis/projects';

const Projects: FC = () => {
  const { data: projects, isLoading } = useGetAllQuery();

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
        <meta name='description' content='All Projects' />
        <link rel='canonical' href='/projects' />
      </Helmet>
      <ContentWrapper>
        <SearchForm handleCreate={handleOpenModal} />
        <Paper>
          <Grid>
            {
              (!isLoading && !!projects) ?
                projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                )) :
                <FullPageLoader />
            }
          </Grid>
        </Paper>
      </ContentWrapper>
      {isOpen && <ProjectCreateModal isOpen={isOpen} onClose={handleCloseModal} />}
    </>
  );
};

export default Projects;