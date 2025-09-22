import Link from "next/link"

const Footer = () => {
    return (
        <div className="container mx-auto py-8">
            <span className="text-lg font-semibold pb-4">&copy; AirBnb INC</span>
            <ul className="flex flex-row gap-2">
                <li className="hover:text-red-500"><Link href="/">Privacidade</Link></li>
                <li>&middot;</li>
                <li className="hover:text-red-500"><Link href="/">Termos</Link></li>
                <li>&middot;</li>
                <li className="hover:text-red-500"><Link href="/">Mapa do site</Link></li>
                <li>&middot;</li>
                <li className="hover:text-red-500"><Link href="/">Informações da empresa</Link></li>
            </ul>
        </div>
    )
}

export default Footer