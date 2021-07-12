import React from 'react';
import { render, screen } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom';

import App from './App';

describe('Componente principal', () => {
  describe('Quando eu abro o app', () => {
    test('As movimentações são exibidas?', () => {
      render(<App />);

      expect(screen.getByText('Movimentações')).toBeInTheDocument();
    })
    test('O saldo é exibido?', () => {
      render(<App />);

      expect(screen.getByText('Saldo')).toBeInTheDocument();
    })
    test('O botão nova movimentação é exibido?', () => {
      render(<App />);

      expect(screen.getByText('Nova')).toBeInTheDocument();
    })
  })
})
