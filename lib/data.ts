// Temporary in‑memory data store for the MVP. In a full application this
// data would be persisted to a database via Prisma. Each place represents
// a pet‑friendly resource in Israel, such as a veterinary clinic, groomer
// or dog park.

export interface Place {
  id: string;
  type: string;
  name: string;
  description?: string;
  city: string;
  address: string;
  lat: number;
  lng: number;
  services: string[];
  petTypes: string[];
  amenities: string[];
  priceBand: number;
  languages: string[];
  phones: string[];
  website?: string;
  whatsapp?: string;
}

export const places: Place[] = [
  {
    id: '1',
    type: 'vet_clinic',
    name: '24/7 Veterinary Clinic Tel Aviv',
    description: 'Круглосуточная ветеринарная клиника в центре Тель‑Авива.',
    city: 'Tel Aviv',
    address: 'Rothschild Blvd 10, Tel Aviv',
    lat: 32.0657,
    lng: 34.7774,
    services: ['emergency', 'surgery', 'vaccination'],
    petTypes: ['dog', 'cat'],
    amenities: ['parking', 'accessible'],
    priceBand: 2,
    languages: ['he', 'en', 'ru'],
    phones: ['+972123456789'],
    website: 'https://example-vet-ta.il',
    whatsapp: '+972123456789'
  },
  {
    id: '2',
    type: 'groomer',
    name: 'Pawfect Groomers',
    description: 'Стрижка, тримминг и spa‑процедуры для собак и кошек.',
    city: 'Jerusalem',
    address: 'King George St 15, Jerusalem',
    lat: 31.7857,
    lng: 35.2100,
    services: ['grooming', 'spa'],
    petTypes: ['dog', 'cat'],
    amenities: ['indoor_allowed'],
    priceBand: 3,
    languages: ['he', 'en'],
    phones: ['+972987654321'],
    website: 'https://pawfect-groomers.il'
  },
  {
    id: '3',
    type: 'pet_store',
    name: 'Tel Aviv Pet Supplies',
    description: 'Магазин товаров для животных с доставкой по всему городу.',
    city: 'Tel Aviv',
    address: 'Dizengoff St 200, Tel Aviv',
    lat: 32.0892,
    lng: 34.7811,
    services: ['food', 'toys', 'delivery'],
    petTypes: ['dog', 'cat', 'bird'],
    amenities: ['parking'],
    priceBand: 1,
    languages: ['he', 'en'],
    phones: ['+972246813579'],
    website: 'https://petsupplies-ta.il'
  },
  {
    id: '4',
    type: 'dog_park',
    name: 'Park HaYarkon Dog Park',
    description: 'Большая огороженная площадка для выгула собак в парке Ха‑Яркон.',
    city: 'Tel Aviv',
    address: 'Ganei Yehoshua, Tel Aviv',
    lat: 32.0953,
    lng: 34.8241,
    services: [],
    petTypes: ['dog'],
    amenities: ['fenced', 'water_fountain', 'shade'],
    priceBand: 1,
    languages: ['he', 'en'],
    phones: [],
    website: 'https://tel-aviv.gov.il/hayarkon-dog-park'
  },
  {
    id: '5',
    type: 'shelter',
    name: 'Jerusalem Animal Shelter',
    description: 'Приют для бездомных животных, доступен для волонтеров и усыновления.',
    city: 'Jerusalem',
    address: 'Strauss St 18, Jerusalem',
    lat: 31.7870,
    lng: 35.2137,
    services: ['adoption', 'volunteering'],
    petTypes: ['dog', 'cat'],
    amenities: ['parking'],
    priceBand: 1,
    languages: ['he', 'en'],
    phones: ['+972112233445'],
    website: 'https://jerusalem-animalshelter.il'
  }
];
