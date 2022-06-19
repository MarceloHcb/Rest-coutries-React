import { useState, useContext } from "react"
import { ThemeContext } from "../../data/Context/theme-context/theme-context"
import { FaAngleDown } from "react-icons/fa"
import { GiMagnifyingGlass } from "react-icons/gi"
import "./SearchComponent.css"
export const SearchComponent = (props) => {

    const { theme } = useContext(ThemeContext)
    const [names, setNames] = useState(["Africa", "America", "Asia", "Europe", "Oceania"])
    const [selected, setSelected] = useState("Filter by Region")
    const [check,setCheck] = useState(false)
    const [input, setInput] = useState()    
    function handleInputSearch(e) {
        e.preventDefault()
        if(input.length > 0 ){
        return (props.setUrl(`https://restcountries.com/v3.1/name/${input}`))
    }
    }    

    function handleSelected(region) {
        setSelected(region)
        props.setUrl(`https://restcountries.com/v3.1/region/${region}`) 
        setCheck(false)       
    }
    return (
        <>
            <div className="search">
                <form onSubmit={handleInputSearch}>
                    <input onChange={(e) => setInput(e.target.value)} className="inputSearch" type={"search"} placeholder={"Search for a country"} value={input} style={{ background: theme.elements, color: theme.color }} />
                    <button type="submit" className="btn"><GiMagnifyingGlass style={{ color: theme.color }} className="magnifyingGlass" /></button>

                </form>
                <button className="bt" onClick={() =>props.setJs(props.js===true?false :true)} style={{ background: theme.elements, color: theme.color }}><span>A-Z</span> </button>
                <div className="select">
                    <input type={"checkbox"} id="toggle" checked={check} onClick={()=> setCheck(true)}/>
                    <label htmlFor="toggle" className="display" style={{ background: theme.elements }}>
                        
                        <span className="text" style={{ color: theme.color }} >{selected}</span>
                        <span className="arrow" style={{ color: theme.color }} >
                            <FaAngleDown />
                        </span>
                    </label>
                    <ul className="list" style={{ background: theme.elements, color: theme.color }} >
                        {names.map((name, index) => { return <li key={index} onClick={() => handleSelected(name)}>{name}</li> })}

                    </ul>
                   
                </div>
                
            </div>
        </>
    )
}