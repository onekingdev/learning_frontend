import { FC, useContext, useEffect, useState } from 'react';
import { GamesMenuContainer, GamesMenuTitleContainer, Wrapper } from './Styles';
import { GameCardPresentation } from '../../molecules/GameCardPresentation';
import { GameMenuButton } from '../../molecules/GameMenuButton';
import arcade from '../../assets/arcade.svg';
import learning from '../../assets/learn.svg';
import adventure from '../../assets/adventure.svg';
import sport from '../../assets/sports.svg';
import skill from '../../assets/skills.svg';
import strategy from '../../assets/strategy.svg'
import { BasicColor } from '../../Color';
import { StudentMenu } from '../../templates/StudentMenu';
import { dictionary } from './dictionary';
import { LoadingContext } from 'react-router-loading';
import {useParams } from 'react-router-dom';
import { getGameByCategory } from '../../../app/actions/gameActions'
import { setCoinWallet } from '../../../app/actions/studentActions'
import { useSelector, useDispatch } from 'react-redux'
import { Spinner } from 'views/atoms/Spinner';

interface GameCategoryParams {
  category: 'arcade' | 'learning' | 'adventure' | 'sport' | 'skill' | 'strategy';
}

interface GameCardParam {
  id: number,
  randomSlug: string
  image: string
  cost: number,
  playStats: number,
  name: string,
  path: string
}
export const GamesMenu: FC = () => {

  const loadingContext = useContext(LoadingContext);
  const {category} = useParams<GameCategoryParams>();
  const user = useSelector((state: any) => state.user)
  const student = useSelector((state: any) => state.student)
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false)
  const [gameCards, setGameCards] = useState<GameCardParam[]>([])

  const gameMenuImgs = {
    arcade : arcade,
    learning : learning,
    adventure : adventure,
    sport : sport,
    skill : skill,
    strategy : strategy,
  }

  const gameMenuColor = {
    arcade : BasicColor.red,
    learning : BasicColor.green,
    adventure : BasicColor.aqua,
    sport : BasicColor.blue,
    skill : BasicColor.purple,
    strategy: BasicColor.yellow,
  }

  // const gameCards = [
  //   {
  //     gameTitle: 'PRINCESS GOLDBLADE',
  //     image: imagen,
  //     gamePrice: 100,
  //   },
  //   {
  //     gameTitle: 'PRINCESS GOLDBLADE',
  //     image: imagen,
  //     gamePrice: 10,
  //   },
  //   {
  //     gameTitle: 'PRINCESS GOLDBLADE',
  //     image: imagen,
  //     gamePrice: 10,
  //   },
  //   {
  //     gameTitle: 'PRINCESS GOLDBLADE',
  //     image: imagen,
  //     gamePrice: 10,
  //   },
  //   {
  //     gameTitle: 'PRINCESS GOLDBLADE',
  //     image: imagen,
  //     gamePrice: 10,
  //   },
  //   {
  //     gameTitle: 'PRINCESS GOLDBLADE',
  //     image: imagen,
  //     gamePrice: 10,
  //   },
  //   {
  //     gameTitle: 'PRINCESS GOLDBLADE',
  //     image: imagen,
  //     gamePrice: 10,
  //   },
  //   {
  //     gameTitle: 'PRINCESS GOLDBLADE',
  //     image: imagen,
  //     gamePrice: 10,
  //   },
  //   {
  //     gameTitle: 'PRINCESS GOLDBLADE',
  //     image: imagen,
  //     gamePrice: 10,
  //   },
  //   {
  //     gameTitle: 'PRINCESS GOLDBLADE',
  //     image: imagen,
  //     gamePrice: 10,
  //   },
  //   {
  //     gameTitle: 'PRINCESS GOLDBLADE',
  //     image: imagen,
  //     gamePrice: 10,
  //   },
  // ];
  const lenguage = 'en';
  useEffect(() => {
    onComponentLoad();
  }, []);

  const onComponentLoad = async() => {
    await setCoinWallet(student.id, user.token, dispatch)
    await getGamesList();
    loadingContext.done();
  }

  const getGamesList = async () => {
    const result = await getGameByCategory(dictionary[lenguage][category], user.token, null)
    setGameCards(result.data)
  }
  if(loading)
    return (
      <Spinner />
    )
  return (
    <>
      <Wrapper>
        <StudentMenu>
          <GamesMenuTitleContainer>
            <GameMenuButton
              gameMode={dictionary[lenguage][category]}
              gameModeImage={gameMenuImgs[category]}
              color={gameMenuColor[category]}
              isButton={false}
            />
          </GamesMenuTitleContainer>
          <GamesMenuContainer>
            {gameCards.map((item, i) => (
              <GameCardPresentation
                gameName={item.name}
                gameImage={item.image}
                gamePath = {item.path}
                price={item.cost}
                token={user.token}
                setLoading={setLoading}
                key={i}
              />
            ))}
          </GamesMenuContainer>
        </StudentMenu>
      </Wrapper>
    </>
  );
};
