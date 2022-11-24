import { FC } from 'react';
import { Helmet } from 'react-helmet-async';

const Projects: FC = () => {
  return (
    <>
      <Helmet>
        <title>Todos</title>
        <meta name='description' content='All Todos' />
        <link ref='canonical' href='/projects' />
      </Helmet>
      <p>Projects</p>
    </>
  );
};

export default Projects;