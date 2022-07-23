/*
  Warnings:

  - You are about to drop the column `eventsId` on the `events_participants` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "events_participants" DROP CONSTRAINT "events_participants_eventsId_fkey";

-- AlterTable
ALTER TABLE "events_participants" DROP COLUMN "eventsId",
ADD COLUMN     "id_events" TEXT;

-- AddForeignKey
ALTER TABLE "events_participants" ADD CONSTRAINT "events_participants_id_events_fkey" FOREIGN KEY ("id_events") REFERENCES "events"("id") ON DELETE SET NULL ON UPDATE CASCADE;
