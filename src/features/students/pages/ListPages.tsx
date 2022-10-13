import { Header, Sidebar } from 'components/common';
import { Box, Button, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { useEffect } from 'react';
import {
  cityActions,
  selectCityList,
  selectCityMap,
} from 'features/city/CitySlice';
import {
  selectStudentFilter,
  selectStudentList,
  selectStudentPagination,
  studentActions,
} from '../StudentSlice';
import StudentTable from '../components/StudentTable';
import Pagination from '@mui/material/Pagination';
import StudentFilters from '../components/StudentFilters';
import { ListParams, Student } from 'models';
import studentApi from 'api/studentApi';

export default function ListPage() {
  const studentList = useAppSelector(selectStudentList);
  const pagination = useAppSelector(selectStudentPagination);
  const filter = useAppSelector(selectStudentFilter);
  const dispatch = useAppDispatch();
  const cityMap = useAppSelector(selectCityMap);
  const cityList = useAppSelector(selectCityList);

  useEffect(() => {
    dispatch(cityActions.fetchCityList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(studentActions.fetchStudentList(filter));
  }, [dispatch, filter]);

  const handlePageChange = (e: any, page: number) => {
    dispatch(
      studentActions.setFilter({
        ...filter,
        _page: page,
      })
    );
  };

  const handleSearchChange = (newFilter: ListParams) => {
    console.log('Search Change: ', newFilter);
    dispatch(studentActions.setFilterWithDebounce(newFilter));
  };

  const handleFilterChange = (newFilter: ListParams) => {
    const action = studentActions.setFilter(newFilter)
    console.log('City change action', action)
    dispatch(studentActions.setFilter(newFilter));
  };

  const handleRemoveStudent = async (student: Student) => {
    console.log('Handle remove student', student)
    try {
      // Remove student API
      await studentApi.remove(student?.id || '')
      // Trigger to re-fetch student list with current filter
      const newFilter = { ...filter}
      dispatch(studentActions.setFilter(newFilter))
    } catch (error) {
      // Toast error
      console.log('Falied to fetch student', error)
    }
  }

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

          <Box mb={3}>
            {/* Filters */}
            <StudentFilters
              filter={filter}
              cityList={cityList}
              onChange={handleFilterChange}
              onSearchChange={handleSearchChange}
            />
          </Box>

          {/* Student table */}
          <StudentTable studentList={studentList} cityMap={cityMap} onRemove={handleRemoveStudent}/>

          {/* Pagination */}
          <Box
            sx={{
              marginTop: 2,
              marginBottom: 2,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
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
