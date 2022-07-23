-- DropForeignKey
ALTER TABLE "events" DROP CONSTRAINT "events_id_companies_fkey";

-- AlterTable
ALTER TABLE "events" ALTER COLUMN "id_companies" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_id_companies_fkey" FOREIGN KEY ("id_companies") REFERENCES "companies"("id") ON DELETE SET NULL ON UPDATE CASCADE;
