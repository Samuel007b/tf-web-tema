-- CreateEnum
CREATE TYPE "TipoProduto" AS ENUM ('BEBIDA', 'UNITARIO', 'PRATO_FEITO', 'PRATO_QUILO');

-- CreateTable
CREATE TABLE "Produto" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "foto" TEXT NOT NULL,
    "destaque" BOOLEAN NOT NULL,
    "tipo" "TipoProduto" NOT NULL,

    CONSTRAINT "Produto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Avaliacao" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "quantEstrelas" INTEGER NOT NULL,
    "midia" TEXT,
    "destaque" BOOLEAN NOT NULL,
    "nomeCliente" TEXT NOT NULL,
    "fotoCliente" TEXT,
    "produtoId" INTEGER NOT NULL,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Avaliacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bebida" (
    "produtoId" INTEGER NOT NULL,
    "volume" TEXT NOT NULL,
    "marca" TEXT NOT NULL,
    "preco" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "Bebida_pkey" PRIMARY KEY ("produtoId")
);

-- CreateTable
CREATE TABLE "Unitario" (
    "produtoId" INTEGER NOT NULL,
    "marca" TEXT NOT NULL,
    "precoUni" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "Unitario_pkey" PRIMARY KEY ("produtoId")
);

-- CreateTable
CREATE TABLE "PratoFeito" (
    "produtoId" INTEGER NOT NULL,
    "preco" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "PratoFeito_pkey" PRIMARY KEY ("produtoId")
);

-- CreateTable
CREATE TABLE "PratoQuilo" (
    "produtoId" INTEGER NOT NULL,
    "precoKg" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "PratoQuilo_pkey" PRIMARY KEY ("produtoId")
);

-- CreateTable
CREATE TABLE "UserAdmin" (
    "id" SERIAL NOT NULL,
    "login" TEXT NOT NULL,
    "senhaHash" TEXT NOT NULL,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserAdmin_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Produto_nome_key" ON "Produto"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "UserAdmin_login_key" ON "UserAdmin"("login");

-- AddForeignKey
ALTER TABLE "Avaliacao" ADD CONSTRAINT "Avaliacao_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "Produto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bebida" ADD CONSTRAINT "Bebida_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "Produto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Unitario" ADD CONSTRAINT "Unitario_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "Produto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PratoFeito" ADD CONSTRAINT "PratoFeito_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "Produto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PratoQuilo" ADD CONSTRAINT "PratoQuilo_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "Produto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
