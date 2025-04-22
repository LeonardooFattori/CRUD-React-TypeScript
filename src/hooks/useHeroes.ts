import { useState, useEffect } from 'react';
import api from '../services/api';

export interface Hero {
  id?: number;
  name: string;
  realName: string;
  strength: number;
  combat: number;
}

export const useHeroes = () => {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchHeroes = async () => {
    console.log("teste")
    try {
      const response = await api.get('/heroes');
      console.log("dados: ",response.data)
      setHeroes(response.data);
    } catch (err) {
      setError('Failed to fetch heroes');
      console.error("requisião",err)
    } finally {
      setLoading(false);
    }
  };

  const createHero = async (hero: Hero) => {
    try {
      const response = await api.post('/heroes', hero);
      setHeroes((prevHeroes) => [...prevHeroes, response.data]);
    } catch (err) {
      setError('Failed to create hero');
    }
  };  

  const updateHero = async (id: number, hero: Hero) => {
    try {
      await api.put(`/heroes/${id}`, hero);
      await fetchHeroes();
    } catch (err) {
      setError('Failed to update hero');
    }
  };

  const deleteHero = async (id: number) => {
    try {
      await api.delete(`/heroes/${id}`);
      await fetchHeroes();
    } catch (err) {
      setError('Failed to delete hero');
    }
  };

  useEffect(() => {
    fetchHeroes();
  }, []);

  return { heroes, loading, error, createHero, updateHero, deleteHero };
};