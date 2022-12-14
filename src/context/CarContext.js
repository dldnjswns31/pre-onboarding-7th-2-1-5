import { createContext, useContext, useState } from 'react';

const CarContext = createContext(null);
const SetCarContext = createContext(null);
const ActiveCategoryContext = createContext(null);

export const useCar = () => useContext(CarContext);
export const useSetCar = () => useContext(SetCarContext);
export const useActiveCategory = () => useContext(ActiveCategoryContext);

export const CarProvider = ({ children }) => {
  const [carList, setCarList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const changeCarList = (data) => {
    setCarList(data);
  };
  const changeCategory = (activeIdx) => {
    setActiveIndex(activeIdx);
  };

  return (
    <CarContext.Provider value={carList}>
      <SetCarContext.Provider value={changeCarList}>
        <ActiveCategoryContext.Provider value={{ changeCategory, activeIndex }}>
          {children}
        </ActiveCategoryContext.Provider>
      </SetCarContext.Provider>
    </CarContext.Provider>
  );
};
