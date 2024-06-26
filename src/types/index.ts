export type CreatePokemonDto = {
  id: number;
  name: string;
  type: string;
  size?: string;
  gender?: string;
  img?: string;
};

export type PokemonType = {
  name: string;
  url: string;
};

export interface UseAxiosResult<T> {
  data: T | null;
  error: string | null;
  loading: boolean;
}
