import Acomodacao from "@/widgets/acomodacoes";
import HorizontalTabNav from "@/widgets/horizontal-tab-nav";
import Navbar from "@/widgets/navbar";
import Seachbar from "@/widgets/seachbar";

export default function Home() {
  return (
    <>
    <header className="container mx-auto">
          <Navbar />   
          <Seachbar />
    </header>          
    <hr className="my-3 opacity-10" />
    <main className="container mx-auto">
      <HorizontalTabNav />
      <Acomodacao />
    </main>
    <footer className="container mx-auto">
        Rodapé
    </footer>
    </>
  );
}
