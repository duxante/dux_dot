import './App.css';
import AnyQuestions from './features/anyQuestions/anyQuestions';
import DashBoardTemplate from './features/dashBoardTemplate/dashBoardTemplate';
import Faq from './features/faq/faq';
import FeatureHighlights from './features/featureHighlights/featureHighlights';
import FlexibileComponents from './features/flexibileComponents/flexibileComponents';
import FooterDuxDot from './features/footerDuxDot/footerDuxDot';
import ForDesigner from './features/forDesigner/forDesigner';
import HomeView from './features/homeView/homeView';
import LastAdvertisemenet from './features/lastAdvertisemenet/lastAdvertisemenet';
import NavigationView from './features/navigation/navigationView';
import RightBusinessPlan from './features/rightBusinessPlan/rightBusinessPlan';
import UIKitView from './features/uIKitView/uIKitView';

function App() {
  return (
    <>
      <NavigationView />
      <HomeView />
      <UIKitView />
      <FlexibileComponents />
      <FeatureHighlights />
      <ForDesigner />
      <RightBusinessPlan />
      <Faq />
      <AnyQuestions />
      <DashBoardTemplate />
      <LastAdvertisemenet />
      <FooterDuxDot />
    </>
  );
}

export default App;
