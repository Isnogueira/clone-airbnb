
interface IconButtonProps{
    icon: React.ReactNode
    children: React.ReactNode
}

const IconBotton = (props: IconButtonProps) =>{
      return(
        <>
             <button className="button-sign-in">
                <span>{props.icon}</span>
                <span>{props.children}</span>
            </button>
        </>
    )
}

export default IconBotton