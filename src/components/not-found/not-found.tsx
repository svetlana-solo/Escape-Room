import { Link } from 'react-router-dom';
import * as S from './not-found.styled';
import { AppRoute } from 'const';

export default function NotFound(): JSX.Element {
  return (
    <S.Main>

      <h1> 404 Error.</h1>
      <Link to={AppRoute.Main}>Вернуться на главную страницу</Link>

    </S.Main>
  );
}

