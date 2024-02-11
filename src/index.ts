import { createUser, CreateUserData } from "./createUser";
import { deleteUser, DeleteUserData } from "./deleteUser";
import { updateUser, UpdateUserData, UserData } from "./updateUser";
import { getAllUsers, getUser, User } from "./getUsers";




const createUserData: CreateUserData = {
    name: "Akash",
    username: "akash20",
    password: "12345",
    role: "BASIC"
}

const getUserData: User = {
    username: "manik17"
}

const deleteUserData: DeleteUserData = {
    username: "rudra10"
}

createUser(createUserData)

