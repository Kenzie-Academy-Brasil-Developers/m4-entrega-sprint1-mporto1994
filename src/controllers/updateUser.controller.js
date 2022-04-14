import updateUserService from "../services/updateUser.service"

const updateUserController = (request, response) => {
    const {id} = request.params

    const {name,email,password,isAdm} = request.body
    
    const updatedUser = updateUserService(id,name,email,password,isAdm)

    return response.json(updatedUser)
}
export default updateUserController