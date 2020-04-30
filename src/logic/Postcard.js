class Postcard {
  constructor(owner, text, id) {
    this.owner = owner;
    this.id = id;
    this.text = text;
    this.date = new Date();
    this.location = `${id}`;
  }
}

export default Postcard;
