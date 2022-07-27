import { useSelector } from 'react-redux'
import groupsImg from 'views/assets/studentGroups.svg'
import newGroupImg from 'views/assets/newStudentGroup.svg'
import commonDictionary from 'constants/commonDictionary'

import {
  Container,
  GroupItem,
  GroupMark,
  GroupText
} from './Style'
import { FC } from 'react';

interface GroupsPanelProps {
  groups: Array<any>
  onGroup: (param: any) => void
  onNew: () => void
}

const GroupsPanel:FC<GroupsPanelProps> = ({groups, onGroup, onNew}) => {
  const { language } = useSelector((state: any) => state.user)

  return (
    <Container>
      {
        groups.map((item: any, index: number) =>
          <GroupItem key={index} onClick={() => { onGroup(item) }}>
            <GroupMark src={groupsImg} />
            <GroupText>{item.name}</GroupText>
          </GroupItem>
        )
      }
      <GroupItem onClick={() => { onNew() }}>
        <GroupMark src={newGroupImg} />
        <GroupText>{commonDictionary[language]?.add_new}</GroupText>
      </GroupItem>
    </Container>
  )
}

export default GroupsPanel
