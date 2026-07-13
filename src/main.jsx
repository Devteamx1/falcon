import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/theme.css";
import "./styles/animations.css";
import { AuthProvider } from "./context/AuthContext.jsx";
import { Provider } from "react-redux";
import store from "./redux/store/store.js"
import { Toaster } from "react-hot-toast";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <Provider store={store}>
      <BrowserRouter>
      <AuthProvider>
        <App />
        <Toaster
          position="top-right"
          reverseOrder={false}
          gutter={10}
          toastOptions={{
            duration: 3000,
            style: {
              background: "#ffffff",
              color: "#0f172a",
              borderRadius: "12px",
              padding: "14px 18px",
              fontSize: "14px",
              fontWeight: "500",
              boxShadow:
                "0 10px 30px rgba(0,0,0,0.12)",
            },
            success: {
              iconTheme: {
                primary: "#22c55e",
                secondary: "#fff",
              },
            },
            error: {
              iconTheme: {
                primary: "#ef4444",
                secondary: "#fff",
              },
            },
          }}
        />
        </AuthProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);