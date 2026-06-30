import React from "react";
import { OrdersData, customersData, cardsData } from "../../Data/Data";
import "./AnalysisPage.css";

const AnalysisPage = () => {
  const deliveredOrders = OrdersData.filter((order) => order.status === "Entregue").length;
  const pendingOrders = OrdersData.filter((order) => order.status === "Pendente").length;
  const activeCustomers = customersData.filter((customer) =>
    ["Ativo", "Premium"].includes(customer.status)
  ).length;

  const summaryItems = [
    {
      label: "Receita mensal",
      value: `R$ ${cardsData[1]?.value || "12,345"}`,
      hint: "+8,4% vs. mês anterior",
    },
    {
      label: "Pedidos entregues",
      value: `${deliveredOrders}/${OrdersData.length}`,
      hint: "Taxa saudável de conclusão",
    },
    {
      label: "Clientes ativos",
      value: activeCustomers,
      hint: "Segmento mais forte: Premium",
    },
    {
      label: "Pendências",
      value: pendingOrders,
      hint: "Acompanhar envio e confirmação",
    },
  ];

  const insights = [
    "O volume de vendas cresceu com foco em livros clássicos e literatura brasileira.",
    "Os clientes Premium respondem melhor a promoções de lançamento e frete grátis.",
    "Pedidos com status pendente estão concentrados em entregas de fim de semana.",
  ];

  const nextSteps = [
    "Reforçar campanhas para clientes frequentes.",
    "Priorizar acompanhamento de pedidos pendentes.",
    "Expandir a seção de livros com novos lançamentos.",
  ];

  return (
    <div className="AnalysisPage">
      <div className="analysisHeader">
        <div>
          <h2>Análise e Estatísticas</h2>
          <p className="subtitle">Painel complementar com indicadores e oportunidades</p>
        </div>
      </div>

      <div className="summaryGrid">
        {summaryItems.map((item) => (
          <div key={item.label} className="summaryCard">
            <span>{item.label}</span>
            <strong>{item.value}</strong>
            <small>{item.hint}</small>
          </div>
        ))}
      </div>

      <div className="insightGrid">
        <div className="panelCard">
          <h3>Insights da semana</h3>
          <ul>
            {insights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="panelCard">
          <h3>Próximos passos</h3>
          <ul>
            {nextSteps.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AnalysisPage;
