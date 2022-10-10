import { Box } from '@mui/material';
import { Header, Sidebar } from 'components/common';

export default function Dashboard() {
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
          sdf,jgh,
        </Box>
      </Box>
    </>
  );
}
