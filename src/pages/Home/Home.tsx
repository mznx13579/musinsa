import { useCallback, useEffect, useState } from 'react';
import { Button } from 'src/components/common/Button';
import { Checkbox } from 'src/components/common/Checkbox';
import { getCharacters } from 'src/querys';

const Home = () => {
  const fetchCharacters = useCallback(async () => {
    const res = await getCharacters(1, 10);
    console.log(res.data);
  }, []);

  useEffect(() => {
    // fetchCharacters();
  }, [fetchCharacters]);

  const [check1, setCheck1] = useState<boolean>(false);
  const [check2, setCheck2] = useState<boolean>(false);
  const [check3, setCheck3] = useState<boolean>(false);
  const handleCheck = (index: number) => {
    if (index === 1) setCheck1(!check1);
    if (index === 2) setCheck2(!check2);
    if (index === 3) setCheck3(!check3);
  };

  return (
    <div>
      <header className="border border-1 border-solid">header</header>

      <nav className="py-4">
        <Checkbox isChecked={check1} onClick={() => handleCheck(1)}>
          c1
        </Checkbox>
        <Checkbox isChecked={check2} onClick={() => handleCheck(2)}>
          c2
        </Checkbox>
        <Checkbox isChecked={check3} onClick={() => handleCheck(3)}>
          c3
        </Checkbox>
        <Button>reset</Button>
      </nav>
    </div>
  );
};

export default Home;
