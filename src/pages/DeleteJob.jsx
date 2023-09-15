import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';

// eslint-disable-next-line react-refresh/only-export-components
export const action = (queryClient) => async ({ params }) => {
  try {
    await customFetch.delete(`/jobs/${params.id}`);
    toast.success('Job Delete Successfully');
    await queryClient.invalidateQueries(['jobs']);
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
  return redirect('/dashboard/all-jobs');
};
