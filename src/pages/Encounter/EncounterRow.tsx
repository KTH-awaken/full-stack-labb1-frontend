import { ReactNode } from "react"
import { EncounterApi, ObservationApi } from "../../api/types/encounter"
import { AccordionContent, AccordionItem, AccordionTrigger } from "../../components/ui/accordion"
import { Card } from "../../components/ui/card"
import { uid } from "../../helpers/helpers"


const EncounterRow = ({ encounter, children, className }: { encounter: EncounterApi, children?: ReactNode, className?: string }) => {
    return (

        <Card className={`mb-3`}>
            <AccordionItem value={encounter.title} className={`border-b-0 data-[state=open]:border-l-8 border-primary px-5 py-2 rounded-2xl bg-background ${className}`} >
                <AccordionTrigger className="hover:no-underline">
                    <p>{encounter.title}</p>
                </AccordionTrigger>
                <AccordionContent >
                    <div className="flex flex-col gap-3">
                        <div>
                            <p className="font-semibold text-foreground/50 mb-1">Details</p>
                            <p>{encounter.description}</p>
                        </div>
                        <div>
                            <p className="font-semibold text-foreground/50 mb-1">Date</p>
                            <p>{encounter.date.substring(0, 10)}</p>
                        </div>
                        <div>
                            <p className="font-semibold text-foreground/50 mb-1">Time</p>
                            <p> {encounter.date.substring(11, 16)}</p>
                        </div>
                        <div>
                            <p className="font-semibold text-foreground/50 mb-1">Doctor</p>
                            <p>{encounter.doctor.firstName.concat(" "+encounter.doctor.lastName)}</p>
                        </div>
                        <div>

                            <p className="font-semibold text-foreground/50 mb-1">Observations</p>
                            <ul>
                                {encounter.observations.map((o: ObservationApi) => <div key={o.id} className="flex gap-2 items-center mb-1 pl-2">
                                    <span className="w-2 h-2 block rounded-full bg-primary/80"></span>
                                    <li key={uid()}>{o.description}</li>
                                </div>)}
                            </ul>
                        </div>
                    </div>


                    {children}

                    {/* <Button className="bg-primary/10 hover:bg-primary/20  text-primary/80">More details</Button> */}

                </AccordionContent>
            </AccordionItem>
        </Card>

    )
}

export default EncounterRow
