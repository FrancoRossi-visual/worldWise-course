import { useSearchParams } from 'react-router-dom';

export function useUrlPosition() {
  const [searchParams] = useSearchParams();
  const lng = searchParams.get('lat');
  const lat = searchParams.get('lng');

  return [lng, lat];
}
