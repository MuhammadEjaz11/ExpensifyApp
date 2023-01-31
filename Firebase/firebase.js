import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyCzjVypVfVhEauTZgeqS1PtotcVT592noc",
    authDomain: "expensify-app-21824.firebaseapp.com",
    projectId: "expensify-app-21824",
    storageBucket: "expensify-app-21824.appspot.com",
    messagingSenderId: "947981298848",
    appId: "1:947981298848:web:170025c992cbbf6123edc5",
    databaseURL: "https://expensify-app-21824-default-rtdb.firebaseio.com/",
  };

  export const app = initializeApp(firebaseConfig);
  export const database = getDatabase(app);

  set(ref(database),{
    name:'asd',
    age:23
  })