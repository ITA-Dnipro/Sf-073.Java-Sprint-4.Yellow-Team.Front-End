import React from "react"
import * as ReactDOM from "react-dom/client"
import ListUsers from "./components/users/ListUsers"
import SimpleLoginComponent from "./components/SimpleLoginComponent"
import { NavLink, Routes, Route, BrowserRouter } from "react-router-dom"
import HomeGuest from "./components/HomeGuest"
import Header from "./components/Header"
import Footer from "./components/Footer"
import About from "./components/About"
import PrivateRoutes from "./utils/PrivateRoutes"
<<<<<<< HEAD
import ChangeUserStatus from "./components/ChangeUserStatus"
import AdminBar from "./components/AdminBar"
import ChangeUserRole from "./components/ChangeUserRole"
import SuspiciosIP from "./components/AddSuspiciousIP"
import ListSuspiciousIP from "./components/ListSuspiciousIP"
import DeleteIp from "./components/DeleteIp"
import AddCard from "./components/AddCard"
import ListCards from "./components/ListCards"
import DeleteCard from "./components/DeleteCard"
import Transaction from "./components/Transaction"
import TransactionFeedback from "./components/TransactionFeedback"
import TransactionHistory from "./components/TransactionHistory"
import TransactionHistoryByCard from "./components/TransactionHistoryByCard"
import Home from "./components/Home"
=======
import ChangeUserStatus from "./components/users/ChangeUserStatus"
import AdminBar from "./components/bars/AdminBar"
import ChangeUserRole from "./components/users/ChangeUserRole"
import SuspiciosIP from "./components/suspicious ips/AddSuspiciousIP"
import ListSuspiciousIP from "./components/suspicious ips/ListSuspiciousIP"
import DeleteIp from "./components/suspicious ips/DeleteIp"
import AddCard from "./components/stolen cards/AddCard"
import ListCards from "./components/stolen cards/ListCards"
import DeleteCard from "./components/stolen cards/DeleteCard"
import Transaction from "./components/transactions/Transaction"
import TransactionFeedback from "./components/transactions/TransactionFeedback"
import TransactionHistory from "./components/transactions/TransactionHistory"
import TransactionHistoryByCard from "./components/transactions/TransactionHistoryByCard"


>>>>>>> origin/main

function ExampleComponent() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/users" element={<ListUsers />}></Route>
          <Route path="/change-user-status" element={<ChangeUserStatus />}></Route>
          <Route path="/change-user-role" element={<ChangeUserRole />}></Route>
          <Route path="/admin" element={<AdminBar />}></Route>
          <Route path="/transaction" element={<Transaction />}></Route>
          <Route path="/transaction-feedback" element={<TransactionFeedback />}></Route>
          <Route path="/transaction-history" element={<TransactionHistory />}></Route>
          <Route path="/transaction-history-by-card" element={<TransactionHistoryByCard />}></Route>
          <Route path="/add-ip" element={<SuspiciosIP />}></Route>
          <Route path="/list-ip" element={<ListSuspiciousIP />}></Route>
          <Route path="/delete-ip" element={<DeleteIp />}></Route>
          <Route path="/add-stolen-card" element={<AddCard />}></Route>
          <Route path="/list-stolen-cards" element={<ListCards />}></Route>
          <Route path="/delete-stolen-card" element={<DeleteCard />}></Route>
          <Route path="" element={<Home />}></Route>
        </Route>
        <Route path="" element={<HomeGuest />}></Route>
        <Route path="/login" element={<SimpleLoginComponent />}></Route>
        <Route path="about-us" element={<About />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

const root = ReactDOM.createRoot(document.querySelector("#app"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ExampleComponent />
    </BrowserRouter>
  </React.StrictMode>
)
if (module.hot) {
  module.hot.accept()
}
