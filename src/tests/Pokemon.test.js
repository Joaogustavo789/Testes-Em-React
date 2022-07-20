import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
import FavoritePokemons from '../pages/FavoritePokemons';
import pokemons from '../data';

test('Teste se é renderizado um card com as informações de determinado pokémon', () => {
  renderWithRouter(<App />);
  const pokName = screen.getAllByText(/pikachu/i);
  expect(pokName[0]).toBeInTheDocument();
  const dataTestIdType = screen.getAllByTestId(/pokemon-type/i);
  expect(dataTestIdType[0].textContent).toBe('Electric');
  const typePok = screen.getAllByText(/electric/i);
  expect(typePok[0]).toBeInTheDocument();
  const averagePok = screen.getAllByText(/average/i);
  expect(averagePok[0]).toBeInTheDocument();
  const imagePok = screen.getByAltText(/pikachu sprite/i);
  expect(imagePok).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
});

test('Testa se redireciona a aplicação para a página de detalhes de pokémon', () => {
  const { history } = renderWithRouter(<App />);
  const pokDetails = screen.getByRole('link', { name: /more details/i });
  expect(pokDetails).toBeInTheDocument();
  userEvent.click(pokDetails);
  const { pathname } = history.location;
  expect(pathname).toBe('/pokemons/25');
});

test('Teste se existe um ícone de estrela nos pokémons favoritados', () => {
  const pokArray = [pokemons[0]];
  renderWithRouter(<FavoritePokemons pokemons={ pokArray } />);
  const pokStar = screen.getByAltText(/pikachu is marked as favorite/i);
  expect(pokStar).toHaveAttribute('src', '/star-icon.svg');
});
