import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Student } from 'models';

export interface StudentRankingListProps {
  studentList: Student[];
}

export default function StudentRankingList({
  studentList,
}: StudentRankingListProps) {
  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Mark</TableCell>
          </TableRow> 
        </TableHead>
        <TableBody>
          {studentList.map((student) => (
            <TableRow
              key={student.id}
              sx={{'&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{student.id}</TableCell>
              <TableCell>{student.name}</TableCell>
              <TableCell>{student.mark}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
