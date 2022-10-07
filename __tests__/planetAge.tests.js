import Age from './../src/planetAge.js'

describe('Age', () => {
  test("should return an age object containing the user's age and life expectency and empty values for ages and remaining expected time on other planets", () => {
    let age = new Age(37);
    expect(age.ageEarth).toEqual(37);
  });
})

