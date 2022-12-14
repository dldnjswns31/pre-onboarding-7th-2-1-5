import styled from 'styled-components';
import color from '../../../styles/color';
import CategoryFilter from './CategoryFilter';

const Category = ({ swiper }) => {
  return (
    <StCategory>
      <CategoryFilter swiper={swiper} />
    </StCategory>
  );
};

export default Category;

const StCategory = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;

  padding: 5px 15px;

  border-bottom: 1.5px ${color.black} solid;
`;
