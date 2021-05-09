import { useGlobalState } from '@/components/globalState';

export default function Home() {
  const { state } = useGlobalState();
  return <>{state ? <p>Game loaded</p> : <p>Waiting for game</p>}</>;
}
