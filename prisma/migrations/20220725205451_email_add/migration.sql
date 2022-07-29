/*
  Warnings:

  - You are about to drop the column `clientsId` on the `events_participants` table. All the data in the column will be lost.
  - You are about to drop the `Clients` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `id_clients` to the `events_participants` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "events_participants" DROP CONSTRAINT "events_participants_clientsId_fkey";

-- AlterTable
ALTER TABLE "events_participants" DROP COLUMN "clientsId",
ADD COLUMN     "id_clients" TEXT NOT NULL,
ADD COLUMN     "id_events" TEXT;

-- DropTable
DROP TABLE "Clients";

-- CreateTable
CREATE TABLE "client" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "client_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "client_email_key" ON "client"("email");

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_id_companies_fkey" FOREIGN KEY ("id_companies") REFERENCES "companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "events_participants" ADD CONSTRAINT "events_participants_id_clients_fkey" FOREIGN KEY ("id_clients") REFERENCES "client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "events_participants" ADD CONSTRAINT "events_participants_id_events_fkey" FOREIGN KEY ("id_events") REFERENCES "events"("id") ON DELETE SET NULL ON UPDATE CASCADE;
