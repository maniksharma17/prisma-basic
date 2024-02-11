import { PrismaClient, Role } from "@prisma/client";
const prisma = new PrismaClient()

export interface DeleteUserData {
    username: string,
}

export async function deleteUser(user: DeleteUserData){
    try{
        const response = await prisma.user.delete({
            where: {
                username: user.username
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