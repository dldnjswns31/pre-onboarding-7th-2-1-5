import axiosInstance from '../utils/axios';

const apis = {
  getCarList: async (filter, condition) => {
    if (condition === '전체') {
      const { data } = await axiosInstance();
      return data.payload;
    }
    const { data } = await axiosInstance({
      params: {
        [filter]: condition,
      },
    });
    return data.payload;
  },
};

export default apis;
