import { Character, characterApi } from 'src/api';

export const getCharacters = (page: number, pageSize: number) => {
  return characterApi.get<Character[]>(`?page=${page}&pageSize=${pageSize}`);
};
