import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/navBar';

describe('test navBar component', () => {
    it('should render correct elements', () => {
        const { getByTestId } = render(
            <BrowserRouter>
              <Navbar />
            </BrowserRouter>,
          );
          const bar = getByTestId('navi');
          expect(bar).toBeInTheDocument;

    });

    it('should render correct snapshot', () => {
        const tree = renderer.create(
            <BrowserRouter>
              <Navbar />
            </BrowserRouter>,
          ).toJSON;
         
          expect(tree).toMatchSnapshot();

    });
});