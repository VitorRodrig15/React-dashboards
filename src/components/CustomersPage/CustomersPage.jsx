import React from "react";
import { customersData } from "../../Data/Data";
import "./CustomersPage.css";

const getInitials = (name) =>
  name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || "")
    .join("");

const createAvatarFallback = (name, color) => {
  const initials = getInitials(name);
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96">
      <rect width="96" height="96" rx="24" fill="${color}" />
      <text x="48" y="56" text-anchor="middle" font-family="Arial, sans-serif" font-size="28" font-weight="700" fill="white">${initials}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

const CustomersPage = () => {
  return (
    <div className="CustomersPage">
      <div className="customersHeader">
        <div>
          <h1>Clientes</h1>
          <p className="subtitle">Clientes cadastrados, histórico e últimas compras</p>
        </div>
        <button className="addCustomerButton">+ Novo cliente</button>
      </div>

      <div className="customersGrid">
        {customersData.map((customer, index) => {
          const avatarSrc =
            typeof customer.avatar === "string"
              ? customer.avatar
              : customer.avatar || createAvatarFallback(customer.name, customer.color || "#3b82f6");

          return (
            <div key={customer.id || index} className="customerCard">
              <div className="customerTop">
                <img
                  src={avatarSrc}
                  alt={customer.name}
                  className="customerAvatar"
                  onError={(event) => {
                    event.target.src = createAvatarFallback(customer.name, customer.color || "#3b82f6");
                  }}
                />
                <div>
                  <h3>{customer.name}</h3>
                  <p className="customerEmail">{customer.email}</p>
                </div>
              </div>

              <div className="customerInfoList">
                <div className="customerInfoItem">
                  <span>Data de criação</span>
                  <strong>{customer.createdAt}</strong>
                </div>
                <div className="customerInfoItem">
                  <span>Última compra</span>
                  <strong>{customer.lastPurchase}</strong>
                </div>
                <div className="customerInfoItem">
                  <span>Categoria</span>
                  <strong>{customer.segment}</strong>
                </div>
                <div className="customerInfoItem">
                  <span>Status</span>
                  <strong className={`status ${customer.status.toLowerCase()}`}>{customer.status}</strong>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomersPage;
