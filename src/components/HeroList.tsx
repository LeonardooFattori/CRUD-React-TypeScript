import { Hero } from '../hooks/useHeroes';
import { Button } from './Button';
import { useState } from 'react';

interface HeroListProps {
  heroes: Hero[];
  loading: boolean;
  error: string | null;
  deleteHero: (id: number) => void;
  updateHero: (id: number, hero: Hero) => void;
}

export const HeroList = ({ heroes, loading, error, deleteHero, updateHero }: HeroListProps) => {
  const [editingHero, setEditingHero] = useState<Hero | null>(null);
  const [editedHero, setEditedHero] = useState<Hero>({
    name: '',
    realName: '',
    strength: 0,
    combat: 0,
  });

  const startEditing = (hero: Hero) => {
    setEditingHero(hero);
    setEditedHero(hero);
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedHero({ ...editedHero, [name]: name === 'name' || name === 'realName' ? value : Number(value) });
  };

  const handleUpdate = () => {
    if (editingHero?.id) {
      updateHero(editingHero.id, editedHero);
      setEditingHero(null);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='list-hero'>
      <h2>Superheroes</h2>
      <ul>
        {heroes.map((hero) => (
          <li key={hero.id}>
            {editingHero?.id === hero.id ? (
              <div>
                <input type="text" name="name" value={editedHero.name} onChange={handleEditChange} />
                <input type="text" name="realName" value={editedHero.realName} onChange={handleEditChange} />
                <input type="number" name="strength" value={editedHero.strength} onChange={handleEditChange} />
                <input type="number" name="combat" value={editedHero.combat} onChange={handleEditChange} /><br></br>
                <Button variant="success" onClick={handleUpdate}>Save</Button>
                <Button variant="danger" onClick={() => setEditingHero(null)}>Cancel</Button>
              </div>
            ) : (
              <>
                <h3>{hero.name}</h3>
                <p>Real Name: {hero.realName}</p>
                <p>Strength: {hero.strength}/100</p>
                <p>Combat: {hero.combat}/100</p>
                <Button variant="update" onClick={() => startEditing(hero)}>Edit</Button>
                <Button variant="danger" onClick={() => deleteHero(hero.id!)}>Delete</Button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
