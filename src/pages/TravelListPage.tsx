import { Box, Button, Collapse, Container, Grid, Text, useDisclosure } from '@chakra-ui/react';
import { useLoaderData } from 'react-router-dom';
import { travelContent } from 'types';
const TravelListPage = () => {
  const data = useLoaderData() as travelContent[];

  return (
    <>
      <Container></Container>
      <Box as='section' mt='5'></Box>
    </>
  );
};
export default TravelListPage;
