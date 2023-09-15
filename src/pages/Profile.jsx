import { useOutletContext, Form, useNavigation, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { FormRow } from '../components';
import customFetch from '../utils/customFetch';

// eslint-disable-next-line react-refresh/only-export-components
export const action =
  (queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const file = formData.get('avatar');

    if (file && file.size > 500000) {
      toast.error('Image size too large');
      return null;
    }

    try {
      await customFetch.put('/user/update-user', formData);
      queryClient.invalidateQueries(['user']);
      toast.success('User Update Successfully');
      return redirect('/dashboard');
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return null;
    }

  };

const Profile = () => {
  const { user } = useOutletContext();
  const { firstName, lastName, email } = user;
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <Wrapper>
      <Form method="post" className="form" encType="multipart/form-data">
        <h4 className="form-title">Profile</h4>
        <div className="form-center">
          <div className="form-row">
            <label htmlFor="avatar" className="label">
              Select An Image File (Max 0.5 MB)
            </label>
            <input
              type="file"
              name="avatar"
              id="avatar"
              accept="image/*"
              className="input"
            />
          </div>
          <FormRow
            type="text"
            name="firstName"
            labelText="First Name"
            defaultValue={firstName}
          />
          <FormRow
            type="text"
            name="lastName"
            labelText="Last Name"
            defaultValue={lastName}
          />
          <FormRow
            type="text"
            name="email"
            labelText="Email"
            defaultValue={email}
          />
          <button
            type="submit"
            className="btn btn-block form-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default Profile;
