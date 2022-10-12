import { Header, Sidebar } from 'components/common';
import { Box } from '@mui/material';
import StudentTable from '../components/StudentTable';
import { selectStudentList } from '../StudentSlice';


export default function AddEditPage() {
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
          hdjfskahf          
        </Box>
      </Box>
    </>
  );
}
