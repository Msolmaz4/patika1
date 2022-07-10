


import axios from "axios";


  export async function Dene1() {
   const {data} = await axios("https://jsonplaceholder.typicode.com/users/1");
   console.log(data);
}
 export async function Dene2(){
    const {data: post} = await axios("https://jsonplaceholder.typicode.com/posts/1");
    console.log( post);
}

   
        
   


