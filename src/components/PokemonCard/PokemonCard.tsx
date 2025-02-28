import {Container} from "./PokemonCardStyle";

interface Props {
  name: string;
}

export function PokemonCard({ name }: Props) {
  return (
    <Container>
      <h1>{name}</h1>
    </Container>
  );
}
