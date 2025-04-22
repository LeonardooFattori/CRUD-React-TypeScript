import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HeroList } from "./components/HeroList";
import { HeroForm } from "./components/HeroForm";
import { useHeroes } from "./hooks/useHeroes";
import "../src/style.css";

export default function App() {
  const { heroes, createHero, deleteHero, loading, error } = useHeroes();

  return (
    <>
      <Header />
      <div className="app">
        <HeroForm onSubmit={createHero} />
        <HeroList
          heroes={heroes}
          loading={loading}
          error={error}
          deleteHero={deleteHero}
        />
      </div>
      <Footer />
    </>
  );
}
