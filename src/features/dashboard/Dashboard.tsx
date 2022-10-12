import { Box, Grid, LinearProgress, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { Header, Sidebar } from 'components/common';
import { useEffect } from 'react';
import {
  dashboardActions,
  selectDashboardLoading,
  selectDashboardStatistics,
  selectHighestStudentList,
  selectLowestStudentList,
  selectRankingByCityList,
} from './DashboardSlice';
import StatisticItem from './components/StatisticsItem';
import { People } from '@mui/icons-material';
import GirlIcon from '@mui/icons-material/Girl';
import ManIcon from '@mui/icons-material/Man';
import Widget from './components/Widget';
import StudentRankingList from './components/StudentRankingList';

export default function Dashboard() {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectDashboardLoading);
  const statistics = useAppSelector(selectDashboardStatistics);
  const highestStudentList = useAppSelector(selectHighestStudentList);
  const lowestStudentList = useAppSelector(selectLowestStudentList);
  const rankingByCityList = useAppSelector(selectRankingByCityList);

  useEffect(() => {
    dispatch(dashboardActions.fetchData());
  }, [dispatch]);
    
  console.log({
    loading,
    statistics,
    highestStudentList,
    lowestStudentList,
    rankingByCityList,
  });

  return (
    <>
      <div className="border-b-[1px] border-black">
        <Header />
      </div>
      <Box className="flex mt-[10px]">
        <div className="w-[300px] border-r-[1px] border-black">
          <Sidebar />
        </div>
        <Box>
          <div>{loading && <LinearProgress />}</div>
          <Grid container spacing={3}>
            <Grid item>
              <StatisticItem
                icon={<ManIcon fontSize="large" color="primary" />}
                label="Male"
                value={statistics.maleCount}
              />
            </Grid>
            <Grid item>
              <StatisticItem
                icon={<GirlIcon fontSize="large" color="primary" />}
                label="Female"
                value={statistics.femaleCount}
              />
            </Grid>
            <Grid item>
              <StatisticItem
                icon={<People fontSize="large" color="primary" />}
                label="People have Mark >= 8"
                value={statistics.highMarkCount}
              />
            </Grid>
            <Grid item>
              <StatisticItem
                icon={<People fontSize="large" color="primary" />}
                label="People have Mark <= 5"
                value={statistics.lowMarkCount}
              />
            </Grid>
          </Grid>
          {/* All students ranking */}
          <Box mt={4}>
            <Typography variant="h4">Ranking by mark</Typography>
            <Grid container spacing={3}>
              <Grid item>
                <Widget title="Student with highest mark">
                  <StudentRankingList studentList={highestStudentList} />
                </Widget>
              </Grid>

              <Grid item>
                <Widget title="Student with lowest mark">
                  <StudentRankingList studentList={lowestStudentList} />
                </Widget>
              </Grid>
            </Grid>
          </Box>

          {/* Ranking By city */}
          <Box mt={4}>
            <Typography variant="h4">Ranking by city</Typography>
            <Box mt={2}>
              {rankingByCityList.map((ranking) => (
                <Grid key={ranking.cityId} item>
                  <Widget title={ranking.cityName}>
                    <StudentRankingList studentList={ranking.rankingList} />
                  </Widget>
                </Grid>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
