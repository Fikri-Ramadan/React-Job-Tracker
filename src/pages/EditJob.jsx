import { Form, useNavigation, redirect, useLoaderData } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { FormRow, SelectRow } from '../components';
import { JOB_STATUS, JOB_TYPE } from '../utils/constant';
import customFetch from '../utils/customFetch';

const singleJobQuery = (id) => {
  return {
    queryKey: ['job', id],
    queryFn: async () => {
      const { data } = await customFetch.get(`/jobs/${id}`);
      return data;
    },
  };
};

// eslint-disable-next-line react-refresh/only-export-components
export const loader =
  (queryClient) =>
  async ({ params }) => {
    try {
      await queryClient.ensureQueryData(singleJobQuery(params.id));
      return params.id;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return redirect('/dashboard/all-jobs');
    }
  };

// eslint-disable-next-line react-refresh/only-export-components
export const action =
  (queryClient) =>
  async ({ request, params }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      await customFetch.put(`/jobs/${params.id}`, data);
      toast.success('Job Edit Successfully');
      await queryClient.invalidateQueries(['jobs']);
      return redirect('/dashboard/all-jobs');
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return error;
    }
  };

const EditJob = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  const id = useLoaderData();

  const {
    data: { data: job },
  } = useQuery(singleJobQuery(id));

  return (
    <Wrapper>
      <Form method="POST" className="form">
        <h4 className="form-title">Add Job</h4>
        <div className="form-center">
          <FormRow
            type="text"
            name="position"
            labelText="Position"
            defaultValue={job.position}
          />
          <FormRow
            type="text"
            name="company"
            labelText="Company"
            defaultValue={job.company}
          />
          <FormRow
            type="text"
            name="jobLocation"
            labelText="Job Location"
            defaultValue={job.jobLocation}
          />
          <SelectRow
            name="jobStatus"
            label="Job Status"
            list={Object.values(JOB_STATUS)}
            defaultValue={job.jobStatus}
          />
          <SelectRow
            name="jobType"
            label="Job Type"
            list={Object.values(JOB_TYPE)}
            defaultValue={job.jobType}
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

export default EditJob;
