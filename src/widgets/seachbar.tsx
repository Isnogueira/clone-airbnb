import { IconSearch } from "@tabler/icons-react";

const Seachbar = () =>{
    return(
       <div className="search-bar">
        <input className="input-search"
         type="text" placeholder="Digite sua pesquisa" />  
        <button className="button-search">
            <IconSearch 
            color="white"
            aria-label="Pesquisa" 
            size={32}
                />
        </button>    
     </div>
    )
}

export default Seachbar;