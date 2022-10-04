import { useCallback, useEffect } from 'react';
import { getCharacters } from 'src/querys';

const Home = () => {
  const fetchCharacters = useCallback(async () => {
    const res = await getCharacters(1, 10);
    console.log(res.data);
  }, []);

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  return <p>Home</p>;
};

export default Home;
