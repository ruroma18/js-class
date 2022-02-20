class Cat {
  constructor(breed, nickname, numberOfMiceCatch) {
    this.breed = breed;
    this.nickname = nickname;
    this.numberOfMiceCatch = 0;
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
    this.numberOfMiceCatch++;
    return `${this.nickname} catch ${this.numberOfMiceCatch} mice`;
  }
}

const cat1 = new Cat('seams', 'robin')