import Navbar from "@/widgets/navbar";
import Seachbar from "@/widgets/seachbar";

export default function Home() {
  return (
    <>
    <header>
      <div className="container">
          <Navbar />
      </div>
    </header>          
    <Seachbar />
    <hr className="mt-5" />
    <div className="border-green-500 border-2">Área conteúdos</div>
    <div className="border-purple-500 border-2">Rodapé</div>
    </>
  );
}
