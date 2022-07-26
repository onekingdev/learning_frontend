import { FC, useEffect, useState } from 'react';
import { FormControlLabel, Paper, Checkbox } from '@mui/material';

interface IStudents {
    students: Array<any>
    onChange: (param: any) => void
}

export const StudentsCheckbox: FC<IStudents> = ({ students, onChange }) => {

    const [selected, setSeleted] = useState<Array<number>>([])
    const [all, setAll] = useState(false)

    console.log({ selected })
    const handleStudentSelect = (id: number) => {

        const tempSeleted = [...selected]
        if (tempSeleted.includes(id)) {
            const filtered = tempSeleted.filter(element => { return element !== id })
            setSeleted(filtered)
        } else setSeleted([...tempSeleted, id])
    }
    const handleSelectAll = () => {
        setAll(!all)
    }

    useEffect(() => {
        onChange(selected)
    }, [selected])

    return (
        <Paper sx={{
            width: 300,
            background: '#22BAAF33',
            // padding: '30px 50px',
            display: 'flex',
            alignItems: 'start',
            flexDirection: 'column'
        }}>
            {/* <FormControlLabel
                label={'All'}
                value={-1}
                sx={{
                    marginLeft: 5
                }}
                control={
                    <Checkbox checked={all} onChange={handleSelectAll} />
                }
            /> */}
            {
                students.map(student => (
                    <FormControlLabel
                        key={student.id}
                        label={student.fullName || ''}
                        value={student.id}
                        sx={{
                            marginLeft: 5
                        }}
                        control={
                            <Checkbox checked={selected.includes(+student.id) || all} onChange={() => handleStudentSelect(+student.id)} />
                        }
                    />
                ))
            }
        </Paper>
    )

}
