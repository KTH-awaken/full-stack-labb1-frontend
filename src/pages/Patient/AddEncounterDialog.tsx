import { UsersIcon } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTrigger, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "../../components/ui/dialog"
import { Label } from "../../components/ui/label"
import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"
import SelectPopover from "../../components/SelectPopover"
import { ReactNode, useState } from "react"
import { DatePicker } from "../../components/DatePicker"
import TimePicker from "../../components/TimePicker"
import CustomTooltip from "../../components/Tooltip"

interface Props {
    patientList: {
        label: string,
        value: string
    }[],
    customTrigger?:ReactNode
}

const AddEncounterDialog = ({ patientList,customTrigger }: Props) => {
    const [patient, setPatient] = useState("");
    const [date, setDate] = useState<Date>(new Date())
    const [time, setTime] = useState<{ hour: number, min: number }>({ hour: 0, min: 0 })
    const [title, setTitle] = useState("");

    const handleClick = () => {
        console.log(patient, date, time, title);

    }
    const Trigger = () => customTrigger ? customTrigger :
        <CustomTooltip desciption="Add Encounter">
            <UsersIcon size={22} />
        </CustomTooltip>

    return (
        <Dialog>
            <DialogTrigger>
                <Trigger/>
            </DialogTrigger>


            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Create new encounter</DialogTitle>
                    <DialogDescription>
                        Fill the information needed below. Click create when you're done.
                    </DialogDescription>
                </DialogHeader>


                <div className="grid gap-4 py-4">
                    <div className="grid grid-flow-col grid-cols-4  items-center ">
                        <Label className="col-span-1" >Title</Label>
                        <Input onChange={(e) => setTitle(e.target.value)} className="col-span-3" placeholder="Encounter title..." />
                    </div>

                    <div className="grid grid-flow-col grid-cols-4 items-center ">
                        <Label className="col-span-1">Patient</Label>
                        <SelectPopover
                            className="col-span-3"
                            title="patient"
                            list={patientList}
                            value={patient}
                            onValueChange={(newValue) => setPatient(newValue)}
                        />
                    </div>
                    <div className="grid grid-flow-col grid-cols-4 items-center ">
                        <Label className="col-span-1">Date</Label>
                        <DatePicker

                            date={date}
                            onDateChange={(newDate) => setDate(newDate)}

                        />
                    </div>
                    <div className="grid grid-flow-col grid-cols-4 items-center ">
                        <Label className="col-span-1">Time</Label>
                        <TimePicker onValueChange={(v) => setTime(v)} className="col-span-1 flex justify-start border px-4 py-[6px] rounded-md" />
                    </div>



                </div>

                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="secondary">Cancel</Button>
                    </DialogClose>
                    <Button onClick={handleClick} type="submit">Create</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default AddEncounterDialog