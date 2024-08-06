import { useParams } from 'react-router-dom';

export default function AlbumPage() {
  const { userId } = useParams();

  console.log(userId || 'myUserId');

  return <main>AlbumPage</main>;
}
