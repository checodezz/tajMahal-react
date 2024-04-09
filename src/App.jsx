import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Overview from "./pages/Overview";

export default function App() {
  return (
    <main>
      <Header />
      <Overview/>
      <Footer/>
    </main>
  );
}
