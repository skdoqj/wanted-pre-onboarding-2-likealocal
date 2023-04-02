import client from 'api/client';

export const getTravelListApi = async () => {
  return await client.get(`/data/mock_data.json`);
};
