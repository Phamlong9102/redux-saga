import { Search } from '@mui/icons-material';
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { Box } from '@mui/system';
import { City, ListParams } from 'models';
import { ChangeEvent, useRef } from 'react';

export interface StudentFiltersProps {
  filter: ListParams;
  cityList: City[];
  onChange?: (newFilter: ListParams) => void;
  onSearchChange?: (newFilter: ListParams) => void;
}

export default function StudentFilters({
  filter,
  onSearchChange,
  cityList,
  onChange,
}: StudentFiltersProps) {
  const searchRef = useRef<HTMLInputElement>(); 

  // Search
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!onSearchChange) return;
    const newFilter: ListParams = {
      ...filter,
      name_like: e.target.value,
      _page: 1,
    };
    onSearchChange(newFilter);
  };

  // Filter function
  const handleCityChange = (e: SelectChangeEvent<{ name?: string; value: unknown }>) => {
    if (!onChange) return;
    const newFilter: ListParams = {
      ...filter,
      _page: 1,
      city: e.target.value || undefined,
    };
    onChange(newFilter);
  };

  // Sort function
  const handleSortChange = (e: SelectChangeEvent<{ name?: unknown; value?: unknown }>) => {
    if (!onChange) return; 
    const value = e.target.value; 
    const [_sort, _order] = (value as string).split('.')
    const newFilter: ListParams = {
      ...filter, 
      _sort: _sort || undefined,
      _order: (_order as 'asc' | 'desc') || undefined,
    }; 
    onChange(newFilter)
  };

  // Clear function
  const handleClearFilter = (e: any) => {
    if (!onChange) return; 
    const newFilter: ListParams = {
      ...filter, 
      _page: 1, 
      _sort: undefined,
      _order: undefined,
      city: undefined, 
      name_like: undefined, 
    }; 
    onChange(newFilter)
    if (searchRef.current) {
      searchRef.current.value = '';
    }
  }

  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={6} md={12}>
          <FormControl fullWidth variant="standard" size="small">
            <InputLabel htmlFor="searchByName">Search By Name</InputLabel>
            <OutlinedInput
              id="searchByName"
              label="Search by name"
              endAdornment={<Search />}
              onChange={handleSearchChange}
              defaultValue={filter.name_like}
              inputRef={searchRef}
            />
          </FormControl>
        </Grid>
      </Grid>

      {/* Filter */}
      <Grid item xs={6} md={12} mt={4}>
        <FormControl fullWidth size="small">
          <InputLabel id="filterByCity">Filter by city</InputLabel>
          <Select
            value={filter.city || ''}
            labelId="filterByCity"
            label="Filter by city"
            onChange={handleCityChange}
          >
            <MenuItem value="">
              <span>All</span>
            </MenuItem>

            {cityList.map((city) => (
              <MenuItem key={city.code} value={city.code}>
                {city.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      {/* Sort */}
      <Grid item xs={6} md={12} mt={4}>
        <FormControl fullWidth size="small">
          <InputLabel id="sortBy">Sort</InputLabel>
          <Select
            labelId="sortBy"
            value={filter._sort ? `${filter._sort}.${filter._order}` : ''}
            onChange={handleSortChange}
            label="Sort"
          >
            <MenuItem value="">
              <span>No sort</span>
            </MenuItem>
            <MenuItem value="name.asc">Name ASC</MenuItem>
            <MenuItem value="name.desc">Name DESC</MenuItem>
            <MenuItem value="mark.asc">Mark ASC</MenuItem>
            <MenuItem value="mark.desc">Mark DESC</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item mt={4}>
        <Button onClick={handleClearFilter} variant="outlined" color="primary" fullWidth>Clear</Button>
      </Grid>
    </Box>
  );
}
