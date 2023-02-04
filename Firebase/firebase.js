import { initializeApp } from "firebase/app";
import { getDatabase, ref, remove, set, update,get,child,onValue } from "firebase/database";
import { v4 as uuidv4 } from 'uuid';



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
  // const note = [
  //   {
  //     name:'ejaz',
  //     company:'reliable',
  //     email:'test@gmail.com'
  //   },
  //    {
  //     name:'ahmed',
  //     company:'punching',
  //     email:'ahmed@gmail.com'
  //   }
  // ]
  // const id = uuidv4();

  // set(ref(database, 'expense/' + id),{ 
  //   description: 'water bill', 
  //   note: 'water bill payment', 
  //   amount: 1000, 
  //   createDate: 5000 });
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
 


  // set(ref(database,`user/${uuidv4()}`),{
  //     name:'ahmed',
  //     company:'punching',
  //     email:'ahmed@gmail.com'
  //   }
  //   );

  //   set(ref(database,`user/${uuidv4()}`),{
  //     name:'aa',
  //     company:'aa',
  //     email:'aa@gmail.com'
  //   }
  //   );

  //   set(ref(database,`user/${uuidv4()}`),{
  //     name:'bb',
  //     company:'bb',
  //     email:'bbb@gmail.com'
  //   }
  //   );

    // onValue(ref(database,'expense'),(snapshot)=>{
    //   const expenses = [];
    //   snapshot.forEach((childsnapshot)=>{
    //     expenses.push({
    //       id: childsnapshot.key,
    //       ...childsnapshot.val()
    //     })
    //   });
    //   console.log(expenses)
    // })

