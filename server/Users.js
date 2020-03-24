let users=[]

const addUser=({id,name,room})=>{
    name=name.trim().toLowerCase();
    room=room.trim().toLowerCase();

    const existinguser=users.find((user)=>user.name==name && user.room==room)
    if(existinguser){
        return {error:'Username is taken'}
    }
    const newuser={id,name,room}

    users.push(newuser)
return newuser;
}
const removeUser=(id)=>{
const idx=users.findIndex((user)=>user.id==id);
if(idx!=-1){
    return users.splice(idx,1)[0];
}

}
const getUser=(id)=>{
return users.find((user)=>user.id==id)
}
const getUserInRoom=(room)=>{
    return users.filter((user)=>user.room==room);
}
module.exports={addUser,removeUser,getUser,getUserInRoom}
