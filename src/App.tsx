import { Routes, Route } from 'react-router-dom';
import LoginPage from './features/auth/pages/LoginPage';
import { AdminLayout } from './components/Layout';
import { NotFound } from './components/common';
import './index.css';
import Dashboard from './features/dashboard/Dashboard';
import StudentFeature from './features/students/index';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NotFound />} />
        <Route path="/admin" element={<AdminLayout />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/student" element={<StudentFeature />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
