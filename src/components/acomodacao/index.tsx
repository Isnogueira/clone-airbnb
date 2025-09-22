import { IconHeartFilled, IconStarFilled } from "@/assets/icons"

interface AcomodacaoProps{
    children: React.ReactNode
    local: string
    anfitriao: string
    data: string
    preco: number
    nota: number
    preferidoHospedes: boolean
}
const Acomodacao = ({children, local, anfitriao, data, preco, nota, preferidoHospedes}: AcomodacaoProps) =>{
      return(
        <figure className="relative">
            <div className="absolute flex flex-row justify-between items-center w-full p-2 ">
                <div>
                    {preferidoHospedes &&(
                        <span  className="bg-white rounded-full px-4 py-1 font-semibold">Preferido dos Hóspedes</span>

                    )}
                </div>
                    <IconHeartFilled className="stroke-white opacity-80"
                    aria-label="Favoritos" 
                    size={30}
                    />
            </div>
            {children}
            <figcaption>
                <div className="flex flex-row justify-between">
                    <h2 className="font-semibold">{local}</h2>
                    <div className="flex flex-row">
                     <IconStarFilled className="stroke-white opacity-80"
                    aria-label="Avaliações" 
                    size={16}
                    />
                     <p className="font-semibold"> {nota}</p>
                    </div>
                    
                </div>
                <div>{anfitriao}</div>
                <div>{data}</div>
                <div className="font-semibold">R$ {preco}</div>
            </figcaption>

        </figure>
        
    )
}

export default Acomodacao