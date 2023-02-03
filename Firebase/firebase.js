import { initializeApp } from "firebase/app";
import { getDatabase, ref, remove, set, update,get,child,onValue } from "firebase/database";


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

  // set(ref(database, 'user1'),{
  //   name:'asd',
  //   age:25,
  //   email:'test@gmail.com',
  //   location:{
  //     city:'karachi',
  //     country:'Pakistan'
  //   }
  // });
  // update(ref(database, 'user1'),{
  //   name:'ejaz'
  // });
  // remove(ref(database, 'user1'));
  // get(ref(database),'user1').then((data)=>{
  //   console.log(data.val())
  // });
  // onValue(ref(database,'user1'),(post)=>{
  //   console.log(post.val())
  // })
 