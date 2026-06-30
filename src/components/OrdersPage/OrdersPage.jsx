import React from "react";
import { OrdersData } from "../../Data/Data";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./OrdersPage.css";

const OrdersPage = () => {
  const makeStyle = (status) => {
    if (status === "Aprovado") {
      return {
        background: "rgb(145 254 159 / 47%)",
        color: "green",
      };
    } else if (status === "Pendente") {
      return {
        background: "#ffadad8f",
        color: "red",
      };
    } else {
      return {
        background: "#59bfff",
        color: "white",
      };
    }
  };

  const handleDetailsClick = (link) => {
    window.open(link, '_blank');
  }

  return (
    <div className="OrdersPage">
      <h1>Pedidos Recentes e Outros Pedidos</h1>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="orders table">
          <TableHead>
            <TableRow>
              <TableCell>Produto</TableCell>
              <TableCell align="left">Numero do pedido</TableCell>
              <TableCell align="left">Data</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {OrdersData.map((order, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {order.product}
                </TableCell>
                <TableCell align="left">{order.trackingId}</TableCell>
                <TableCell align="left">{order.date}</TableCell>
                <TableCell align="left">
                  <span className="status" style={makeStyle(order.status)}>
                    {order.status}
                  </span>
                </TableCell>
                <TableCell align="left" className="Details" onClick={() => handleDetailsClick(order.link)}>
                  Detalhes
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default OrdersPage;
