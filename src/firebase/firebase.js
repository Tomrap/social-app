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
    this.auth().signOut().catch(error => console.log(error));
    console.log("user logge out")
    return
  }

  async signin(email, password) {
    return await this.auth().signInWithEmailAndPassword(email, password)
  }
  
  registerUser =  async (user) => {
      const currentUser = this.auth().currentUser;
      const userRef = currentUser.uid
      user.userRef = userRef;
      await this.db.collection("users").add(
          user
      )
  }

  getUser = async (userId) => {
      let querySnapshot = await this.db.collection("users").where("userRef", "==", userId).limit(1).get()
      let user;
      querySnapshot.forEach((doc) => {
        user = doc.data();
      });
      return user;
    }

    getUserDoc = async (userId) => {
      let querySnapshot = await this.db.collection("users").where("userRef", "==", userId).limit(1).get()
      let userDoc;
      querySnapshot.forEach((doc) => {
        userDoc = doc;
      });
      return userDoc;
    }  

  updateUser = async (user, userId) => {
    await this.db.collection("users").doc(userId).set(user);
  }  

  listenToDocumentChange = (docId, callback) => {
    this.db.collection("users").doc(docId).onSnapshot((doc) => callback(doc))
  }  

  // getProfileImages = async (docRef) => {
  //   return await this.db.
  // }




  // getAllBurgers = async () => {
  //   let querySnapshot = await this.db.collection("burgers").get();
  //   let burgerList = [];
  //   querySnapshot.forEach((doc) => {
  //     burgerList.push(doc.data());
  // });
  //   return burgerList;
  // }

  // listenToDatabase = (handler) => {
  //   this.db.collection("burgers").onSnapshot((querySnapshot) => {
  //     let burgerList = [];
  //     querySnapshot.forEach((doc) => {
  //         burgerList.push(doc.data());
  //     });
  //     handler(burgerList);
  //   });
  // }

  // //only changes
  // listenToDatabaseChanges = (handler) => {
  //   this.db.collection("burgers").onSnapshot(snapshot => handler(snapshot))
  // }
}
  export default Firebase;
