import RootStack from './app/modules/navigation/RootStack';
import { AuthProvider } from './app/modules/providers/AuthProvider';
import { TailwindProvider } from 'tailwind-rn';
import utilities from './tailwind.json';
import { DataProvider } from './app/modules/providers/DataProvider';
import StoryContainer from './app/components/StoryContainer/StoryContainer';

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <AuthProvider>
        <DataProvider>
          <StoryContainer />
          <RootStack />
        </DataProvider>
      </AuthProvider>
    </TailwindProvider>
  );
}