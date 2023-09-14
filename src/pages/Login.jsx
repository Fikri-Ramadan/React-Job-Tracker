import { Link, Form, useNavigation, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Logo, FormRow } from '../components';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import customFetch from '../utils/customFetch';

// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post('/auth/login', data);
    toast.success('Login Success');
    return redirect('/dashboard');
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};

const Login = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <Wrapper>
      <Form method="POST" className="form">
        <Logo className="logo" />
        <h3>Login</h3>
        <FormRow type="email" name="email" labelText="Email" />
        <FormRow type="password" name="password" labelText="Password" />
        <button type="submit" className="btn btn-block" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
        <p>
          Don&#39;t have account?
          <Link to="/register" className="btn-link">
            Register
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Login;
