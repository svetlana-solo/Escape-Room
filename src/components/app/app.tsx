import { ThemeProvider } from 'styled-components';
import {
  Routes, Route
} from 'components/common/common';
import DetailedQuest from 'components/detailed-quest/detailed-quest';
import Contacts from 'components/contacts/contacts';
import Home from 'components/home/home';
import { useAppSelector } from 'hooks';
import { getQuestsDataLoadedStatus } from 'store/quests-data/selectors';
import { AppRoute, LoadingStatus } from '../../const';
import HistoryRouter from 'components/history-router/history-router';
import browserHistory from 'components/browser-history';
import NotFound from 'components/not-found/not-found';
import LoadingScreen from 'components/loading-screen/loading-screen';
import { appTheme } from './common';
import * as S from './app.styled';


export default function App(): JSX.Element {
  const questsLoadingStatus = useAppSelector(getQuestsDataLoadedStatus);

  if (
    questsLoadingStatus === LoadingStatus.Idle || questsLoadingStatus === LoadingStatus.Pending
  ) {
    return <LoadingScreen />;
  }

  if (questsLoadingStatus === LoadingStatus.Rejected) {
    return <NotFound />;
  }
  return (
    <HistoryRouter history={browserHistory}>
      <ThemeProvider theme={appTheme}>
        <S.GlobalStyle />
        <Routes>
          <Route path={AppRoute.DetailedQuest} element={<DetailedQuest />} />
          <Route path={AppRoute.Contacts} element={<Contacts />} />
          <Route path={AppRoute.Main} element={<Home />} />
          <Route path={AppRoute.NotFound} element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </HistoryRouter>
  );
}
