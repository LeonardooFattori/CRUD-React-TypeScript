import { useState } from 'react';
import { Hero } from '../hooks/useHeroes';
import { Button } from './Button';

interface HeroFormProps {
  onSubmit: (hero: Hero) => void;
}

export const HeroForm = ({ onSubmit }: HeroFormProps) => {
  const [hero, setHero] = useState<Hero>({
    name: '',
    realName: '',
    strength: 0,
    combat: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setHero({ ...hero, [name]: name === 'name' || name === 'realName' ? value : Number(value) });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(hero);
    setHero({ name: '', realName: '', strength: 0, combat: 0 });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-group'>
        <p>Hero Name: </p><input type="text" name="name" placeholder="Hero Name" value={hero.name} onChange={handleChange} required />
      </div>
      <div className='form-group'>
        <p>Real name: </p><input type="text" name="realName" placeholder="Real Name" value={hero.realName} onChange={handleChange} required />
      </div>
      <div className='form-group'>
        <p>Strenght (0-100): </p><input type="number" name="strength" placeholder="Strength (0-100)" min="0" max="100" value={hero.strength} onChange={handleChange} required />
      </div>
      <div className='form-group'>
        <p>Combat (0-100) : </p><input type="number" name="combat" placeholder="Combat (0-100)" min="0" max="100" value={hero.combat} onChange={handleChange} required />
      </div>
      
      <Button variant="success" type="submit">Add Hero</Button>
    </form>
  );
};