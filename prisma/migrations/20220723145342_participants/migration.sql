-- DropForeignKey
ALTER TABLE "events_participants" DROP CONSTRAINT "events_participants_id_clients_fkey";

-- AlterTable
ALTER TABLE "events_participants" ALTER COLUMN "id_clients" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "events_participants" ADD CONSTRAINT "events_participants_id_clients_fkey" FOREIGN KEY ("id_clients") REFERENCES "client"("id") ON DELETE SET NULL ON UPDATE CASCADE;
