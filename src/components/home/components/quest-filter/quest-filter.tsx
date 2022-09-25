import * as S from './quest-filter.styled';
import IconAllQuests from 'assets/img/icon-all-quests.svg';
import IconAdventures from 'assets/img/icon-adventures.svg';
import IconHorrors from 'assets/img/icon-horrors.svg';
import IconMystic from 'assets/img/icon-mystic.svg';
import IconDetective from 'assets/img/icon-detective.svg';
import IconScifi from 'assets/img/icon-scifi.svg';
import { QuestGenre } from '../../../../const';
import { useAppDispatch } from 'hooks';
import { changeGenre } from 'store/app-process/app-process';

type QuestFilterPropsType = {
  activeQuestGenre: string;
}

const createGenreIcon = (genre: string) => {
  switch (genre) {
    case 'all-quests':
      return <IconAllQuests />;
    case 'adventures':
      return <IconAdventures />;
    case 'horror':
      return <IconHorrors />;
    case 'mystic':
      return <IconMystic />;
    case 'detective':
      return <IconDetective />;
    case 'sci-fi':
      return <IconScifi />;
    default:
      throw new Error(`${genre} не существует`);
  }
};

function QuestFilter({ activeQuestGenre }: QuestFilterPropsType): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <S.Tabs>
      {Object.keys(QuestGenre).map((genre) => {
        const isActive = activeQuestGenre === genre;

        return (
          <S.TabItem key={genre} onClick={() => {
            dispatch(changeGenre(genre));
          }}
          >
            <S.TabBtn isActive={isActive}>
              {createGenreIcon(genre)}
              <S.TabTitle>{QuestGenre[genre]}</S.TabTitle>
            </S.TabBtn>
          </S.TabItem>
        );
      }
      )}
    </S.Tabs>
  );
}
export default QuestFilter;
