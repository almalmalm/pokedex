import { useEffect, useState } from 'react';
import Modal from './components/Modal';
import useModalStore from './store';

function App() {
  const modal = useModalStore((state) => state.modal);
  const openModal = useModalStore((state) => state.openModal);
  const [pokemons, setPokemons] = useState(null);
  const [text, setText] = useState('');
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=9999')
      .then((resp) => resp.json())
      .then((pokemons) => setPokemons(pokemons.results));
  }, []);

  return (
    <div className="text-center">
      <h1>Pokedex</h1>
      <p className="text-xs">Created by Lev Kalinin with React</p>
      <p>Search for a Pokemon by name or using its National Pokedex number.</p>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        className="border border-black"
      />
      <button
        className="border border-black"
        onClick={() => {
          openModal();
        }}
      >
        Filter modal
      </button>
      {modal && <Modal />}
      <div className="flex flex-wrap gap-8">
        {pokemons !== null ? (
          pokemons.map((pokemon) => (
            <div className="w-32  h-48 flex flex-col items-center rounded-md bg-green-100 justify-center">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url
                  .replace('https://pokeapi.co/api/v2/pokemon/', '')
                  .replace('/', '')}.png`}
                alt="pokemon"
                width={100}
              />
              <p className="font-bold">{pokemon.name}</p>
              <p>
                {pokemon.url
                  .replace('https://pokeapi.co/api/v2/pokemon/', '')
                  .replace('/', '')}
              </p>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default App;
