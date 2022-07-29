/*
  Warnings:

  - You are about to drop the `client` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "events_participants" DROP CONSTRAINT "events_participants_id_clients_fkey";

-- DropTable
DROP TABLE "client";

-- CreateTable
CREATE TABLE "Clients" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Clients_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Clients_email_key" ON "Clients"("email");

-- AddForeignKey
ALTER TABLE "events_participants" ADD CONSTRAINT "events_participants_id_clients_fkey" FOREIGN KEY ("id_clients") REFERENCES "Clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
