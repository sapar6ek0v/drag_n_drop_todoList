import { FC } from 'react';
import { Helmet } from 'react-helmet-async';

const Todos: FC = () => {
  return (
    <>
      <Helmet>
        <title>Todos</title>
        <meta name='description' content='All Todos' />
        <link rel='canonical' href='/todos' />
      </Helmet>
      <p>Todos</p>
    </>
  );
};

export default Todos;