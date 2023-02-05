import React from "react";
import ReactPaginate from "react-paginate";

interface props {
  handleClick: any;
  pageCount: number | undefined;
}

const PaginationComponent: React.FC<props> = ({ handleClick, pageCount }) => {
  return (
    <ReactPaginate
      previousLabel={"<"}
      nextLabel={">"}
      breakLabel={"..."}
      pageCount={pageCount === undefined ? 1 : pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      onPageChange={handleClick}
      containerClassName={"pagination justify-content-center"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextClassName={"page-item"}
      nextLinkClassName={"page-link"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      activeClassName={"active"}
    />
  );
};

export default PaginationComponent;
