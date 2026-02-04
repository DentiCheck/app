import { registerRootComponent } from 'expo';
import { BottomTabs } from './app/navigation/BottomTabs';

function App() {
    return <BottomTabs />;
}

registerRootComponent(App);
