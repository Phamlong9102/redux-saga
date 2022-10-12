import { Header, Sidebar } from 'components/common';
import { Box, Button, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { useEffect } from 'react';
import {
  selectStudentFilter,
  selectStudentList,
  selectStudentPagination,
  studentActions,
} from '../StudentSlice';
import StudentTable from '../components/StudentTable';
import Pagination from '@mui/material/Pagination';

export default function ListPage() {
  const studentList = useAppSelector(selectStudentList);
  const pagination = useAppSelector(selectStudentPagination);
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectStudentFilter); 

  useEffect(() => {
    dispatch(studentActions.fetchStudentList(filter));
  }, [dispatch, filter]);

  const handlePageChange = (e: any, page: number) => {
    dispatch(studentActions.setFilter({
      ...filter, 
      _page: page,
    }))
  };

  return (
    <>
      <div className="border-b-[1px] border-black">
        <Header />
      </div>
      <Box className="flex">
        <div className="border-r-[1px] border-black">
          <Sidebar />
        </div>
        <Box
          sx={{
            marginLeft: 12,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexFlow: 'row nowrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 3,
            }}
          >
            <Typography variant="h4">Students</Typography>
            <Button variant="contained" color="primary">
              Add new student
            </Button>
          </Box>

          {/* Student table */}
          <StudentTable studentList={studentList} />

          {/* Pagination */}
          <Box sx={{ marginTop: 2, marginBottom: 2, display: 'flex', justifyContent: 'center' }}>
            <Pagination
              color="primary"
              sx={{ marginTop: 3 }}
              count={Math.ceil(pagination._totalRows / pagination._limit)}
              page={pagination?._page}
              onChange={handlePageChange}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
