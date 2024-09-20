export type Movie = {
  title: string;
  watched: boolean;
  parts?: { title: string; watched: boolean }[];
};
