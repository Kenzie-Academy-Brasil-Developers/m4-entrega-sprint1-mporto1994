import listUsersService from "../services/listUsers.service"

const listUsersController = (request, response) => {

    const users = listUsersService()
    
    // if (users.length<1){
    //     return response.status(400).json({error:"There is no user in the database yet"})
    // }

    return response.json(users)
}

export default listUsersController