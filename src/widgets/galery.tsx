import Image from "next/image"

type Foto = {
    id: string
    source: string
    description: string
}

interface propsGalery{
    photos: Foto[]
}

const Galery = ({photos}: propsGalery) =>{
    return (
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
            {photos.slice(0,9).map((photo, indice) => {

                const primeiraFoto = indice == 0 ? 'col-span-2 row-span-2': ''    

                return (
                    <div className={`${primeiraFoto}`} key={indice}>
                        <Image 
                        className="w-full aspect-square object-cover rounded-lg"
                        src={photo.source}
                        alt={photo.description}
                        width={1280}
                        height={720}
                        ></Image>
                    </div>
                )
                
            })}
        </div>
    )
}

export default Galery