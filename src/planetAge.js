export default class Age {
  constructor(ageEarth, earthLife) {
    this.ageEarth = ageEarth;
    this.earthLife = earthLife;
    this.ageMerc = 0;
    this.ageVen = 0;
    this.ageMars = 0;
    this.ageJup = 0;
  };

  mercAge() {
    this.ageMerc = parseInt(this.ageEarth/.24)
  };

  venAge() {
    this.ageVen = parseInt(this.ageEarth/.62)    
  };

  marsAge() {
   this.ageMars = parseInt(this.ageEarth/1.88)
  };

  jupAge() {
  };
}
