import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useThemeContext } from "./hooks/useThemeContext";
import Home from "./pages/Home";
import Contactme from "./pages/Contactme";
import Topnavbar from "./components/navbar/Topnavbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { theme } = useThemeContext();
  return (
    <>
      <BrowserRouter>
        <main className={`${theme} bg-sky-100`}>
          <Topnavbar></Topnavbar>
          <div className="dark:bg-slate-900 dark:text-white">
            <Routes>
              <Route index path="/" element={<Home />}></Route>
              <Route path="/contact" element={<Contactme />}></Route>
            </Routes>
          </div>
        </main>
      </BrowserRouter>
      <ToastContainer
        position="top-center"
        draggable
        autoClose={2000}
        hideProgressBar={true}
      ></ToastContainer>
    </>
  );
}

export default App;
