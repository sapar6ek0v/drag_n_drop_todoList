import { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Layout from './components/Layout';
import Projects from './pages/projects';
import Todos from './pages/todos';
import GlobalStyle from './utils/globalStyles';
import { Paths } from './utils/paths';

const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <DndProvider backend={HTML5Backend}>
        <Layout>
          <Routes>
            <Route path='*' element={<Navigate to={Paths.PROJECTS} />} />
            <Route path={Paths.PROJECTS} element={<Projects />} />
            <Route path={Paths.TODOS} element={<Todos />} />
          </Routes>
        </Layout>
      </DndProvider>
    </>
  );
};

export default App;
