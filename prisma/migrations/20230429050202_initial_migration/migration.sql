-- CreateEnum
CREATE TYPE "Role" AS ENUM ('SUPERADMIN', 'ADMIN', 'USER', 'UNVERIFIED');

-- CreateTable
CREATE TABLE "Example" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Example_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT,
    "password" TEXT,
    "name" TEXT,
    "email" TEXT,
    "role" "Role" NOT NULL DEFAULT 'UNVERIFIED',
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,
    "roleId" INTEGER,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "Lot" (
    "ID" TEXT NOT NULL,
    "LotType" VARCHAR(25) NOT NULL,
    "Description" TEXT,
    "mediatorID" UUID,
    "orderID" TEXT NOT NULL,

    CONSTRAINT "Lot_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Deceased" (
    "ID" OID NOT NULL,
    "FirstName" VARCHAR(150) NOT NULL,
    "LastName" VARCHAR(150) NOT NULL,
    "MiddleName" VARCHAR(150),
    "AgeDied" SMALLINT NOT NULL,
    "DateBorn" DATE NOT NULL,
    "DateDied" DATE NOT NULL,
    "lotID" TEXT,

    CONSTRAINT "Deceased_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Mediator" (
    "ID" UUID NOT NULL,
    "FirstName" VARCHAR(150) NOT NULL,
    "LastName" VARCHAR(150) NOT NULL,
    "MiddleName" VARCHAR(150),
    "Phone" VARCHAR(12),
    "Address1" VARCHAR(200) NOT NULL,
    "Address2" VARCHAR(200) NOT NULL,

    CONSTRAINT "Mediator_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Order" (
    "ID" TEXT NOT NULL,
    "TransactionName" VARCHAR(30) NOT NULL,
    "Description" TEXT,
    "Price" MONEY NOT NULL,
    "Discount" DECIMAL,
    "Interest" MONEY,
    "lotID" TEXT NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Payment" (
    "ID" TEXT NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("ID")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lot" ADD CONSTRAINT "Lot_mediatorID_fkey" FOREIGN KEY ("mediatorID") REFERENCES "Mediator"("ID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lot" ADD CONSTRAINT "Lot_orderID_fkey" FOREIGN KEY ("orderID") REFERENCES "Order"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Deceased" ADD CONSTRAINT "Deceased_lotID_fkey" FOREIGN KEY ("lotID") REFERENCES "Lot"("ID") ON DELETE SET NULL ON UPDATE CASCADE;
