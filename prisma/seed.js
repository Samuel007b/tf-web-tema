import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  console.log("Iniciando seed...");

  // ---------- BEBIDAS ----------
  const sucoLaranja = await prisma.produto.create({
    data: {
      nome: "Suco de Laranja Natural",
      foto: "https://app.cardapiodigital.net/tabuadecarne/1307-large_default/suco-laranja-500ml.jpg",
      destaque: true,
      tipo: "BEBIDA",
    },
  });
  await prisma.bebida.create({
    data: {
      produtoId: sucoLaranja.id,
      volume: "500ml",
      marca: "Dona Cida", //kkkkk
      preco: 8.0,
    },
  });

  const guarana = await prisma.produto.create({
    data: {
      nome: "Refrigerante Guaraná",
      foto: "https://cdn.awsli.com.br/2500x2500/1330/1330028/produto/51587137/a19f18b3f5.jpg",
      destaque: false,
      tipo: "BEBIDA",
    },
  });
  await prisma.bebida.create({
    data: {
      produtoId: guarana.id,
      volume: "350ml",
      marca: "Antarctica",
      preco: 6.0,
    },
  });

  // ---------- UNITÁRIOS ----------
  const chocolate = await prisma.produto.create({
    data: {
      nome: "Chocolate",
      foto: "https://destro.fbitsstatic.net/img/p/trento-chocolate-ao-leite-32g-72244/258780.jpg?w=500&h=500&v=202501231555&qs=ignore",
      destaque: true,
      tipo: "UNITARIO",
    },
  });
  await prisma.unitario.create({
    data: {
      produtoId: chocolate.id,
      marca: "Trento",
      precoUni: 3.5,
    },
  });

  const paçoca = await prisma.produto.create({
    data: {
      nome: "Paçoca",
      foto: "https://docemalu.vtexassets.com/arquivos/ids/5374078/bbe1c0f2b1db1ca61aae2bfb6561e05e654c1aae.jpg?v=639167768365670000",
      destaque: false,
      tipo: "UNITARIO",
    },
  });
  await prisma.unitario.create({
    data: {
      produtoId: paçoca.id,
      marca: "Paçoquita",
      precoUni: 1.0,
    },
  });

  // ---------- PRATO FEITO ----------
  const feijoada = await prisma.produto.create({
    data: {
      nome: "Feijoada Completa",
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtQnIQwCcnI_RWsaHPuCBxvPp1Wn7CvZ0NL-lX906BX6XZ3Apy2sgCSkK0&s=10",
      destaque: true,
      tipo: "PRATO_FEITO",
    },
  });
  await prisma.pratoFeito.create({
    data: {
      produtoId: feijoada.id,
      preco: 25.0,
    },
  });

  const churrasco = await prisma.produto.create({
    data: {
      nome: "Churrasco",
      foto: "https://img.cdndsgni.com/preview/10484032.jpg",
      destaque: false,
      tipo: "PRATO_FEITO",
    },
  });
  await prisma.pratoFeito.create({
    data: {
      produtoId: churrasco.id,
      preco: 28.0,
    },
  });

  // ---------- PRATO A QUILO ----------
  const buffetQuilo = await prisma.produto.create({
    data: {
      nome: "Buffet Livre ao Quilo",
      foto: "https://static.vecteezy.com/system/resources/thumbnails/052/652/392/small/diverse-buffet-for-festive-event-png.png",
      destaque: true,
      tipo: "PRATO_QUILO",
    },
  });
  await prisma.pratoQuilo.create({
    data: {
      produtoId: buffetQuilo.id,
      precoKg: 65.99,
    },
  });

  // ---------- AVALIAÇÕES ----------
  await prisma.avaliacao.createMany({
    data: [
      {
        descricao: "Feijoada maravilhosa, sabor de comida caseira de verdade!",
        quantEstrelas: 5,
        midia: null,
        destaque: true,
        nomeCliente: "Luan Santana",
        fotoCliente: null,
        produtoId: feijoada.id,
      },
      {
        descricao: "Suco bem geladinho e natural, recomendo.",
        quantEstrelas: 4,
        midia: null,
        destaque: false,
        nomeCliente: "Pablo do Arrocha",
        fotoCliente: null,
        produtoId: sucoLaranja.id,
      },
      {
        descricao: "Churrasco perfeito e no ponto certo",
        quantEstrelas: 5,
        midia: null,
        destaque: true,
        nomeCliente: "Jamerson.R",
        fotoCliente: null,
        produtoId: churrasco.id,
      },
      {
        descricao: "Buffet com ótima variedade, preço justo pelo quilo.",
        quantEstrelas: 4,
        midia: null,
        destaque: false,
        nomeCliente: "Arthur Ping-Pong",
        fotoCliente: null,
        produtoId: buffetQuilo.id,
      },
    ],
  });

  // ---------- USER ADMIN ----------
  const senhaHash = await bcrypt.hash("admin123", 10);
  await prisma.userAdmin.create({
    data: {
      login: "admin",
      senhaHash,
    },
  });

  console.log("Seed concluído com sucesso!");
}

main()
  .catch((erro) => {
    console.error("Erro ao rodar o seed:", erro);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });