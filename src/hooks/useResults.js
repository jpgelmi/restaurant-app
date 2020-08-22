import {useEffect, useState} from "react"
import yelp from "../api/yelp"

export default() => {
    const[results, setResults] = useState([])
    const[errorMsj, setErrorMsj] = useState("")

    const searchApi = async(searchTerm) => {
        try{
            const response = await yelp.get("/search", {
                params:{
                    limit: 50,
                    term: searchTerm,
                    location: "Santiago"
                }
            })
        setResults(response.data.businesses)
        }catch(e){
            setErrorMsj("Upss... algo ocurrió")
        }
    }

    useEffect(()=> {
        searchApi("pasta")
    },[])

    return [ searchApi, results, errorMsj]

}