import Logo from "@/components/logo/logo"
import Link from "next/link"

const Navbar = () =>{
    return(
        <> 
            <Logo />
            <nav>
                <Link className="link-acomodacoes" href="/acomodacoes">Acomodações</Link>
                <Link className="link-experiencias" href="/experiencias">Experiências</Link>
                <Link className="link-servicos" href="/servicos">Servicos</Link>
            </nav>
            <button>Entrar</button>
        </>
    )
}

export default Navbar