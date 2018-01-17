import * as firebase from 'firebase';
let database;

export const init = () => {
  let config = {
  apiKey: "AIzaSyCihkJVv2u2WeqfdasGvxB_WgBpMqiutxU",
   authDomain: "vrtest-6992d.firebaseapp.com",
   databaseURL: "https://vrtest-6992d.firebaseio.com"
 }
 firebase.initializeApp(config)
 database = firebase.database()

 }

export const getSectionsDB = () => {
  return database.ref('/').once('value')
}

export const addSection = (name, email, pic) => {
  console.log(name)

  database.ref('users/' +1).set({
    username: name,
    email: email,
    profile_picture: pic
  });
}

export const saveState = (state) => {
  console.log(state)

database.ref('users/' + 2).set({
  state:state
});
}
