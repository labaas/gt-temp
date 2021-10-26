import axios from 'axios';

const url = 'https://ds-mews-connector.herokuapp.com/api/graphql';

let query = `
  query GetMewsData(
    $startUtc: String!, 
    $endUtc: String!, 
    $timeFilter: String!, 
    $states: String!, 
    $currency: String!, 
    $accessToken: String!
    $name: String!
  ) {
    getMewsData(
      startUtc: $startUtc, 
      endUtc: $endUtc, 
      timeFilter: $timeFilter, 
      states: $states, 
      currency: $currency, 
      accessToken: $accessToken,
      name: $name,
    ) {
      number
      last_name
    }
  }
`;

const handler = (req, res) => {

  const submit = async () => {
    try {
      const { data } = await axios.post(url, {
        params: {
          startUtc: '2021-09-01',
          endUtc: '2021-09-03',
          timeFilter: 'Created',
          states: 'Canceled',
          currency: 'EUR',
          accessToken: 'CC150C355D6A4048A220AD20015483AB-B6D09C0C84B09538077CB8FFBB907B4',
          name: 'The Highlander Hotel',
        },
        query,
      });
  
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  submit();

  res.status(200).json({ message: 'OK' });
};

export default handler;