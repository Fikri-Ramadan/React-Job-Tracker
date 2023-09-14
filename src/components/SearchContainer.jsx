import { Form, Link, useSubmit } from 'react-router-dom';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import FormRow from './FormRow';
import SelectRow from './SelectRow';
import { JOB_STATUS, JOB_TYPE, JOB_SORT_BY } from '../utils/constant';
import { useAllJobsContext } from '../pages/AllJobs';

const SearchContainer = () => {
  const { searchValues } = useAllJobsContext();
  const { search, jobStatus, jobType, sort } = searchValues;

  const submit = useSubmit();

  const debounce = (onChange) => {
    let timeout;
    return (e) => {
      const form = e.currentTarget.form;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        onChange(form);
      }, 1000);
    };
  };

  return (
    <Wrapper>
      <Form method="GET" className="form">
        <h5 className="form-title">Search Form</h5>
        <div className="form-center">
          <FormRow
            type="search"
            name="search"
            labelText="Search"
            defaultValue={search}
            onChange={debounce((form) => {
              submit(form);
            })}
          />
          <SelectRow
            name="jobStatus"
            label="Job Status"
            list={['all', ...Object.values(JOB_STATUS)]}
            defaultValue={jobStatus}
            onChange={debounce((form) => {
              submit(form);
            })}
          />
          <SelectRow
            name="jobType"
            label="Job Type"
            list={['all', ...Object.values(JOB_TYPE)]}
            defaultValue={jobType}
            onChange={debounce((form) => {
              submit(form);
            })}
          />
          <SelectRow
            name="sort"
            label="sort"
            list={Object.values(JOB_SORT_BY)}
            defaultValue={sort}
            onChange={debounce((form) => {
              submit(form);
            })}
          />
          <Link to="/dashboard/all-jobs" className="btn form-btn">
            Reset
          </Link>
        </div>
      </Form>
    </Wrapper>
  );
};

export default SearchContainer;
