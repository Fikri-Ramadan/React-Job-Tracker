import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import { useNavigate, useLocation } from 'react-router-dom';
import Wrapper from '../assets/wrappers/PageBtnContainer';
import { useAllJobsContext } from '../pages/AllJobs';

const PageBtnContainer = () => {
  const {
    data: { currentPage, totalPage },
  } = useAllJobsContext();
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  const handlePageChange = (page) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set('page', page);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const handlePrevChange = () => {
    let prevPage = currentPage - 1;
    if (prevPage < 1) prevPage = totalPage;
    handlePageChange(prevPage);
  };

  const handleNextChange = () => {
    let nextPage = currentPage + 1;
    if (nextPage > totalPage) nextPage = 1;
    handlePageChange(nextPage);
  };

  const addPageButton = ({ pageNumber, isActiveClass }) => {
    return (
      <button
        className={`btn btn-page ${isActiveClass && 'active'}`}
        key={pageNumber}
        onClick={() => handlePageChange(pageNumber)}
      >
        {pageNumber}
      </button>
    );
  };

  const renderPageButton = () => {
    const pageButtons = [];

    pageButtons.push(
      addPageButton({
        pageNumber: 1,
        isActiveClass: currentPage === 1,
      })
    );

    if (currentPage > 3) {
      pageButtons.push(
        <button className="btn btn-page" key={'dot-1'}>
          <span className="dots">...</span>
        </button>
      );
    }

    if (currentPage !== 1 && currentPage !== 2) {
      pageButtons.push(
        addPageButton({
          pageNumber: currentPage - 1,
          isActiveClass: false,
        })
      );
    }

    if (currentPage !== 1 && currentPage !== totalPage) {
      pageButtons.push(
        addPageButton({
          pageNumber: currentPage,
          isActiveClass: true,
        })
      );
    }

    if (currentPage !== totalPage && currentPage !== totalPage - 1) {
      pageButtons.push(
        addPageButton({
          pageNumber: currentPage + 1,
          isActiveClass: false,
        })
      );
    }

    if (currentPage < totalPage - 2) {
      pageButtons.push(
        <button className="btn btn-page" key={'dot+1'}>
          <span className="dots">...</span>
        </button>
      );
    }

    pageButtons.push(
      addPageButton({
        pageNumber: totalPage,
        isActiveClass: currentPage === totalPage,
      })
    );

    return pageButtons;
  };

  return (
    <Wrapper>
      <button className="btn prev-btn" onClick={handlePrevChange}>
        <HiChevronDoubleLeft /> Prev
      </button>
      <div className="btn-container">{renderPageButton()}</div>
      <button className="btn next-btn" onClick={handleNextChange}>
        Next <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
};

export default PageBtnContainer;
