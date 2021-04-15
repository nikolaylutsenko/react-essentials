import { render, screen } from '@testing-library/react';
import {timesTwo} from "./App";
import App from './App';

test("Multiplies by two", ()=>{
  expect(timesTwo(4)).toBe(8);
})
