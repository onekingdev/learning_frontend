import {FC} from 'react';
import {BasicColor} from '../../Color';
import {H1, H2, H3, H4, H5, H6} from './Style';

type HeadlineProps = {
  body: string;
  isBold?: boolean;
  isDark?: boolean;
};

export const Headline1: FC<HeadlineProps> = ({
  body,
  isBold = false,
  isDark = false,
}) => {
  return (
    <H1
      style={{
        fontWeight: isBold ? 600 : 300,
        color: isDark ? BasicColor.black : BasicColor.white,
      }}
    >
      {body}
    </H1>
  );
};

export const Headline2: FC<HeadlineProps> = ({
  body,
  isBold = false,
  isDark = false,
}) => {
  return (
    <H2
      style={{
        fontWeight: isBold ? 600 : 300,
        color: isDark ? BasicColor.black : BasicColor.white,
      }}
    >
      {body}
    </H2>
  );
};

export const Headline3: FC<HeadlineProps> = ({
  body,
  isBold = false,
  isDark = false,
}) => {
  return (
    <H3
      style={{
        fontWeight: isBold ? 600 : 300,
        color: isDark ? BasicColor.black : BasicColor.white,
      }}
    >
      {body}
    </H3>
  );
};

export const Headline4: FC<HeadlineProps> = ({
  body,
  isBold = false,
  isDark = false,
}) => {
  return (
    <H4
      style={{
        fontWeight: isBold ? 600 : 300,
        color: isDark ? BasicColor.black : BasicColor.white,
      }}
    >
      {body}
    </H4>
  );
};

export const Headline5: FC<HeadlineProps> = ({
  body,
  isBold = false,
  isDark = false,
}) => {
  return (
    <H5
      style={{
        fontWeight: isBold ? 600 : 300,
        color: isDark ? BasicColor.black : BasicColor.white,
      }}
    >
      {body}
    </H5>
  );
};

export const Headline6: FC<HeadlineProps> = ({
  body,
  isBold = false,
  isDark = false,
}) => {
  return (
    <H6
      style={{
        fontWeight: isBold ? 600 : 500,
        color: isDark ? BasicColor.black : BasicColor.white,
      }}
    >
      {body}
    </H6>
  );
};
