-- DropForeignKey
ALTER TABLE "events_participants" DROP CONSTRAINT "events_participants_id_clients_fkey";

-- AddForeignKey
ALTER TABLE "events_participants" ADD CONSTRAINT "events_participants_id_clients_fkey" FOREIGN KEY ("id_clients") REFERENCES "client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
