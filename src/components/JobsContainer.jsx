import Wrapper from '../assets/wrappers/JobsContainer';
import Job from './Job';
import { useAllJobsContext } from '../pages/AllJobs';
import PageBtnContainer from './PageBtnContainer';

const JobsContainer = () => {
  const { data } = useAllJobsContext();
  const { totalJobs, totalPage, jobs } = data;

  if (totalJobs === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>{totalJobs} Jobs Found</h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />
        })}
      </div>
      {totalPage > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};

export default JobsContainer;
