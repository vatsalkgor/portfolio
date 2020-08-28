import firebase from "firebase/app";
import "firebase/firestore";

export const firebaseConfig = {
    apiKey: "AIzaSyDHLvvi6iT3_d_plbUEceBViigt5fvAxUE",
    authDomain: "portfolio-6ae02.firebaseapp.com",
    databaseURL: "https://portfolio-6ae02.firebaseio.com",
    projectId: "portfolio-6ae02",
    storageBucket: "portfolio-6ae02.appspot.com",
    messagingSenderId: "226394356396",
    appId: "1:226394356396:web:df3466467672170c6a3d09",
    measurementId: "G-05LC3B7TYC",
};

firebase.initializeApp(firebaseConfig);

export default firebase;

export const getProjects = () => {
    return new Promise((resolve, reject) => {
        firebase
            .firestore()
            .collection("projects")
            .get()
            .then((snapshot) => {
                // console.log(snapshot.docs.map((doc) => doc.data()));
                resolve(snapshot.docs.map((doc) => doc.data()));
            })
            .catch((err) => {
                reject(new Error(err));
            });
    });
};
