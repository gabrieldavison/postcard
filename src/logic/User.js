import Postcard from "./Postcard";

let id = 0;
function getId() {
  let returnId = id;
  id++;
  return returnId;
}

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
    this.postcards = [];
    this.liked = [];
    this.followed = [];
    this.idNum = 0;
  }

  addPostcard(text) {
    let returnId = this.idNum;
    this.idNum += 1;
    const postcard = new Postcard(
      this.username,
      text,
      `${this.username}_${returnId}`
    );
    this.postcards.push(postcard);
  }

  deletePostcard(id) {
    this.postcards.splice(
      this.postcards.indexOf(this.postcards.find((val) => val.id === id)),
      1
    );
    console.log(this.postcards);
  }

  like(id) {
    if (this.liked.includes(id)) {
      this.liked.splice(this.liked.indexOf(id), 1);
    } else {
      this.liked.push(id);
    }
  }

  follow(username) {
    if (this.followed.includes(username)) {
      this.followed.splice(this.followed.indexOf(username), 1);
    } else {
      this.followed.push(username);
    }
  }
}

export default User;
