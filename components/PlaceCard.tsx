import Link from 'next/link';
import type { Place } from '../lib/data';

interface Props {
  place: Place;
}

// Reusable card component used throughout the catalogue to display key
// information about a place. Clicking on the title navigates to the
// detailed page for that place.
export default function PlaceCard({ place }: Props) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 bg-white hover:shadow-md transition">
      <h3 className="text-lg font-semibold text-indigo-600 mb-1">
        <Link href={`/places/${place.id}`}>{place.name}</Link>
      </h3>
      <p className="text-sm text-gray-500">
        {place.city} • {place.address}
      </p>
      {place.description && (
        <p className="mt-2 text-sm text-gray-700">
          {place.description}
        </p>
      )}
    </div>
  );
}
