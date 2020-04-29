import app from 'firebase/app';
import "firebase/firestore";
import FirebaseConfig from './firebaseConfig';
import firebase from "firebase";

class Firebase {
  constructor() {
    app.initializeApp(FirebaseConfig);
    this.db = app.firestore();
    this.auth = firebase.auth;
  }

  getAuth() {
    return this.auth;
  }

  async signup(email, password, successHandler) {
    await this.auth().createUserWithEmailAndPassword(email, password).then(() => successHandler())
    .catch(error => console.log(error.message))
  }

  getCurrentUser() {
    return this.auth().currentUser;
  }

  
  signout() {
    return this.auth().signOut();
  }

  signin(email, password) {
    this.auth().signInWithEmailAndPassword(email, password)
    .catch(error => console.log(error.message))
  }
  
  registerUser =  async (user) => {
      const currentUser = this.auth().currentUser;
      const userRef = currentUser.uid
      user.userRef = userRef;
      await this.db.collection("users").add(
          user
      )
  }

  getUser = async (userAuth) => {
      let querySnapshot = await this.db.collection("users").where("userRef", "==", userAuth.uid).limit(1).get()
      let user;
      querySnapshot.forEach((doc) => {
        user = doc.data();
      });
      return user;
    }


  getAllBurgers = async () => {
    let querySnapshot = await this.db.collection("burgers").get();
    let burgerList = [];
    querySnapshot.forEach((doc) => {
      burgerList.push(doc.data());
  });
    return burgerList;
  }

  listenToDatabase = (handler) => {
    this.db.collection("burgers").onSnapshot((querySnapshot) => {
      let burgerList = [];
      querySnapshot.forEach((doc) => {
          burgerList.push(doc.data());
      });
      handler(burgerList);
    });
  }

  //only changes
  listenToDatabaseChanges = (handler) => {
    this.db.collection("burgers").onSnapshot(snapshot => handler(snapshot))
  }
}
  export default Firebase;