import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SomePage } from './components/SomePage';
import { OtherPage } from './components/OtherPage';
import { Main } from './components/Main';

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/somepage" element={<SomePage />} />
        <Route path="/otherpage" element={<OtherPage />} />
      </Routes>
    </Router>
  );
}
