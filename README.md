# PrsimaProject
Prisma HandsOn

## init npm project
npm init -y

### save as dev dependency
npm i --save-dev prisma typescript ts-node @types/node nodemon

## init prisma
npx prisma init --datasource-provider postgresql

## building models 
every model needs an id 

## applying changes to DB (Migrating)
npx primsa migrate dev (for development only)

## generating clients (prisma client basics)
npx prisma generate :
    => import { PrismaClient } from '@prisma/client'
       const prisma = new PrismaClient()