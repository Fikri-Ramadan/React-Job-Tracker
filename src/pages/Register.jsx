import { Form, redirect, useNavigation, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormRow, Logo } from '../components';
import customFetch from '../utils/customFetch';

// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await customFetch.post('/auth/register', data);
    console.log(response);
    toast.success('Registration Success');
    return redirect('/login');
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};

const Register = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <Wrapper>
      <Form className="form" method="POST">
        <Logo className="logo" />
        <h3>Register</h3>
        <FormRow type="text" name="firstName" labelText="First Name" />
        <FormRow type="text" name="lastName" labelText="Last Name" />
        <FormRow type="email" name="email" labelText="Email" />
        <FormRow type="password" name="password" labelText="Password" />
        <button type="submit" className="btn btn-block" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
        <p>
          Already have account?
          <Link to="/login" className="btn-link">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Register;
