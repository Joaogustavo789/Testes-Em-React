import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

const route = '/pokemons/25';
test('Testa se as informações detalhadas do pokémon selecionado mostram na tela', () => {
  const { history } = renderWithRouter(<App />);
  const moreDetails = screen.getByText(/more details/i);
  expect(moreDetails).toBeInTheDocument();
  userEvent.click(moreDetails);
  const { pathname } = history.location;
  expect(pathname).toBe(route);
  const nameDetails = screen.getByText(/pikachu details/i);
  expect(nameDetails).toBeInTheDocument();
  const h2Summary = screen.getByRole('heading', { name: /summary/i, level: 2 });
  expect(h2Summary).toBeInTheDocument();
  const infoPok = screen.getByText(/this intelligent pokémon roasts/i);
  expect(infoPok).toBeInTheDocument();
});

test('Testa se tem na página uma seção com os mapas das localizações do pokémon', () => {
  const { history } = renderWithRouter(<App />);
  const moreDetails2 = screen.getByText(/more details/i);
  expect(moreDetails2).toBeInTheDocument();
  userEvent.click(moreDetails2);
  const { pathname } = history.location;
  expect(pathname).toBe(route);
  const h2Game = screen.getByRole('heading', { name: /game locations of pikachu/i });
  expect(h2Game).toBeInTheDocument();
  const location1 = screen.getByText(/kanto viridian forest/i);
  expect(location1).toBeInTheDocument();
  const imageLocal = screen.getAllByAltText(/pikachu location/i);
  expect(imageLocal[0]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
  const location2 = screen.getByText(/kanto power plant/i);
  expect(location2).toBeInTheDocument();
  expect(imageLocal[1]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
});

test('Teste se o usuário pode favoritar um pokémon através da página de detalhes', () => {
  const { history } = renderWithRouter(<App />);
  const moreDetails2 = screen.getByText(/more details/i);
  expect(moreDetails2).toBeInTheDocument();
  userEvent.click(moreDetails2);
  const { pathname } = history.location;
  expect(pathname).toBe(route);
  const checkName = screen.getByLabelText(/pokémon favoritado/i);
  expect(checkName).toBeInTheDocument();
});
