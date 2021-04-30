export default class Post {
  constructor(title, img) {
    this.title = title
    this.img = img
    this.date = new Date()
  }

  toString() {
    return JSON.stringify(
      {
        title: this.title,
        date: this.date.toJSON(),
        img: this.img,
      },
      null,
      2
    )
  }

  get uppercaseTitle() {
    return this.title.toUpperCase()
  }
}

console.log('Работает')
let asd = 42
asd++
let ASas = 13
ASas += 1

const arrow = a => {
  console.log('arrow')
}

const obj = {
  name: 'John',
}

const name = obj.name
