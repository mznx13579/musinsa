import { Character } from 'src/api';

export interface ItemProps {
  item: Character;
}

const Item = ({ item }: ItemProps) => {
  const { aliases, books, name, tvSeries, titles } = item;
  return (
    <div className="border border-1 border-solid rounded m-5">
      <div>
        <span>name: {name}</span> <span>{aliases.join(' ')}</span> <span>{titles.join(' ')}</span>
      </div>
      <div>
        <span>books: {books.length} </span>{' '}
        <span>tvSeries: {tvSeries.length === 1 && tvSeries[0] === '' ? 0 : tvSeries.length}</span>
      </div>
    </div>
  );
};

export default Item;
