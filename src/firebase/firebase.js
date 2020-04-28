import app from 'firebase/app';
import "firebase/firestore";
import FirebaseConfig from './firebaseConfig';

class Firebase {
  constructor() {
    app.initializeApp(FirebaseConfig);
    this.db = app.firestore();
  }

  saveToDatabase = (burger, successHandler, errorHandler) => {
      this.db.collection("burgers").add({
          burger
      }).then(successHandler)
      .catch(errorHandler);
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