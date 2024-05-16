import { userSeed } from "./user.seed"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
Promise.all([userSeed(prisma)])
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })