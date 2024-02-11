import { PrismaClient, Role } from "@prisma/client";
const prisma = new PrismaClient()

export interface User {
    username: string
}

export async function getAllUsers(){

    try{
        const response = await prisma.user.findMany()
        console.log(response)
    }
    catch(e: any){
        console.error(e.message)
    }
    finally{
        await prisma.$disconnect()
    }
    
}

export async function getUser(user: User) {
    try{
        const userData = await prisma.user.findUnique({
            where: {
                username: user.username
            }
        })
    
        console.log(userData)
    
    }
    catch(e: any){
        console.error(e.message)
    }
    finally{
        await prisma.$disconnect()
    }
}