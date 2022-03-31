import { FC, useEffect, useState } from 'react';
import { useSelector }             from 'react-redux';
import {
  getCardPacksInfo,
} from 'app/actions/collectibleActions';
import { MyCardsCategory } from './CategoryCards'

export const MyCards: FC = () => {
  const user = useSelector((state: any) => state.user);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let ignore = false;
    const fetchCategories = async () => {
      const names = await getCardPacksInfo(user.token);
      if (!ignore) {
        if (names.msg) {
          setCategories([]);
        } else {
          setCategories(names);
        }
      }
    };

    fetchCategories();
    return () => {
      ignore = true;
    };
  }, []);

  return <MyCardsCategory cards={categories} />;
};
