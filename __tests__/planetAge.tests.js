import { createHtmlTagObject } from 'html-webpack-plugin';
import Age from './../src/planetAge.js'

describe('Age', () => {
  let age;

  beforeEach(() => {
    age = new Age(37, 80);
  });

  test("should return an age object containing the user's age and life expectency and empty values for ages and remaining expected time on other planets", () => {
    expect(age.ageEarth).toEqual(37);
    expect(age.earthLife).toEqual(80);
  });

  test("should return the user's Mercury age", () => {
    age.mercAge();
    expect(age.ageMerc).toEqual(154);
  });

  // test("should calculate the user's equivalent life expectancy on Mercury, and return the remaining years of the user's life in Mercury years", () => {
  //   age.mercAge();
  //   expect(age.mercLife).toEqual(333);
  //   expect(age.remainMercLife).toEqual(179);
  // });
    

  test("should return the user's Venus age", () => {
    age.venAge();
    expect(age.ageVen).toEqual(59);

  });

  // test("should calculate the user's equivalent life expectancy on Venus, and return the remaining years of the user's life in Venus years", () => {
  //   age.mercAge();
  //   expect(age.mercLife).toEqual(333);
  //   expect(age.remainMercLife).toEqual(179);
  // });

  test("should return the user's Mars age", () => {
    age.marsAge();
    expect(age.ageMars).toEqual(19)
  });

  test("should return the user's Jupiter age", () => {
    age.jupAge();
    expect(age.ageJup).toEqual(3);
  });

});
