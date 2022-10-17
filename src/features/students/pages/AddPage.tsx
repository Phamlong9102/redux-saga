import { Header, Sidebar } from 'components/common';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { ChevronLeft } from '@mui/icons-material';
import StudentForm from '../components/StudentForm';

export default function AddPage() {
  return (
    <>
      <div className="border-b-[1px] border-black">
        <Header />
      </div>
      <Box className="grid grid-cols-2 min-h-screen	">
        <div className="border-r-[1px] border-black">
          <Sidebar />
        </div>
        <Box>
          <Link to="/admin/student"> 
            <Typography variant="caption" sx={{ display: 'flex', alignItems: 'center', lineHeight: 0 }}>
              <ChevronLeft /> &nbsp; Back to student list   
            </Typography>  
          </Link>

          <Typography variant="h4">Add new student</Typography>

          <Box mt={3}>
            <StudentForm />
          </Box>
        </Box>
      </Box>
    </>
  );
}
