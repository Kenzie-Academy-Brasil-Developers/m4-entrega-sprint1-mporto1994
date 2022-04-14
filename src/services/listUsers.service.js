import {v4 as uuid} from "uuid"
import users from "../database"

const listUsersService = () => {
    // if (users.length<1){
    //     return response.status(400).json({error:"There is no user in the database yet"})
    // }
    return users
}
export default listUsersService
