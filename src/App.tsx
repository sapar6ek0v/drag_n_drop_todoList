import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Projects from './pages/projects';
import Todos from './pages/todos';
import { Paths } from './utils/paths';

const App: FC = () => {
  return (
    <Routes>
      <Route path={Paths.PROJECTS} element={<Projects />} />
      <Route path={Paths.TODOS} element={<Todos />} />
    </Routes>
  );
};

export default App;
