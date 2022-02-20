class Cat {
  constructor(breed, nickname) {
    this.breed = breed;
    this.nickname = nickname;
    this.numberOfMiceCatch = 0;
    this.successChance = 0.8;
  }

  meow () {
    return `${this.nickname} says MEOW`;
  }

  eat () {
    return `${this.nickname} eat`
  }

  sleep () {
    return `${this.nickname} sleep`;
  }

  catchMice () {
    let chance = this.successChance * Math.random();
    if (chance.toFixed(1) > 0.5) {
      this.numberOfMiceCatch++;
      return `${this.nickname} catch ${this.numberOfMiceCatch} mice`;
    } else {
      return `${this.nickname} can't catch a mouse`;
    }
  }

  
}

class StrayCat extends Cat {
  
  constructor(nickname, numberOfMiceCatch) {
    super('stray', nickname, numberOfMiceCatch)
    this.successChance = 1
    this.eatCatchMice = 0;
  }

  eat () {
    if (this.numberOfMiceCatch > this.eatCatchMice) {
      this.eatCatchMice++
      return `${this.nickname} eat mouse` 
    } else {
      return `${this.nickname} need to hunt`
    }
  }
}

const cat1 = new StrayCat('robin');
const cat2 = new Cat('seans', 'hollan');