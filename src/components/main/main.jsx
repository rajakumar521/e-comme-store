import { useEffect, useState } from "react"
import Header from "../header/hearder"
import axios from "axios"
import Item from "../item/item"
const Main = () =>{
     const [oldSchool, setOldSchool] = useState([])
     const [bestSeller, setbestSeller] = useState([])
    useEffect(()=>{
         axios.get('http://localhost:1337/api/old-schools').then((oldSchool)=>{
            setOldSchool(oldSchool.data.data)
         }).catch(()=>{

         }).finally(()=>{

         });
         axios.get('http://localhost:1337/api/best-sellers').then((bestSeller)=>{
            setbestSeller(bestSeller.data.data)
        }).catch(()=>{

        }).finally(()=>{

        })
    }, [])
    return(
        <>
        <Header/>
        <section>
            <article>Best Sellers</article>
            {
                bestSeller.map((item, key)=>{
                  return <Item item={item.attributes}/>
                })
            }
            <article>Old School</article>
            {
                oldSchool.map((item, key)=>{
                    return <Item item={item.attributes}/>
                })
            }
        </section>
        </>
    )
}
export default Main