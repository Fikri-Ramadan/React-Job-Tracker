/* eslint-disable react/prop-types */
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { Link, Form } from 'react-router-dom'; 
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import Wrapper from '../assets/wrappers/Job';

day.extend(advancedFormat);

const Job = ({
  _id,
  position,
  company,
  jobLocation,
  jobStatus,
  jobType,
  createdAt,
}) => {
  const date = day(createdAt).format('MMM Do, YYYY');
  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
          <span className="position">{position}</span>
          <span className="company">{company}</span>
        </div>
      </header>
      <main className="content">
        <div className="content-center">
          <span>
            <FaLocationArrow />
            <span className="content-info">{jobLocation}</span>
          </span>
          <span>
            <FaCalendarAlt />
            <span className="content-info">{date}</span>
          </span>
          <span>
            <FaBriefcase />
            <span className="content-info">{jobType}</span>
          </span>
          <span className={`status ${jobStatus}`}>{jobStatus}</span>
        </div>
        <div className="action">
          <Link to={`../edit-job/${_id}`} className='btn btn-edit'>Edit</Link>
          <Form method='POST' action={`../delete-job/${_id}`}>
            <button type="submit" className='btn btn-delete'>Delete</button>
          </Form>
        </div>
      </main>
    </Wrapper>
  );
};

export default Job;
