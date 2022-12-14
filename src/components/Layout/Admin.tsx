import { Box } from '@mui/material';
import { Header, Sidebar } from 'components/common';

export function AdminLayout() {
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
          
        </Box>
      </Box>
    </>
  );
}
