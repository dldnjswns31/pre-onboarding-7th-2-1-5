import { useState, useEffect } from 'react';
import { useActiveCategory, useCar, useSetCar } from '../../../context/CarContext';
import { CAR_TYPE, CAR_FUEL_TYPE, CAR_CATEGORY } from '../../../utils/carAttribute';
import getKeyByValue from '../../../utils/getKeyByValue';
import comma from '../../../utils/comma';
import apis from '../../../apis/apis';
import Guide from '../../common/Guide';
import CardItem from './CardItem';
import { Link } from 'react-router-dom';

const CardList = ({ category }) => {
  const [isLoading, setIsLoading] = useState(true);

  const carList = useCar();
  const { activeIndex } = useActiveCategory();
  const changeCarList = useSetCar();

  useEffect(() => {
    if (category === CAR_CATEGORY[activeIndex]) {
      setIsLoading(true);
      (async () => {
        const data = await apis.getCarList('segment', CAR_CATEGORY[activeIndex]);
        changeCarList(data);
        setIsLoading(false);
      })();
    }
  }, [activeIndex]);

  return isLoading ? (
    <Guide text="불러오는 중" />
  ) : carList.length > 0 ? (
    carList.map((car) => {
      return (
        <li className="cardList" key={car.id}>
          <Link to={`/detail/${car.id}`}>
            <CardItem
              brand={car.attribute.brand}
              name={car.attribute.name}
              segment={getKeyByValue(CAR_TYPE, car.attribute.segment)}
              imageUrl={car.attribute.imageUrl}
              fuelType={getKeyByValue(CAR_FUEL_TYPE, car.attribute.fuelType)}
              amount={comma(car.amount)}
              createdAt={car.createdAt}
            />
          </Link>
        </li>
      );
    })
  ) : (
    <Guide text="차량이 없습니다." />
  );
};

export default CardList;
