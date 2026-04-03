// Using fetch (basic way)

async function apicall() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data);
    
  } catch (error) {
     console.log("error");
     
  }   
}
apicall();


// With Type Safety (Important in TypeScript)

type user={
id:number,
    name:string,
    username:string,
    email:string,
    address: {
      street:string,
      suite:string,
      city:string,
      zipcode:string,
      geo: {
        lat: number,
        lng:number
}
}
}

async function getusers ():Promise<user[]>{
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/users")
        let data:user[]= await res.json();
             return data
        
    } catch (error) {
        console.log("error");
         throw new Error("Failed to fetch users");
    }
}
getusers()
  .then(users => console.log(users))
  .catch(err => console.log(err));