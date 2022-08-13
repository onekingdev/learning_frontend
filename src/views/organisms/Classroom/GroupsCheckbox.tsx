import { FC,  useState } from 'react';
import { FormControlLabel,  Radio, FormControl,  RadioGroup } from '@mui/material';

interface IStudents {
    groups: Array<any>
    onChange: (param: any) => void
}

export const GroupsCheckbox: FC<IStudents> = ({ groups, onChange }) => {

    const [selected, setSelected] = useState<string>('')

    const handleChange = (id: any) => {
        setSelected(id)
        const selectedGroup = groups.find(group => group.id === id)
        const selectedStudents = selectedGroup.studentSet.map((item: any) => item.id)
        onChange(selectedStudents)
    }

    return (
        <FormControl>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                value={selected}
                onChange={(e) => handleChange(e.target.value)}
            >
                {
                    groups.map(group => (
                        <FormControlLabel value={group.id} control={<Radio />} label={group.name} key={group.id} />
                    ))
                }
            </RadioGroup>
        </FormControl>
    )

}
