import axios from 'axios';

export const BASE_URL = 'https://spotify23.p.rapidapi.com';

const options = {
  params: {
  },
  headers: {
    'X-RapidAPI-Key': '9259390fb3mshc228a5afa3d4716p12d740jsn53c3049ef096',
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
  },
};

export const fetchFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};