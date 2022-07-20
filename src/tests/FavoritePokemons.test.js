import React from 'react';
import { screen } from '@testing-library/react';
import FavoritePokemons from '../pages/FavoritePokemons';
import renderWithRouter from '../renderWithRouter';

test('Testa se mostra No favorite pokemon found, caso não tenha favoritos', () => {
  renderWithRouter(<FavoritePokemons />);
  const notFavorite = screen.getByText(/no favorite pokemon found/i);
  expect(notFavorite).toBeInTheDocument();
});

test('Testa se são exibidos todos os cards de pokémons favoritados', () => {
  const arrayPok = [{ id: 25,
    name: 'Pikachu',
    type: 'Electric',
    averageWeight: {
      value: '6.0',
      measurementUnit: 'kg',
    },
    image: 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png',
    moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)',
    foundAt: [
      {
        location: 'Kanto Viridian Forest',
        map: 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png',
      },
      {
        location: 'Kanto Power Plant',
        map: 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png',
      },
    ],
  }];

  renderWithRouter(<FavoritePokemons pokemons={ arrayPok } />);

  const namePok = screen.getByText(/pikachu/i);
  expect(namePok).toBeInTheDocument();
  const powerPok = screen.getByText(/electric/i);
  expect(powerPok).toBeInTheDocument();
  const averagePok = screen.getByText(/average/i);
  expect(averagePok).toBeInTheDocument();
  const detailsPok = screen.getByRole('link', { name: /more details/i });
  expect(detailsPok).toBeInTheDocument();
  const imagePok = screen.getByAltText(/pikachu sprite/i);
  expect(imagePok).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  const starPok = screen.getByAltText(/pikachu is marked as favorite/i);
  expect(starPok).toHaveAttribute('src', '/star-icon.svg');
});
