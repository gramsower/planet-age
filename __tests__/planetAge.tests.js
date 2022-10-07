import { createHtmlTagObject } from 'html-webpack-plugin';
import Age from './../src/planetAge.js'

describe('Age', () => {
  let age = new Age(37, 80);

  test("should return an age object containing the user's age and life expectency and empty values for ages and remaining expected time on other planets", () => {
    expect(age.ageEarth).toEqual(37);
    expect(age.earthLife).toEqual(80);
  });

  test("should return the user's Mercury age", () => {
    age.mercAge();
    expect(age.ageMerc).toEqual(154);
  });

  test("should return the user's Venus age", () => {
    age.venAge();
    expect(age.ageVen).toEqual(59)
  });

  test("should return the user's Mars age", () => {
    age.marsAge();
    expect(age.ageMars).toEqual(19)
  });

  test("should return the user's Jupiterage", () => {
    age.jupAge();
    expect(age.ageJup).toEqual(1);
  });

});
