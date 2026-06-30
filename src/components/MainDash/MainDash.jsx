import React from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import OrdersPage from "../OrdersPage/OrdersPage";
import BooksPage from "../BooksPage/BooksPage";
import CustomersPage from "../CustomersPage/CustomersPage";
import AnalysisPage from "../AnalysisPage/AnalysisPage";
import "./MainDash.css";

const MainDash = ({ activePage }) => {
  return (
    <div className="MainDash">
      {activePage === 0 ? (
        <>
          <h1>Dashboard</h1>
          <Cards />
          <Table />
        </>
      ) : activePage === 1 ? (
        <OrdersPage />
      ) : activePage === 2 ? (
        <CustomersPage />
      ) : activePage === 3 ? (
        <BooksPage />
      ) : activePage === 4 ? (
        <AnalysisPage />
      ) : (
        <>
          <h1>Página em desenvolvimento</h1>
          <p>Conteúdo para {["Inicio", "Pedidos", "Clientes", "Livros", "Análise e Estatísticas"][activePage]}</p>
        </>
      )}
    </div>
  );
};

export default MainDash;
