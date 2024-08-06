import { useParams } from 'react-router-dom';

export default function AlbumDetailPage() {
  const { albumId } = useParams();

  console.log(albumId);

  return <main>AlbumDetailPage</main>;
}
