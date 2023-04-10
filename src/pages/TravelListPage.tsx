import { useLoaderData } from 'react-router-dom';
import { travelContent } from 'types';
const TravelListPage = () => {
  const data = useLoaderData() as travelContent[];

  return <>hello</>;
};
export default TravelListPage;
