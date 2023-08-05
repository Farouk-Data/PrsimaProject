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
npx prisma migrate dev (for development only)

## generating clients (prisma client basics)
npx prisma generate :
    => import { PrismaClient } from '@prisma/client'
       const prisma = new PrismaClient()

## Datasources and Generators
can only have one datasource 
can have multiple generators 

## Model fields
Each model as table that has multiple fields

## Relationships
- At a Prisma level, a connection between two models is always represented by a relation field on each side of the relation.
- References and labels.
    => one-to-many relation between User and Post because one user can have many blog posts
    => Many-to-many 
    => One-to-one 