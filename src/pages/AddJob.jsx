import Wrapper from '../assets/wrappers/DashboardFormPage';
import { Form, useNavigation, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FormRow, SelectRow } from '../components';
import customFetch from '../utils/customFetch';
import { JOB_STATUS, JOB_TYPE } from '../utils/constant';

// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post('/jobs', data);
    toast.success('Job Added Successfully');
    return redirect('all-jobs');
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};

const AddJob = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <Wrapper>
      <Form method="POST" className="form">
        <h4 className="form-title">Add Job</h4>
        <div className="form-center">
          <FormRow type="text" name="position" labelText="Position" />
          <FormRow type="text" name="company" labelText="Company" />
          <FormRow type="text" name="jobLocation" labelText="Job Location" />
          <SelectRow
            name="jobStatus"
            label="Job Status"
            list={Object.values(JOB_STATUS)}
          />
          <SelectRow
            name="jobType"
            label="Job Type"
            list={Object.values(JOB_TYPE)}
          />
          <button
            type="submit"
            className="btn form-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting' : 'Submit'}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default AddJob;
