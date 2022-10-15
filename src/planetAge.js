export default class Age {
  constructor(ageEarth, earthLife) {
    this.ageEarth = ageEarth;
    this.earthLife = earthLife;

    this.ageMerc = 0;
    this.mercLife = 0;
    this.remainMercLife = 0;
    this.overMercLife = 0;


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
    //if (this.ageMarc >= this.mercLife) {
    //  this.overMercLife = Math.abs(this.mercLife - this.ageMerc);
    //} else {
    //  this.remainMercLife = (this.mercLife - this.ageMerc)
   // };
  };

  venAge() {
    this.ageVen = parseInt(this.ageEarth/.62);
    this.venLife = parseInt(this.earthLife/.62);
    this.remainVenLife = Math.abs(this.venLife - this.ageVen);
  };

  marsAge() {
   this.ageMars = parseInt(this.ageEarth/1.88);
   this.marsLife = parseInt(this.earthLife/1.88);
   this.remainMarsLife = Math.abs(this.marsLife - this.ageMars);
  };

  jupAge() {
    this.ageJup = parseInt(this.ageEarth/11.86);
    this.jupLife = parseInt(this.earthLife/11.86);
    this.remainJupLife = Math.abs(parseInt(this.jupLife - this.ageJup));
  };
}
