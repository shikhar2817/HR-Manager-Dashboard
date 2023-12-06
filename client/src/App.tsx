import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import NoPage from "./pages/Nopage";
import Layout from "./pages/Layout";
import { Dashboard } from "./pages/Dashboard";
import GlobalContextProvider from "./context/GlobalContextProvider";

function App() {
    return (
        <>
            <GlobalContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Home />} />
                            <Route path="/signup" element={<SignUp />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="*" element={<NoPage />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </GlobalContextProvider>
        </>
    );
}

export default App;
