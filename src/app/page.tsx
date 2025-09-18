import Acomodacao from "@/widgets/acomodacoes";
import Footer from "@/widgets/footer";
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
    <hr className="my-6 opacity-10" />
    <main className="container mx-auto">
      <HorizontalTabNav />
      <Acomodacao />
    </main>
    <footer className="bg-gray-200">
        <Footer />
    </footer>
    </>
  );
}
