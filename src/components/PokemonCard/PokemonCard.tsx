import "./PokemonCardStyle";

interface Props {
  name: string;
}

export function PokemonCard({ name }: Props) {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}
