import users from "../database"
import {v4 as uuid} from "uuid"
import * as bycrypt from "bcryptjs"

const createUserService = async (email,name, password, isAdm) => {
    
const hashedPassword = await bycrypt.hash(password,10)

        const newUser={
            email,
            name,
            password: hashedPassword,
            isAdm,
            createdOn:Date.now(),
            id:uuid()
        }
        users.push(newUser)

        return newUser
}
export default createUserService
