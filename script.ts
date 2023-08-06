import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    await prisma.user.create({
        data: {
            
        }
    })
    // console.log(user1);
    // console.log(user2);
    // const users = await prisma.user.findMany()
    // console.log(users);
}

main()
    .catch (e => {
        console.error(e.message)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })