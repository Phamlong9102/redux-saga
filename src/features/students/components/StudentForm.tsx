import { Alert, Button, CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import { useAppSelector } from 'app/hooks';
import {
  InputField,
  RadioGroupField,
  SelectField,
} from 'components/FormFields';
import { selectCityOptions } from 'features/city/CitySlice';
import { Student } from 'models';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';

const schema = yup
  .object({
    name: yup
      .string()
      .required('Name is a required field')
      .test('two-word', 'Please enter at least two words', (value) => {
        if (!value) return true;
        const parts = value?.split(' ') || [];
        return parts.filter((x) => !!x).length >= 2;
      }),
    age: yup
      .number()
      .positive()
      .integer()
      .min(18, 'Min is 18')
      .max(60, 'Max is 60')
      .required('Age field is required')
      .typeError('Please enter a valid number'),
    mark: yup
      .number()
      .min(0, 'Min is 0')
      .max(10, 'Max is 10')
      .required('Mark field is required')
      .typeError('Please enter a valid number'),
    gender: yup
      .string()
      .oneOf(['male', 'female'], 'Please select either male or female')
      .required('Please select gender'),
    city: yup.string().required('Please select city'),
  })
  .required();

export interface StudentFormProps {
  initialValues?: Student;
  onSubmit?: (formValues: Student) => void;
}

export default function StudentForm({
  initialValues,
  onSubmit,
}: StudentFormProps) {
  const cityOptions = useAppSelector(selectCityOptions);
  const [error, setError] = useState<string>('');
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<Student>({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  });
  const hanleFormSubmit = async (formValues: Student) => {
    try {
      setError('');
      await onSubmit?.(formValues);
    } catch (error) {
      console.log('error:', error);
    }
  };

  return (
    <>
      <Box>
        <form onSubmit={handleSubmit(hanleFormSubmit)}>
          <InputField name="name" control={control} label="Full Name" />
          <RadioGroupField
            name="gender"
            control={control}
            label="gender"
            options={[
              { label: 'Male', value: 'male' },
              { label: 'Female', value: 'female' },
            ]}
          />
          <InputField name="age" control={control} label="Age" type="number" />
          <InputField
            name="mark"
            control={control}
            label="Mark"
            type="number"
          />

          {Array.isArray(cityOptions) && cityOptions.length > 0 && (
            <SelectField
              name="city"
              control={control}
              label="City"
              options={cityOptions}
            />
          )}

          {error && <Alert severity="error">{error}</Alert>}

          <Box mt={3}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitting}
            >
              {isSubmitting && <CircularProgress size={16} />} Save
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
}
