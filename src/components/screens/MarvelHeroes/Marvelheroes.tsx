import { useEffect, useState } from "react";
import { IHeroes } from "../../../types/IHeroes";
import { heroesData } from "../../../data/heroes";
import { ListHeroes } from "../../UI/ListHeroes/ListHeroes";

export const Marvelheroes = () => {
    const [heros, setHeros]= useState<IHeroes[]>([])

    const handleGetHeroesMarvel=()=>{
        const result = heroesData.filter((hero)=>hero.publisher==="Marvel Comics");
        setHeros(result)
    
    }
    useEffect(()=>{
        handleGetHeroesMarvel()
    },[])
    
      return (
        <ListHeroes heroes={heros} title="Heroes De Comics"/>
      )
}

