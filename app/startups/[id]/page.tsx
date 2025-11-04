import { PitchDetailsPage } from '../../../components/PitchDetailsPage';

export default function PitchDetails({ params }: { params: { id: string } }) {
  return <PitchDetailsPage startupId={params.id} />;
}
