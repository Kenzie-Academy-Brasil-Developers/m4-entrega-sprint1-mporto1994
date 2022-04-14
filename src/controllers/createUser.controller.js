import users from "../database"
import createUserService from "../services/createUser.service"

const createUserController = async (request,response) => {
    const {email, name, password, isAdm} = request.body

    const userAlreadyExists = users.find((user)=>user.email===email)
    
        if (userAlreadyExists){
            return response
                .status(400)
                .json({error:"This email has being taken."})
        }

    const user = await createUserService(email,name, password, isAdm)

    return response.json(user) 
}

export default createUserController