import React from 'react';
import { screen } from '@testing-library/react';
import NotFound from '../pages/NotFound';
import renderWithRouter from '../renderWithRouter';

test('Testa se a página contém um h2 com o texto Page requested not found 😭', () => {
  renderWithRouter(<NotFound />);
  const noFind = screen.getByText(/page requested not found/i);
  expect(noFind).toBeInTheDocument();
});

test('Teste se a página mostra a imagem', () => {
  renderWithRouter(<NotFound />);
  const imageNotFound = screen.getByAltText(/pikachu crying because/i);
  expect(imageNotFound).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
});
