import { getTravelListApi } from 'api/travelApi';

const mainLoader = async () => {
  const { data } = await getTravelListApi();
  return data;
};
export default mainLoader;
