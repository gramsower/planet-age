export default class Age {
  constructor(ageEarth, earthLife) {
    this.ageEarth = ageEarth;
    this.earthLife = earthLife;

    this.ageMerc = 0;
    this.mercLife = 0;
    this.remainMercLife = 0;

    this.ageVen = 0;
    this.venLife = 0;
    this.remainVenLife = 0;

    this.ageMars = 0;
    this.marsLife = 0;
    this.remainMarsLife = 0;

    this.ageJup = 0;
    this.jupLife = 0;
    this.remainJupLife = 0;
  };

  mercAge() {
    this.ageMerc = parseInt(this.ageEarth/.24);
    this.mercLife = parseInt(this.earthLife/.24);
    this.remainMercLife = parseInt(this.mercLife - this.ageMerc);
  };

  venAge() {
    this.ageVen = parseInt(this.ageEarth/.62);
  };

  marsAge() {
   this.ageMars = parseInt(this.ageEarth/1.88);
  };

  jupAge() {
    this.ageJup = parseInt(this.ageEarth/11.86);
  };


}
