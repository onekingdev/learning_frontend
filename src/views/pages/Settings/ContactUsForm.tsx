import {FC} from 'react'
import { Form } from './Form'
import { Field } from './Field'

export const ContactUsForm: FC = () => {
  return (
    <Form
    action='localhost/bruce'
    >

      <Field id='name' label='Name' />
    </Form>
  )
}
