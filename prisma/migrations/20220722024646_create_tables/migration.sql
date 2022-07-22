-- CreateTable
CREATE TABLE "client" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "companies" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "name_companies" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "companies_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "client_username_key" ON "client"("username");

-- CreateIndex
CREATE UNIQUE INDEX "companies_username_key" ON "companies"("username");

-- CreateIndex
CREATE UNIQUE INDEX "companies_name_companies_key" ON "companies"("name_companies");
