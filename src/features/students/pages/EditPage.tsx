import { Header, Sidebar } from 'components/common';
import { Box, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { ChevronLeft } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { Student } from 'models';
import studentApi from 'api/studentApi';
import StudentForm from '../components/StudentForm';
import { toast } from 'react-toastify';

export default function EditPage() {
  const { studentId } = useParams<{ studentId: string }>();
  const [student, setStudent] = useState<Student>();

  useEffect(() => {
    (async () => {
      try {
        const data = await studentApi.getbyId(studentId as string);
        console.log(data);
        setStudent(data);
      } catch (error) {
        console.log('Failed to fetch data from edit');
      }
    })();
  }, [studentId]);

  const handleStudentFormSubmit = async (formValues: Student) => {
    await studentApi.update(formValues);
  };

  const initialValues: Student = {
    name: '',
    age: '',
    mark: '',
    gender: 'male',
    city: '',
    ...student,
  } as Student;

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
            <Typography
              variant="caption"
              sx={{ display: 'flex', alignItems: 'center', lineHeight: 0 }}
            >
              <ChevronLeft /> &nbsp; Back to student list
            </Typography>
          </Link>

          <Typography variant="h4">Edit student</Typography>

          {student && (
            <Box mt={3}>
              <StudentForm
                initialValues={initialValues}
                onSubmit={handleStudentFormSubmit}
              />
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
}
