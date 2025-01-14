// interface can inherit and merge with other interfaces
interface Animalia {
  name: string
}

interface Cephalopoda {
  color: string
}

interface Cephalopoda extends Animalia {
  habitat: string
}

class Vertebrata implements Cephalopoda {
  name: string
  color: string
  habitat: string
  constructor(name: string) {
    this.name = name
  }
}




// type extend using intersection (&)
type Animal = {
  name: string
}

type Cat = Animal& {
  color: string,

  /**
  * == age: number | undefined
  */
  age?: number    // == age: number | undefined
}

type Hamster = Animal& {
  [key: string]: unknown
}

let pet_1: Hamster = { name: "monster1", byte: 1024 }
let pet_2: Cat = { name: "monster2", color: "black" }




// type support union and tuple, unlike interface
type Union = { key: string } | { key: number }