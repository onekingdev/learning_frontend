import { FC, useEffect, useState } from 'react';
import { FormControlLabel,  Checkbox,  FormGroup } from '@mui/material';

interface IStudents {
    students: Array<any>
    onChange: (param: any) => void
}

export const StudentsCheckbox: FC<IStudents> = ({ students, onChange }) => {

    const [selected, setSeleted] = useState<Array<number>>([])
    // const [all, setAll] = useState(false)

    const handleStudentSelect = (id: number) => {

        const tempSeleted = [...selected]
        if (tempSeleted.includes(id)) {
            const filtered = tempSeleted.filter(element => { return element !== id })
            setSeleted(filtered)
        } else setSeleted([...tempSeleted, id])
    }
    // const handleSelectAll = () => {
    //     setAll(!all)
    // }

    useEffect(() => {
        onChange(selected)
    }, [selected])

    return (
        <FormGroup>
            {
                students.map(student => (
                    <FormControlLabel
                        key={student.id}
                        label={student.fullName || ''}
                        value={student.id}
                        control={
                            <Checkbox checked={selected.includes(+student.id)} onChange={() => handleStudentSelect(+student.id)} />
                        }
                    />
                ))
            }
        </FormGroup>
    )

}
