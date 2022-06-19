import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../../data/Context/theme-context/theme-context"
import "./AllElements.css"
import { BaseUrl } from "../../data/variables/BaseUrl"
import { Link } from "react-router-dom"
import { SearchComponent } from "../SearchComponent/SearchComponent"

export const AllElements = () => {
    const { theme } = useContext(ThemeContext)    
    const [countries, setCountries] = useState([])    
    const [url, setUrl] = useState(`${BaseUrl}`)
    const [js, setJs] = useState(true)
    const getCountry = async () => {
        
        const res = await fetch(url)
        const json = await res.json()
        setCountries(json)
        if(js===false){
            json=json.sort((a,b)=>{
                if (a.name.common < b.name.common)
                return -1;
                if (a.name.common > b.name.common)
                return 1;
                return 0;
            })
        }
    }

    useEffect(() => {
        getCountry()

    }, [url,js])    
    
    return (<>

        <main className="main" style={{ background: theme.background }}>         
        <SearchComponent setUrl={setUrl} setJs={setJs} js={js} />
        
            <div className="elements" style={{ background: theme.background }}  >
           
                {countries.map((country, index) => {
                    return (<>
                        <div className="element" key={index} style={{ background: theme.elements, color: theme.color }}>
                            <Link className="Link" to={`/${country.name.common}`}>
                                <img src={country.flags.png} alt={country.name.common}></img>

                                <div className="info" style={{ background: theme.elements, color: theme.color }}>
                                    <h2>{country.name.common}</h2>
                                    <p><span> Population:  </span> {country.population}</p>
                                    <p><span> Region:  </span>{country.region}</p>
                                    <p><span> Capital:  </span>{country.capital}</p>

                                </div>
                            </Link>
                        </div>
                    </>)

                })}

            </div>
        </main>
    </>)
}