import { Character } from 'src/api';
import { Button } from '../common';

export interface ItemProps {
  item: Character;
  onClickDelete: () => void;
}

const Item = ({ item, onClickDelete }: ItemProps) => {
  const { aliases, books, name, tvSeries, titles } = item;
  return (
    <div className="border border-1 border-solid rounded m-5">
      <div className="flex gap-10 justify-center items-center relative">
        <div className="flex flex-col w-3/5">
          <div className="">
            <span>name: {name}</span> <span>{aliases.join(' ')}</span> <span>{titles.join(' ')}</span>
          </div>
          <div>
            <span>books: {books.length} </span>{' '}
            <span>tvSeries: {tvSeries.length === 1 && tvSeries[0] === '' ? 0 : tvSeries.length}</span>
          </div>
        </div>
        <div className="min-w-[70px] absolute right-0">
          <Button onClick={onClickDelete}>삭제</Button>
        </div>
      </div>
      <div />
    </div>
  );
};

export default Item;
