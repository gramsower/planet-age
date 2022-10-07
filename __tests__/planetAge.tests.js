import { createHtmlTagObject } from 'html-webpack-plugin';
import Age from './../src/planetAge.js'

describe('Age', () => {
  test("should return an age object containing the user's age and life expectency and empty values for ages and remaining expected time on other planets", () => {
    let age = new Age(37, 80);
    expect(age.ageEarth).toEqual(37);
    expect(age.earthLife).toEqual(80);
  });

  test("should return the user's age calculated according to Mercury's year length", () => {
    let age = new Age(37, 80);
    age.mercAge();
    expect(age.ageMerc).toEqual(154);
    });
  });
