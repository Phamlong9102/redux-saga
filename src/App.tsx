import { Routes, Route } from 'react-router-dom';
import LoginPage from './features/auth/pages/LoginPage';
import { AdminLayout } from './components/Layout';
import { NotFound } from './components/common';
import './index.css';
import Dashboard from './features/dashboard/Dashboard';
import AddPage from 'features/students/pages/AddPage';
import ListPage from 'features/students/pages/ListPages';
import EditPage from 'features/students/pages/EditPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NotFound />} />
        <Route path="/admin" element={<AdminLayout />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />

        <Route path="/admin/student" element={<ListPage />} />
        <Route path="/admin/student/add" element={<AddPage />} />
        <Route path="/admin/student/edit/:studentId" element={<EditPage />} />
        

        <Route path="/login" element={<LoginPage />} />

      </Routes>
    </div>
  );
}

export default App;
