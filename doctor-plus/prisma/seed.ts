import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const users: Prisma.UserCreateInput[] = [
  {
    name: "علی ",
    username: "alishahsavari",
    email: "ali_sh1997@gmail.com",
    password: "1234",
  },
];

export async function main() {
  for (const user of users) {
    await prisma.user.create({ data: { ...user } });
  }
}

main().then(() => console.log("Done!"));