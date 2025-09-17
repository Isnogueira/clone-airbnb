import { IconUserCircle } from "@/assets/icons"
import IconButton from "@/components/iconButton"
import Logo from "@/components/logo"
import Link from "next/link"

const Navbar = () =>{
    return(
        <> 
            <Logo />
            <nav>
                <Link className="link-acomodacoes" href="/acomodacoes">Acomodações</Link>
                <Link className="link-experiencias" href="/experiencias">Experiências</Link>
                {/* <Link className="link-servicos" href="/servicos">Servicos</Link> */}
            </nav>
             
           <IconButton 
           icon={(
           <IconUserCircle 
            aria-label="Ícone de usuário" 
            size={20}
                />
            )} >
            Entrar
           </IconButton>
        </>
    )
}

export default Navbar