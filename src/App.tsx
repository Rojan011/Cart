import { Route, Routes } from "react-router-dom";
import Container from "./components/Container";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { Bounce, ToastContainer } from "react-toastify";
import { FabButton } from "./components/FabButton/FabButton";
import { AutoSuggestExample } from "./pages/Search";

function App() {
  return (
    <ShoppingCartProvider>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<AutoSuggestExample/>}/>
        </Routes>
      </Container>
      <FabButton />
    </ShoppingCartProvider>
  );
}

export default App;
