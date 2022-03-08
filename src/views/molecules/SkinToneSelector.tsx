import {FC} from 'react'
import styled from 'styled-components';
import { SkinToneButton } from 'views/atoms/SkinToneButton';

export const SkinToneSelector:FC = () => {
    const skins = [
    {
        color: '#684939',
        shadow: '#4F3528'
    },
    {
        color: '#9D6E56',
        shadow: '#8B5E46'
    },
    {
        color: '#DBA488',
        shadow: '#C98B6C'
    },
    {
        color: '#FED1B9',
        shadow: '#FABB8C'
    }]
    return(
        <>
            <SkinSelectorStyles>
                {skins.map(skin =>
                <SkinToneButton color={skin.color}/>
                )}
            </SkinSelectorStyles>
        </>
    )
}

const SkinSelectorStyles = styled.div`
    width: 50px;
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-rows: repeat(auto-fit, 50px);
    height: auto;
`
