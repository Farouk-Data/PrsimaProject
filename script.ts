import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    const user1 = await prisma.user.create({ 
        data:{
            name: "fecha"
        }
    })
    const user2 = await prisma.user.create({ 
        data:{
            name: "fecha2"
        }
    })
    // console.log(user1);
    // console.log(user2);
    const users = await prisma.user.findMany()
    console.log(users);
}

main()
    .catch (e => {
        console.error(e.message)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })