-- CreateTable
CREATE TABLE "events_participants" (
    "id" TEXT NOT NULL,
    "name_client" TEXT NOT NULL,

    CONSTRAINT "events_participants_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "events_participants" ADD CONSTRAINT "events_participants_name_client_fkey" FOREIGN KEY ("name_client") REFERENCES "client"("username") ON DELETE RESTRICT ON UPDATE CASCADE;
