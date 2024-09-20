import { Link } from "wouter";
import ListCard from "../components/ListCard";
import { List } from "../types/list";

const lists: List[] = [
  {
    name: "Classics",
    movies: [
      {
        title: "jak wytresować smoka",
        watched: false,
        parts: [
          { title: "1", watched: true },
          { title: "2", watched: false },
          { title: "3", watched: false },
        ],
      },
      {
        title: "Harry Potter",
        watched: false,
        parts: [
          { title: "Kamień filozoficzny", watched: false },
          { title: "Komnata tajemnic", watched: false },
          { title: "Czara Ognia", watched: false },
          { title: "Zakon Feniksa", watched: false },
          { title: "Insygnia Śmierci", watched: false },
        ],
      },
      { title: "Gravity Falls", watched: false },
      { title: "Viana", watched: true },
    ],
  },
  {
    name: "upcoming",
    movies: [
      {
        title: "jak wytresować smoka",
        watched: false,
        parts: [
          { title: "1", watched: true },
          { title: "2", watched: false },
          { title: "3", watched: false },
        ],
      },
      {
        title: "Harry Potter",
        watched: false,
        parts: [
          { title: "Kamień filozoficzny", watched: false },
          { title: "Komnata tajemnic", watched: false },
          { title: "Czara Ognia", watched: false },
          { title: "Zakon Feniksa", watched: false },
          { title: "Insygnia Śmierci", watched: false },
        ],
      },
      { title: "Gravity Falls", watched: false },
      { title: "Viana", watched: true },
    ],
  },
  {
    name: "movie night",
    movies: [
      {
        title: "jak wytresować smoka",
        watched: false,
        parts: [
          { title: "1", watched: true },
          { title: "2", watched: false },
          { title: "3", watched: false },
        ],
      },
      {
        title: "Harry Potter",
        watched: false,
        parts: [
          { title: "Kamień filozoficzny", watched: false },
          { title: "Komnata tajemnic", watched: false },
          { title: "Czara Ognia", watched: false },
          { title: "Zakon Feniksa", watched: false },
          { title: "Insygnia Śmierci", watched: false },
        ],
      },
      { title: "Gravity Falls", watched: false },
      { title: "Viana", watched: true },
    ],
  },
];

const Index = () => {
  return (
    <section className="flex flex-col gap-[80px]">
      <h1 className="font-heading text-3xl font-bold">Watchlists:</h1>

      <div className="flex flex-wrap items-center gap-5">
        {lists.map((list, i) => (
          <Link href={`/list/${i}`}>
            <ListCard data={list} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Index;
