/*
  Warnings:

  - Added the required column `id_companies` to the `events` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "events" ADD COLUMN     "id_companies" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_id_companies_fkey" FOREIGN KEY ("id_companies") REFERENCES "companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
