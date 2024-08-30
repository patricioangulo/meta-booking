/* eslint-disable no-undef */
import {fireEvent, render, screen} from '@testing-library/react';
import { Navbar } from './components/Navbar';


test("Always true test", ()=>{
  expect(true).toBe.true;
})

describe('Links in the Navbar', () => {
  
  test('has nav',  () => {
    render(<Navbar/>)
    const nav = screen.getByTestId('nav')
    expect(nav).toBeInTheDocument();
  });
  
  test('has Home', () => {
    render(<Navbar/>)
    const home = screen.getByText('Home')
    expect(home).toBeInTheDocument();
  });
  
  test('has About', () => {
    render(<Navbar/>)
    const about = screen.getByText('About')
    expect(about).toBeInTheDocument();
  });
});


