/*
  Warnings:

  - Made the column `id_companies` on table `events` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "events" DROP CONSTRAINT "events_id_companies_fkey";

-- AlterTable
ALTER TABLE "events" ALTER COLUMN "id_companies" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_id_companies_fkey" FOREIGN KEY ("id_companies") REFERENCES "companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
