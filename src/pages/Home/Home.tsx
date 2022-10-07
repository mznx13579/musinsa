import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Character } from 'src/api';
import useScroll from 'src/common/useScroll';
import { Item } from 'src/components';
import { Button } from 'src/components/common/Button';
import { Checkbox } from 'src/components/common/Checkbox';
import { getCharacters } from 'src/querys';

const Home = () => {
  const [characterList, setCharacterList] = useState<Character[]>([]);
  const { scrollDirection } = useScroll('throttle', 100);

  const [page, setPage] = useState<number>(0);
  const [searchParams] = useSearchParams();

  const [check1, setCheck1] = useState<boolean>(false);
  const [check2, setCheck2] = useState<boolean>(false);
  const [check3, setCheck3] = useState<boolean>(false);

  const [deletedList, setDeletedList] = useState<number[]>([]);

  const fetchCharacters = useCallback(
    async (page: number, size: number) => {
      const res = await getCharacters(page, size);
      setCharacterList([...characterList, ...res.data]);
    },
    [characterList],
  );

  useEffect(() => {
    setPage(Number(searchParams.get('page') || 1));
  }, [searchParams]);

  useEffect(() => {
    if (page !== 0) fetchCharacters(page, 10);
  }, [page]);

  const handleCheck = (index: number) => {
    if (index === 1) setCheck1(!check1);
    if (index === 2) setCheck2(!check2);
    if (index === 3) setCheck3(!check3);
  };

  const filteredList = useMemo(() => {
    return characterList.reduce<Character[]>((acc, cur) => {
      const died = check1 ? cur.died === '' : true;
      const female = check2 ? cur.gender === 'Female' : true;
      const emptyTvSeries = check3 ? cur.tvSeries.length === 1 && cur.tvSeries[0] === '' : true;

      if (died && female && emptyTvSeries) acc.push(cur);
      return acc;
    }, []);
  }, [characterList, check1, check2, check3]);

  const handleReset = () => {
    setCheck1(false);
    setCheck2(false);
    setCheck3(false);
    setDeletedList([]);
  };

  useEffect(() => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 300 && scrollDirection === 'up')
      setPage((prev) => prev + 1);
  }, [scrollDirection]);

  const handleDelete = useCallback(
    (idx: number) => {
      setDeletedList([...deletedList, idx]);
    },
    [deletedList],
  );

  return (
    <div>
      <header className="border border-1 border-solid">header</header>

      <nav className="flex justify-center py-4 items-center">
        <Checkbox isChecked={check1} onClick={() => handleCheck(1)}>
          생존인물만
        </Checkbox>
        <Checkbox isChecked={check2} onClick={() => handleCheck(2)}>
          여자
        </Checkbox>
        <Checkbox isChecked={check3} onClick={() => handleCheck(3)}>
          tvSeries 없음
        </Checkbox>
        <Button onClick={handleReset}>reset</Button>
      </nav>

      <section>
        {filteredList.map((value, index) => {
          if (!deletedList.includes(index))
            return <Item key={`item-${index}`} item={value} onClickDelete={() => handleDelete(index)} />;
          return null;
        })}
      </section>
    </div>
  );
};

export default Home;
