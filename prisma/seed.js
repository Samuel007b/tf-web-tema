import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  console.log("Iniciando seed...");

  // ---------- BEBIDAS ----------
  const sucoLaranja = await prisma.produto.create({
    data: {
      nome: "Suco de Laranja Natural 500 ml",
      foto: "https://app.cardapiodigital.net/tabuadecarne/1307-large_default/suco-laranja-500ml.jpg",
      destaque: true,
      categoria: "BEBIDA",
      preco: 8.0,
      descricao: "Garrafa de 500 ml de suco de laranja natural, feito na hora, sem adição de açúcar.",
    },
  });

  const guarana = await prisma.produto.create({
    data: {
      nome: "Refrigerante Guaraná Antarctica 350 ml",
      foto: "https://cdn.awsli.com.br/2500x2500/1330/1330028/produto/51587137/a19f18b3f5.jpg",
      destaque: false,
      categoria: "BEBIDA",
      preco: 6.0,
      descricao: "Refrigerante Guaraná Antarctica 350 ml, ideal para quem gosta de sabores fortes."
    },
  });

  // ---------- UNITÁRIOS ----------
  const chocolate = await prisma.produto.create({
    data: {
      nome: "Chocolate Trento ao Leite 32g",
      foto: "https://destro.fbitsstatic.net/img/p/trento-chocolate-ao-leite-32g-72244/258780.jpg?w=500&h=500&v=202501231555&qs=ignore",
      destaque: true,
      categoria: "UNITARIO",
      preco: 3.5,
      descricao: "Chocolate Trento ao Leite 32g, perfeito para um lanche energético."
    },
  });

  const paçoca = await prisma.produto.create({
    data: {
      nome: "Paçoca Paçoquita 20g",
      foto: "https://docemalu.vtexassets.com/arquivos/ids/5374078/bbe1c0f2b1db1ca61aae2bfb6561e05e654c1aae.jpg?v=639167768365670000",
      destaque: false,
      categoria: "UNITARIO",
      preco: 1.0,
      descricao: "Paçoca Paçoquita 20g, perfeita para um lanche rápido."
    },
  });

  // ---------- PRATO FEITO ----------
  const feijoada = await prisma.produto.create({
    data: {
      nome: "Feijoada Completa",
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtQnIQwCcnI_RWsaHPuCBxvPp1Wn7CvZ0NL-lX906BX6XZ3Apy2sgCSkK0&s=10",
      destaque: true,
      categoria: "PRATO_FEITO",
      preco: 25.0,
      descricao: "Feijoada completa com arroz, farofa, couve e laranja."
    },
  });

  const churrasco = await prisma.produto.create({
    data: {
      nome: "Churrasco",
      foto: "https://img.cdndsgni.com/preview/10484032.jpg",
      destaque: false,
      categoria: "PRATO_FEITO",
      preco: 28.0,
      descricao: "Churrasco com carne bovina, frango e linguiça, acompanhado de arroz, farofa e vinagrete."
    },
  });

  // ---------- PRATO A QUILO ----------
  const buffetQuilo = await prisma.produto.create({
    data: {
      nome: "Buffet Livre ao Quilo",
      foto: "https://static.vecteezy.com/system/resources/thumbnails/052/652/392/small/diverse-buffet-for-festive-event-png.png",
      destaque: true,
      categoria: "PRATO_QUILO",
      preco: 65.99,
      descricao: "Buffet livre ao quilo com diversas opções de pratos, saladas e sobremesas."
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
        produtoId: feijoada.id
      },
      {
        descricao: "Suco bem geladinho e natural, recomendo.",
        quantEstrelas: 4,
        midia: null,
        destaque: false,
        nomeCliente: "Pablo do Arrocha",
        fotoCliente: null,
        produtoId: sucoLaranja.id
      },
      {
        descricao: "Churrasco perfeito e no ponto certo",
        quantEstrelas: 5,
        midia: null,
        destaque: true,
        nomeCliente: "Jamerson.R",
        fotoCliente: null,
        produtoId: churrasco.id
      },
      {
        descricao: "Buffet com ótima variedade, preço justo pelo quilo.",
        quantEstrelas: 4,
        midia: null,
        destaque: false,
        nomeCliente: "Arthur Ping-Pong",
        fotoCliente: null,
        produtoId: buffetQuilo.id
      },
    ],
  });

  // ---------- USER ADMIN ----------
  const senhaHash = await bcrypt.hash("admin123", 10);
  await prisma.userAdmin.create({
    data: {
      login: "admin",
      senhaHash,
      nome: "Administrador",
      email: "admin@example.com"
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