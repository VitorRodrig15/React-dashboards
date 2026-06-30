// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";
import img6 from "../imgs/img6.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Inicio",
  },
  {
    icon: UilClipboardAlt,
    heading: "Pedidos",
  },
  {
    icon: UilUsersAlt,
    heading: "Clientes",
  },
  {
    icon: UilPackage,
    heading: 'Livros'
  },
  {
    icon: UilChart,
    heading: 'Análise e Estatísticas',
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Vendas Feitas",
    color: {
      backGround: "linear-gradient(180deg, #0ad933 0%, #58c510 100%)",
      boxShadow: "0px 10px 20px 0px #a3edb2",
    },
    barValue: 70,
    value: "25,970",
    png: UilUsdSquare,
    series: [
      {
        name: "Sales",
        data: [50, 40, 55, 51, 42, 109, 80],
      },
    ],
  },
  {
    title: "Receita Total",
    color: {
      backGround: "linear-gradient(180deg, #e5e397 0%, #f2ff68 100%)",
      boxShadow: "0px 10px 20px 0px #cad678",
    },
    barValue: 50,
    value: "12,345",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [60, 100, 80, 30, 50, 40, 75],
      },
    ],
  },
  {
    title: "Despesas Totais",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, #ff7484 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 50,
    value: "4,270",
    png: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [20, 35, 25, 40, 30, 25, 30],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Thomas Souza",
    noti: "Encomendou 5 Livros, Pelo Site da Loja. Pedido N° 1881.",
    time: "25 segundos atrás",
  },
  {
    img: img2,
    name: "James Bond",
    noti: "Recebeu o Pedido feito no prazo, Pedido N° 1859.",
    time: "30 minutos atrás",
  },
  {
    img: img3,
    name: "Roberta Correa",
    noti: "Encomendou o Livro A Metamorfose de Franz Kafka. Pedido N° 1880.",
    time: "2 horas atrás",
  },
];

export const customersData = [
  {
    id: 1,
    name: "Thomas Souza",
    email: "Thomas_souza.fp@gmail.com",
    createdAt: "12 Jan 2024",
    lastPurchase: "Hoje, 2 itens",
    segment: "Premium",
    status: "Ativo",
    avatar: img1,
    color: "#4f46e5",
  },
  {
    id: 2,
    name: "James Bond",
    email: "bond.james@outlook.com",
    createdAt: "03 Fev 2024",
    lastPurchase: "Ontem, 1 item",
    segment: "Frequent",
    status: "Ativo",
    avatar: img2,
    color: "#0f766e",
  },
  {
    id: 3,
    name: "Roberta Correa",
    email: "Roberta_Correa@gmail.com",
    createdAt: "21 Mar 2024",
    lastPurchase: "Há 1 dia",
    segment: "VIP",
    status: "Premium",
    avatar: img3,
    color: "#b45309",
  },
  {
    id: 4,
    name: "Diego Almeida",
    email: "diego.almeida@email.com",
    createdAt: "07 Abr 2024",
    lastPurchase: "Há 5 dias",
    segment: "Novo",
    status: "Ativo",
    avatar: null,
    color: "#be185d",
  },
  {
    id: 5,
    name: "Eduarda Lima",
    email: "eduarda.lima@gmail.com",
    createdAt: "14 Mai 2024",
    lastPurchase: "Há 1 semana",
    segment: "Premium",
    status: "Premium",
    avatar: null,
    color: "#2563eb",
  },
  {
    id: 6,
    name: "Felipe Nogueira",
    email: "felipe.nogueira@hotmail.com",
    createdAt: "30 Jun 2024",
    lastPurchase: "Há 2 semanas",
    segment: "Regular",
    status: "Inativo",
    avatar: img6,
    color: "#dc2626",
  },
  {
    id: 7,
    name: "Giovana Torres",
    email: "giovana.torres@yahoo.com",
    createdAt: "19 Jul 2024",
    lastPurchase: "Há 3 semanas",
    segment: "VIP",
    status: "Ativo",
    avatar: null,
    color: "#7c3aed",
  },
];

// Orders Data - Livros com Autores e links para compra
export const OrdersData = [
  { product: "O Espião que Sabia Demais de John le Carré", trackingId: 1859, date: "29 Junho 2026", status: "Entregue", link: "https://openlibrary.org/search?q=O+Espi%C3%A3o+que+Sabia+Demais+John+le+Carr%C3%A9" },
  { product: "O Código Da Vinci de Dan Brown", trackingId: 1881, date: "29 Junho 2022", status: "Aprovado", link: "https://openlibrary.org/search?q=O+C%C3%B3digo+Da+Vinci+Dan+Brown" },
  { product: "A Hora da estrela de Clarisse Lispector", trackingId: 1875, date: "29 Junho 2026", status: "Entregue", link: "https://openlibrary.org/search?q=A+Hora+da+Estrela+Clarisse+Lispector" },
  { product: "A Metamorfose de Franz Kafka", trackingId: 1880, date: "29 Junho 2026", status: "Pendente", link: "https://openlibrary.org/search?q=A+Metamorfose+Franz+Kafka" },
  { product: "1984 de George Orwell", trackingId: 1879, date: "29 Junho 2026", status: "Entregue", link: "https://openlibrary.org/search?q=1984+George+Orwell" },
  { product: "Dom Casmurro de Machado de Assis", trackingId: 1878, date: "28 Junho 2026", status: "Aprovado", link: "https://openlibrary.org/search?q=Dom+Casmurro+Machado+de+Assis" },
  { product: "O Cortiço de Aluísio Azevedo", trackingId: 1860, date: "27 Junho 2026", status: "Entregue", link: "https://openlibrary.org/search?q=O+Corti%C3%A7o+Alu%C3%ADsio+Azevedo" },
  { product: "Grande Sertão Veredas de Guimarães Rosa", trackingId: 1869, date: "26 Junho 2026", status: "Pendente", link: "https://openlibrary.org/search?q=Grande+Sert%C3%A3o+Veredas+Guimar%C3%A3es+Rosa" },
  { product: "Memórias Póstumas de Brás Cubas de Machado de Assis", trackingId: 1876, date: "25 Junho 2026", status: "Entregue", link: "https://openlibrary.org/search?q=Mem%C3%B3rias+P%C3%B3stumas+de+Br%C3%A1s+Cubas+Machado+de+Assis" },
  { product: "Capitães da Areia de Jorge Amado", trackingId: 1855, date: "24 Junho 2026", status: "Aprovado", link: "https://openlibrary.org/search?q=Capit%C3%A3es+da+Areia+Jorge+Amado" },
  { product: "Quincas Borba de Machado de Assis", trackingId: 1870, date: "23 Junho 2026", status: "Entregue", link: "https://openlibrary.org/search?q=Quincas+Borba+Machado+de+Assis" },
  { product: "Iracema de José de Alencar", trackingId: 1873, date: "22 Junho 2026", status: "Aprovado", link: "https://openlibrary.org/search?q=Iracema+Jos%C3%A9+de+Alencar" },
  { product: "Gabriela Cravo e Canela de Jorge Amado", trackingId: 1871, date: "21 Junho 2026", status: "Aprovado", link: "https://openlibrary.org/search?q=Gabriela+Cravo+e+Canela+Jorge+Amado" },
  { product: "O Primo Basílio de Eça de Queirós", trackingId: 1874, date: "20 Junho 2026", status: "Pendente", link: "https://openlibrary.org/search?q=O+Primo+Bas%C3%ADlio+E%C3%A7a+de+Queir%C3%B3s" },
];
