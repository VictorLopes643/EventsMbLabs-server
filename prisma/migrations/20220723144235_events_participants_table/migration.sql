/*
  Warnings:

  - You are about to drop the column `name_client` on the `events_participants` table. All the data in the column will be lost.
  - Made the column `id_companies` on table `events` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `id_clients` to the `events_participants` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "events" DROP CONSTRAINT "events_id_companies_fkey";

-- DropForeignKey
ALTER TABLE "events_participants" DROP CONSTRAINT "events_participants_name_client_fkey";

-- AlterTable
ALTER TABLE "events" ALTER COLUMN "id_companies" SET NOT NULL;

-- AlterTable
ALTER TABLE "events_participants" DROP COLUMN "name_client",
ADD COLUMN     "eventsId" TEXT,
ADD COLUMN     "id_clients" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_id_companies_fkey" FOREIGN KEY ("id_companies") REFERENCES "companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "events_participants" ADD CONSTRAINT "events_participants_id_clients_fkey" FOREIGN KEY ("id_clients") REFERENCES "client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "events_participants" ADD CONSTRAINT "events_participants_eventsId_fkey" FOREIGN KEY ("eventsId") REFERENCES "events"("id") ON DELETE SET NULL ON UPDATE CASCADE;
