"use client"
import foto from "../../../public//exames.jpg"
import { InfrastructureCard } from "../_components/infrastructure/InfrastructureCard"

export default function Test(){
    return(
        <div className="p-20 bg-slate-100">

            <InfrastructureCard
                title="Consultórios Modernos"
                image={foto}
            />

        </div>
    )
}

