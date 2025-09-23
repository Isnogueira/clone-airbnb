import { IconUserCircle } from "@/assets/icons"
import IconButton from "@/components/iconButton"
import Logo from "@/components/logo"
import Link from "next/link"

const Navbar = () =>{
    return(
        <div className="py-6 flex flex-col justify-between items-center md:flex-row lg:flex-row xl:flex-row">
            <Logo />
            <div  className="flex flex-row items-center gap-6 py-4">
                <Link className="font-semibold hover:opacity-100" href="/acomodacoes">Acomodações</Link>
                <Link className="opacity-60 hover:opacity-100 " href="/experiencias">Experiências</Link>
                {/* <Link className="opacity-60" href="/servicos">Servicos</Link> */}
            </div>
             
           <IconButton 
           icon={(
           <IconUserCircle 
            aria-label="Ícone de usuário" 
            size={20}
                />
            )} >
            Entrar
           </IconButton>
        </div>
    )
}

export default Navbar