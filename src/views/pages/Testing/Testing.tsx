import {FC} from 'react';
import {Avatar} from '../../atoms/Avatar';

export const Testing: FC = () => {
  const dudes = [
    {skin: '#684939', shadow: '#4F3528'},
    {skin: '#9D6E56', shadow: '#8B5E46'},
    {skin: '#DBA488', shadow: '#C98B6C'},
    {skin: '#FED1B9', shadow: '#FABB8C'},
  ];
  const things = ['#6b93e9', '#a35fbe', '#abd692', '#aca4a7'];
  return (
    <div>
      <div style={{margin: '6rem'}}>
        {dudes.map(color => {
          return <Avatar skin={color.skin} shadow={color.shadow} />;
        })}
      </div>
      <div style={{margin: '6rem'}}>
        {things.map(color => {
          return <Avatar skin={color} />;
        })}
      </div>
    </div>
  );
};
