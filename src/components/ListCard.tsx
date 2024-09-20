import { List } from "../types/list";

interface ListCardProps {
  data: List;
}

const ListCard = ({ data }: ListCardProps) => {
  return (
    <div className="border-gray-800 bg-gray-900 flex h-[350px] w-[300px] flex-col gap-5 rounded-xl border-2 p-4">
      <h2 className="border-spacing-2 border-b-2 border-primary font-heading text-2xl capitalize">
        {data.name}
      </h2>
      <ul className="overflow-scroll">
        {data.movies.map((movie) => (
          <li className="text-lg">
            <h3
              className={`${movie.watched ? "text-primary line-through opacity-50" : ""} font-bold capitalize`}
            >
              {movie.title}
            </h3>
            {movie.parts != null ? (
              <ul className="translate-x-4">
                {movie.parts?.map((part) => (
                  <li
                    className={`${part.watched ? "text-primary line-through opacity-50" : ""} capitalize`}
                  >
                    {part.title}
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListCard;
