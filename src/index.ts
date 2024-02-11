import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

interface User {
    name: string,
    password: string
}

async function createUser(user: User){
    const response = await prisma.user.create({
        data: user
    })

    console.log(response)
}

createUser({name: "Manik", password: "12345"})
.catch((e)=>{
    console.error(e.message);
})
.finally(async ()=>{
    await prisma.$disconnect()
})