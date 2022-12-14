import { useEffect, useState } from 'react';
import { useActiveCategory } from '../../../context/CarContext';
import { CAR_CATEGORY, CAR_TYPE } from '../../../utils/carAttribute';
import getKeyByValue from '../../../utils/getKeyByValue';
import CategoryTag from './CategoryTag';

const CategoryFilter = ({ swiper }) => {
  const { activeIndex, changeCategory } = useActiveCategory();
  const [selected, SetSelected] = useState(0);

  const handleOnclick = (e) => {
    SetSelected(e.target.id);
    swiper.slideTo(e.target.id);
  };

  useEffect(() => {
    changeCategory(selected);
  }, [selected]);

  return CAR_CATEGORY.map((category, index) => {
    return (
      <CategoryTag
        key={index}
        id={index}
        text={getKeyByValue(CAR_TYPE, category)}
        name={category}
        onClick={handleOnclick}
        select={index === parseInt(activeIndex)}
      />
    );
  });
};

export default CategoryFilter;
