import './App.css';
import FeatureHighlights from './features/featureHighlights/featureHighlights';
import FlexibileComponents from './features/flexibileComponents/flexibileComponents';
import ForDesigner from './features/forDesigner/forDesigner';
import HomeView from './features/homeView/homeView';
import NavigationView from './features/navigation/navigationView';
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
    </>
  );
}

export default App;
