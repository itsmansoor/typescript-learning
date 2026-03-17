interface info{
    name:string,
    age:number,
    college:string
}


interface teachertype extends info{
    sub:string
}
let studetInfo:info ={
    name:'Mansoor',
    age:23,
    college:"The Agriculture University OF Peshawar"
};

let teacherInfo:teachertype={
    name:"sir Majid SHahab",
    age:35,
    college:"The Agriculture University OF Peshawar",
    sub:"web Programming"
}


