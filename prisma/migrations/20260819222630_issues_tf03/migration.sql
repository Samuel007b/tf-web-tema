/*
  Warnings:

  - You are about to drop the column `tipo` on the `Produto` table. All the data in the column will be lost.
  - You are about to drop the `Bebida` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PratoFeito` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PratoQuilo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Unitario` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email]` on the table `UserAdmin` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `categoria` to the `Produto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descricao` to the `Produto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `preco` to the `Produto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `UserAdmin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `UserAdmin` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Bebida" DROP CONSTRAINT "Bebida_produtoId_fkey";

-- DropForeignKey
ALTER TABLE "PratoFeito" DROP CONSTRAINT "PratoFeito_produtoId_fkey";

-- DropForeignKey
ALTER TABLE "PratoQuilo" DROP CONSTRAINT "PratoQuilo_produtoId_fkey";

-- DropForeignKey
ALTER TABLE "Unitario" DROP CONSTRAINT "Unitario_produtoId_fkey";

-- AlterTable
ALTER TABLE "Produto" DROP COLUMN "tipo",
ADD COLUMN     "categoria" "TipoProduto" NOT NULL,
ADD COLUMN     "descricao" TEXT NOT NULL,
ADD COLUMN     "preco" DECIMAL(10,2) NOT NULL;

-- AlterTable
ALTER TABLE "UserAdmin" ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "nome" TEXT NOT NULL;

-- DropTable
DROP TABLE "Bebida";

-- DropTable
DROP TABLE "PratoFeito";

-- DropTable
DROP TABLE "PratoQuilo";

-- DropTable
DROP TABLE "Unitario";

-- CreateIndex
CREATE UNIQUE INDEX "UserAdmin_email_key" ON "UserAdmin"("email");
