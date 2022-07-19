import React from 'react';
import { screen } from '@testing-library/react';
import About from '../pages/About';
import renderWithRouter from '../renderWithRouter';

test('Teste se a página contém as informações sobre a Pokédex', () => {
  renderWithRouter(<About />);
  const info = screen.getByText(/this application/i);
  expect(info).toBeInTheDocument();
});

test('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
  renderWithRouter(<About />);
  const heading = screen.getByRole('heading', { name: /about pokédex/i, level: 2 });
  expect(heading).toBeInTheDocument();
});

test('Teste se a página contém dois parágrafos com texto sobre a Pokédex', () => {
  renderWithRouter(<About />);
  const paragrafo1 = screen.getByText(/this application simulates a pokédex, a digital/i);
  expect(paragrafo1).toBeInTheDocument();
  const paragrafo2 = screen.getByText(/one can filter pokémons by type, and see more/i);
  expect(paragrafo2).toBeInTheDocument();
});

test('Teste se a página contém a seguinte imagem de uma Pokédex', () => {
  renderWithRouter(<About />);
  const photo = screen.getByRole('img', { alt: /pokékex/i });
  expect(photo).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
});
