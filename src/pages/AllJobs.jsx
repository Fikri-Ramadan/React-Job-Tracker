import { useContext, createContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import { JobsContainer, SearchContainer } from '../components';

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  try {
    const { data } = await customFetch.get('jobs', { params });
    return { data, searchValues: {...params} };
  } catch (error) {
    return error;
  }
};

const AllJobsContext = createContext();

const AllJobs = () => {
  const { data, searchValues } = useLoaderData();
  return (
    <AllJobsContext.Provider value={{ data, searchValues }}>
      <SearchContainer />
      <JobsContainer />
    </AllJobsContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAllJobsContext = () => useContext(AllJobsContext);

export default AllJobs;
