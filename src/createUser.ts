import { PrismaClient, Role } from "@prisma/client";
const prisma = new PrismaClient()

export interface CreateUserData {
    name: string,
    password: string,
    username: string,
    role: Role
}

export async function createUser(user: CreateUserData){
    try{
        const response = await prisma.user.create({
            data: {
                name: user.name,
                password: user.password,
                username: user.username,
                role: user.role,
    
                UserPreference: {
                    create: {
                        emailUpdates: true,
                    }
                }
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