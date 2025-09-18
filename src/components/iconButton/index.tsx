
interface IconButtonProps{
    icon: React.ReactNode
    children: React.ReactNode
}

const IconBotton = (props: IconButtonProps) =>{
      return(
        <>
             <button className="border-2 border-gray-200 rounded-xl px-4 py-2 flex items-center hover:border-gray-400">
                <span>{props.icon}</span>
                <span>{props.children}</span>
            </button>
        </>
    )
}

export default IconBotton