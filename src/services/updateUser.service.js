import users from "../database"

const updateUserService = (id, name, email, password, isAdm) => {

    const updatedUser = {
        id,
        name,
        email,
        password,
        updatedOn:Date.now(),
        isAdm
    }
    const userIndex =  users.findIndex((user)=>user.id===id)
    
    if (userIndex=== -1){
        return("User not found")
    }
    users[userIndex] = {...users[userIndex], ...updatedUser}

    return users[userIndex]
}
export default updateUserService