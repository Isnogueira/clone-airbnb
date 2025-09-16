import Navbar from "@/widgets/navbar";

export default function Home() {
  return (
    <>
    <header>
      <div className="container">
          <Navbar />
      </div>
    </header>
    <hr />
    <div className="border-green-500 border-2">Área conteúdos</div>
    <div className="border-purple-500 border-2">Rodapé</div>
    </>
  );
}
