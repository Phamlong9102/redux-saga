import { Header, Sidebar } from 'components/common';
import { Box } from '@mui/material';
import { useAppDispatch } from 'app/hooks';
import { useEffect } from 'react';
import { cityActions } from 'features/city/CitySlice';


export default function AddEditPage() {
  const dispatch = useAppDispatch(); 

  useEffect(() => {
    dispatch(cityActions.fetchCityList())
  }, [dispatch])

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
