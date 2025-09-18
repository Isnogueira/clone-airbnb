import { IconSearch } from "@tabler/icons-react";

const Seachbar = () =>{
    return(
       <div className="border-1 border-gray-200 shadow-lg rounded-full flex items-center px-3 py-2 mx-auto w-full max-w-2xl">
        <input className="w-full focus:outline-none px-3"
         type="text" placeholder="Inicie sua pesquisa" />  
        <button className="bg-red-500 rounded-full p-2 cursor-pointer
">
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