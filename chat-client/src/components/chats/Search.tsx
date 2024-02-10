import { useContext } from "react"
import { searchContext } from "../../context/searchContext"

function Search() {
    const { setSearch } : any = useContext(searchContext)
    
    return (
        <div>
            <input type="text" onChange={e => setSearch(e.target.value)}/>
        </div>
    )
}

export default Search