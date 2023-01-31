import RootStack from './app/modules/navigation/RootStack';
import { AuthProvider } from './app/modules/providers/AuthProvider';
import { TailwindProvider } from 'tailwind-rn';
import utilities from './tailwind.json';

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <AuthProvider>
        <RootStack />
      </AuthProvider>
    </TailwindProvider>
  );
}