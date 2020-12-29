class Lingkaran {
    constructor(rusuk) {
      if (rusuk % 7 === 0) this.phi = 22 / 7;
      else this.phi = 3.14;
      this.r = rusuk;
    }
  
    luas() {
      return this.phi * this.r * this.r;
    }
    keliling() {
      return this.phi * 2 * this.r;
    }
  }
  
  class Tabung extends Lingkaran {
    constructor(rusuk, tinggi) {
      super(rusuk);
      this.t = tinggi;
    }
  
    luasSelimut() {
      return this.t * this.keliling();
    }
  
    luasPermukaan() {
      return 2 * this.luas() + this.luasSelimut();
    }
  
    volume() {
      return this.luas() * this.t;
    }
  }
  
  class Kerucut extends Lingkaran {
    constructor(rusuk, tinggi, pelukis) {
      super(rusuk);
      this.t = tinggi;
      if (pelukis) {
        this.s = pelukis;
      } else {
        this.s = Math.sqrt(this.t * this.t + this.r * this.r);
      }
    }
  
    luasSelimut() {
      return this.phi * this.r * this.s;
    }
  
    luasPermukaan() {
      return this.luas() + this.luasSelimut();
    }
  
    volume() {
      return (this.luas() * this.t) / 3;
    }
  }
  
  class Bola extends Lingkaran {
    constructor(r, t) {
      super(r);
      this.tinggi = t;
    }
  
    luasPermukaan() {
      return 4 * this.luas();
    }
  
    volume() {
      return (this.luas() * this.r * 4) / 3;
    }
  }
  
  let hitung = new Tabung(7, 10);
  
  console.log('Tabung r=7 t=10');
  console.log('Luas Selimut=' + hitung.luasSelimut());
  console.log('Luas Permukaan=' + hitung.luasPermukaan());
  console.log('Volume=' + hitung.volume());
  console.log('-----------------------');
  
  hitung = new Kerucut(7, 10);
  
  console.log('Kerucut r=7 t=10 s=?');
  console.log('Luas Selimut=' + hitung.luasSelimut());
  console.log('Luas Permukaan=' + hitung.luasPermukaan());
  console.log('Volume=' + hitung.volume());
  console.log('-----------------------');
  
  hitung = new Kerucut(7, 10, 10);
  console.log('Kerucut r=7 t=10 s=10');
  console.log('Luas Selimut=' + hitung.luasSelimut());
  console.log('Luas Permukaan=' + hitung.luasPermukaan());
  console.log('Volume=' + hitung.volume());
  console.log('-----------------------');
  
  hitung = new Bola(7, 10, 10);
  
  console.log('Tabung r=7 t=10');
  console.log('Luas Permukaan=' + hitung.luasPermukaan());
  console.log('Volume=' + hitung.volume());