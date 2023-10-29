//CARELAGE PEINTURE PARQUET PLOMBERIE ELECTRICITE MEUBLE REAMENAGEMENT AMENAGEMENT(creation d'une nouvelle piece) 

import ProductSimple from "@/components/pageServiceCard"
import { Button, Heading } from "@chakra-ui/react"
import React from "react"
import description from '../components/pageServiceCard/description.json'
import LargeWithLogoCentered from "../components/footer"

const PageService = () => {

    const findDescription = (nom:string) =>{
        const foundDescription = description.find(one => one.nom == nom)
        return foundDescription ? foundDescription.description : "Pas de description"
    }
    const cards: Array<any> = 
    [
        <ProductSimple image="/cardImages/carrelageImg.jpg" title="Carrelage" categorie="Revêtement de Sol" description={findDescription("Carrelage")} />,
        <ProductSimple image="/cardImages/peintureImg.jpg" title="Peinture" categorie="Agencement et Décoration" description={findDescription("Peinture")} />,
        <ProductSimple image="/cardImages/parquetImg.jpg" title="Parquet" categorie="Revêtement de Sol" description={findDescription("Parquet")} />,
        <ProductSimple image="/cardImages/plomberieImg.jpg" title="Plomberie" categorie="Services Techniques" description={findDescription("Plomberie")} />,
        <ProductSimple image="/cardImages/electriciteImg.jpeg" title="Électricité " categorie="Services Techniques" description={findDescription("Électricité")} />,
        <ProductSimple image="/cardImages/meubleImg.jpg" title="Meuble" categorie="Agencement et Décoration" description={findDescription("Meuble")} />,
        <ProductSimple image="/cardImages/reamenagementImg.jpg" title="Réaménagement" categorie="Agencement et Décoration" description={findDescription("Réaménagement")} />,
        <ProductSimple image="/cardImages/amenagementImg.png" title="Aménagement" categorie="Agencement et Décoration" description={findDescription("Aménagement")} />
    ]

    const [filteredCard, setFilteredCard]: Array<any> = React.useState(cards)

    const filters : Array<any> = [
        { nom: "Tout", clicked: true },
        { nom: "Revêtement de Sol", clicked: false },
        { nom: "Services Techniques", clicked: false },
        { nom: "Agencement et Décoration", clicked: false }
    ];


    const filterCard = (filter:string)=>{
        if(filter != "Tout"){
            const filteredArrayCard = cards.filter((item)=> item.props.categorie === filter)
            setFilteredCard(filteredArrayCard)
        }else{
            setFilteredCard(cards)
        }
        
    }   

    return(
        <div>
            <Heading textAlign={"center"} margin={"2% 0 2% 0"}>Découvrez nos services !</Heading>
            <div className="filtres">
                <h6>Filtres : </h6>
                {filters.map((filter:any)=>(
                    <Button key={filter.nom} onClick={()=>{filterCard(filter.nom)}} bg={"#f9af92"} _hover={{bg: "#abe0f2"}}>{filter.nom}</Button>
                ))}

            </div>
            <div className="cardContainer">
                {filteredCard.map((card:any, index:any) => (
                    <div key={index}>{card}</div>
                ))}
                
            </div>
            <LargeWithLogoCentered/>
        </div>
        
    )
}

export default PageService

