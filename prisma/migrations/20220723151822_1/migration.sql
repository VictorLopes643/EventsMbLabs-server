/*
  Warnings:

  - Made the column `id_clients` on table `events_participants` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "events_participants" DROP CONSTRAINT "events_participants_id_clients_fkey";

-- AlterTable
ALTER TABLE "events_participants" ADD COLUMN     "eventsId" TEXT,
ALTER COLUMN "id_clients" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "events_participants" ADD CONSTRAINT "events_participants_id_clients_fkey" FOREIGN KEY ("id_clients") REFERENCES "client"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "events_participants" ADD CONSTRAINT "events_participants_eventsId_fkey" FOREIGN KEY ("eventsId") REFERENCES "events"("id") ON DELETE SET NULL ON UPDATE CASCADE;
