import axios from 'axios';

export const fetchCards = createAsyncThunk('cards/fetchCards', async () => {
  const response = await axios.get('https://pokeapi.co/api//v3/covid-19/countries?limit=500');
  return response.data.results;
});