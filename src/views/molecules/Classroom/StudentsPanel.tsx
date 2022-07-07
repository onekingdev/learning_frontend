import chair      from 'views/assets/chair.svg'
import {
    Container,
    StudentItem,
    StudentText }             from './Style'
const StudentPanel = (props: any) => {

  const data = props.data;
  return (
    <Container>
    {
      data.map((item:any, index: number) =>
      <StudentItem key={index} onClick={() => {props.onStudent(item)}}>
          <img src={chair} />
          <StudentText>{item.name}</StudentText>
      </StudentItem>
      )
    }
      <StudentItem onClick={() => {props.onNew()}}>
          <img src={chair} />
      </StudentItem>
    </Container>
  )
}

export default StudentPanel
