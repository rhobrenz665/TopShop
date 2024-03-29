import { Pagination } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

interface PaginateProps {
  pages: number;
  page: number;
  isAdmin: boolean;
  keyword?: string;
}

const Paginate: React.FC<PaginateProps> = ({
  pages,
  page,
  isAdmin = false,
  keyword = '',
}) => {
  const pagination = (
    <Pagination>
      {[...Array(pages).keys()].map(x => (
        <LinkContainer
          key={x + 1}
          to={
            !isAdmin
              ? keyword
                ? `/search/${keyword}/page/${x + 1}`
                : `/page/${x + 1}`
              : `/admin/productlist/${x + 1}`
          }
        >
          <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
        </LinkContainer>
      ))}
    </Pagination>
  );
  return <>{pages > 1 && pagination}</>;
};

export default Paginate;
