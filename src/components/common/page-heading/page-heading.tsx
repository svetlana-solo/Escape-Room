
import { PropsWithChildren } from 'react';
import * as S from './page-heading.styled';

export default function PageHeading({ children, ...props }: PropsWithChildren): JSX.Element {
  return (
    <S.PageHeading {...props}>{children}</S.PageHeading>
  );
}
