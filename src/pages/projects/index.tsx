import { FC, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useGetAllQuery } from '../../store/apis/projects';
import SearchForm from '../../components/SearchForm';
import FullPageLoader from '../../components/FullPageLoader';
import ProjectCard from '../../components/Project/ProjectCard';
import ProjectCreateModal from '../../components/Project/ProjectCreateModal';
import { ContentWrapper, Grid, Paper } from '../../components/styles';

const Projects: FC = () => {
  const [search, setSearch] = useState<string>('');
  const [params, setParams] = useState<string>('');

  const { data: projects, isLoading } = useGetAllQuery(params);

  const [isOpen, setIsOpenModal] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const handleSearchSubmit = () => {
    setParams(`&name=${search}`);
    setSearch('');
  };

  return (
    <>
      <Helmet>
        <title>Projects</title>
        <meta name='description' content='All Projects' />
        <link rel='canonical' href='/projects' />
      </Helmet>
      <ContentWrapper>
        <SearchForm
          search={search}
          setSearch={setSearch}
          handleSearchSubmit={handleSearchSubmit}
          isLoading={isLoading}
          handleCreate={handleOpenModal}
        />
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