import { Hero } from '../hooks/useHeroes';
import { Button } from './Button';

interface HeroListProps {
  heroes: Hero[];
  loading: boolean;
  error: string | null;
  deleteHero: (id: number) => void;
}

export const HeroList = ({ heroes, loading, error, deleteHero }: HeroListProps) => {
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='list-hero'>
      <h2>Superheroes</h2>
      <ul>
        {heroes.map((hero) => (
          <li key={hero.id}>
            <h3>{hero.name}</h3>
            <p>Real Name: {hero.realName}</p>
            <p>Strength: {hero.strength}/100</p>
            <p>Combat: {hero.combat}/100</p>
            <Button variant="danger" onClick={() => deleteHero(hero.id!)}>Delete</Button>
          </li>
        ))}
      </ul>
    </div>
  );
};