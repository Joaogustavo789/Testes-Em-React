import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

test('Testa se o topo da aplicação contém um conjunto fixo de links de navegação', () => {
  renderWithRouter(<App />);
  const linkHome = screen.getByText(/home/i);
  expect(linkHome).toBeInTheDocument();
  const linkAbout = screen.getByText(/about/i);
  expect(linkAbout).toBeInTheDocument();
  const linkFavPok = screen.getByText(/favorite pokémons/i);
  expect(linkFavPok).toBeInTheDocument();
});

test('Testa se vai para a pagina inicial, na URL / ao clicar no link Home', () => {
  const { history } = renderWithRouter(<App />);
  const homeLink = screen.getByRole('link', { name: /home/i });
  expect(homeLink).toBeInTheDocument();
  userEvent.click(homeLink);
  const { pathname } = history.location;
  expect(pathname).toBe('/');
});

test('Testa se vai para a página de About, na URL /about ao clicar no link About', () => {
  const { history } = renderWithRouter(<App />);
  const aboutLink = screen.getByRole('link', { name: /about/i });
  expect(aboutLink).toBeInTheDocument();
  userEvent.click(aboutLink);
  const { pathname } = history.location;
  expect(pathname).toBe('/about');
});

test('Testa se vai para a página de Pokémons Favoritados, na URL /favorites', () => {
  const { history } = renderWithRouter(<App />);
  const favoritesLink = screen.getByRole('link', { name: /favorite pokémons/i });
  expect(favoritesLink).toBeInTheDocument();
  userEvent.click(favoritesLink);
  const { pathname } = history.location;
  expect(pathname).toBe('/favorites');
});

test('Testa se vai para a página Not Found ao entrar em uma URL diferente', () => {
  const { history } = renderWithRouter(<App />);
  history.push('pagina não encontrada');
  const notFound = screen.getByText('Page requested not found');
  expect(notFound).toBeInTheDocument();
});
