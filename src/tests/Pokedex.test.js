import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('Testa se a página contém um heading h2 com o texto Encountered pokémons', () => {
  renderWithRouter(<App />);
  const h2Text = screen.getByRole('heading', { name: /encountered pokémons/i, level: 2 });
  expect(h2Text).toBeInTheDocument();
});

test('Testa se mostra o próximo pokémon da lista quando o botão for clicado', () => {
  renderWithRouter(<App />);
  const button = screen.getByText(/próximo pokémon/i);
  expect(button).toBeInTheDocument();
  screen.logTestingPlaygroundURL();
  expect(button.type).toBe('button');
});

test('Teste se é mostrado apenas um pokémon por vez', () => {
  renderWithRouter(<App />);
  const namePok = screen.getAllByText(/pikachu/i);
  expect(namePok).toHaveLength(1);
});

test('Teste se a Pokédex tem os botões de filtro', () => {
  renderWithRouter(<App />);
  const magicNumber = 7;
  const dataTestId = screen.getAllByTestId(/pokemon-type-button/i);
  expect(dataTestId).toHaveLength(magicNumber);
  const typePok = screen.getAllByText(/electric/i);
  expect(typePok).toBeDefined();
  const typePok2 = screen.getAllByText(/fire/i);
  expect(typePok2).toBeDefined();
  const typePok3 = screen.getAllByText(/bug/i);
  expect(typePok3).toBeDefined();
  const typePok4 = screen.getAllByText(/poison/i);
  expect(typePok4).toBeDefined();
  const typePok5 = screen.getAllByText(/psychic/i);
  expect(typePok5).toBeDefined();
  const typePok6 = screen.getAllByText(/normal/i);
  expect(typePok6).toBeDefined();
  const typePok7 = screen.getAllByText('Dragon');
  expect(typePok7).toBeDefined();
});

test('Teste se a Pokédex contém um botão para resetar o filtro', () => {
  renderWithRouter(<App />);
  const btnAll = screen.getByText(/all/i);
  userEvent.click(btnAll);
  expect(btnAll).toBeInTheDocument();
  expect(btnAll.type).toBe('button');
  const namePok = screen.getByText(/pikachu/i);
  expect(namePok).toBeInTheDocument();
});
