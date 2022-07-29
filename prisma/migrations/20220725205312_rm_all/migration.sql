/*
  Warnings:

  - You are about to drop the column `id_clients` on the `events_participants` table. All the data in the column will be lost.
  - You are about to drop the column `id_events` on the `events_participants` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "events" DROP CONSTRAINT "events_id_companies_fkey";

-- DropForeignKey
ALTER TABLE "events_participants" DROP CONSTRAINT "events_participants_id_clients_fkey";

-- DropForeignKey
ALTER TABLE "events_participants" DROP CONSTRAINT "events_participants_id_events_fkey";

-- AlterTable
ALTER TABLE "events_participants" DROP COLUMN "id_clients",
DROP COLUMN "id_events",
ADD COLUMN     "clientsId" TEXT;

-- AddForeignKey
ALTER TABLE "events_participants" ADD CONSTRAINT "events_participants_clientsId_fkey" FOREIGN KEY ("clientsId") REFERENCES "Clients"("id") ON DELETE SET NULL ON UPDATE CASCADE;
