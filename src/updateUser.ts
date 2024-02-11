import { PrismaClient, Role } from "@prisma/client";
const prisma = new PrismaClient()

export interface UserData {
    username: string,
}

export interface UpdateUserData {
    username: string,
}

export async function updateUser(user: UserData, updateUser: UpdateUserData){
    try{
        const response = await prisma.user.update({
            where: {
                username: user.username
            },
            data: {
                username: updateUser.username
            }
        })
    
        console.log(response)
    }
    catch(e: any){
        console.error(e.message)
    }
    finally{
        await prisma.$disconnect()
    }
}