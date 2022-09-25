import { PropsWithChildren } from 'react';
import * as S from './page-subtext.styled';

export default function PageSubtext({ children, ...props }: PropsWithChildren): JSX.Element {
  return (
    <S.PageSubtext {...props}>{children}</S.PageSubtext>
  );
}
