import PageLoader from "common/PageLoader/PageLoader";
import React from "react";
import AppRoutes from "routes";
import "./App.css";
import ErrorNotificationDialog from "common/Notification/ErrorNotification.dialog";
import MyDatePicker from "common/DatePicker/MyDatePicker";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <ErrorNotificationDialog />
      <PageLoader />
      <AppRoutes />
    </div>
  );
}

export default App;
