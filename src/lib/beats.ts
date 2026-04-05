export interface Beat {
  id: string;
  title: string;
  bpm: number;
  key: string;
  tags: string[];
  duration: string;
  imageUrl: string;
  pricing: {
    basic: number;
    ultimate: number;
    exclusive: number;
  };
}

export const BOTD_DISCOUNT = 20;

export function getBeatOfDay(): Beat {
  const dayIndex = Math.floor(Date.now() / 86400000) % beats.length;
  return beats[dayIndex];
}

export const beats: Beat[] = [
  {
    id: "1",
    title: "Slidin' Through the Town",
    bpm: 140,
    key: "Cm",
    tags: ["Bay Area", "Dark", "Hard"],
    duration: "3:24",
    imageUrl: "/beats/beat1.jpg",
    pricing: { basic: 79.99, ultimate: 99.99, exclusive: 499.99 },
  },
  {
    id: "2",
    title: "Late Night Mob",
    bpm: 130,
    key: "Fm",
    tags: ["West Coast", "Melodic", "Drill"],
    duration: "2:58",
    imageUrl: "/beats/beat2.jpg",
    pricing: { basic: 79.99, ultimate: 99.99, exclusive: 499.99 },
  },
  {
    id: "3",
    title: "Ghost in the Function",
    bpm: 145,
    key: "Gm",
    tags: ["Trap", "Hard", "808s"],
    duration: "3:12",
    imageUrl: "/beats/beat3.jpg",
    pricing: { basic: 79.99, ultimate: 99.99, exclusive: 499.99 },
  },
  {
    id: "4",
    title: "Blue Money",
    bpm: 120,
    key: "Dm",
    tags: ["Smooth", "R&B", "Melodic"],
    duration: "3:45",
    imageUrl: "/beats/beat4.jpg",
    pricing: { basic: 79.99, ultimate: 99.99, exclusive: 499.99 },
  },
  {
    id: "5",
    title: "Pressure",
    bpm: 138,
    key: "Am",
    tags: ["Bay Area", "Hard", "Street"],
    duration: "3:08",
    imageUrl: "/beats/beat5.jpg",
    pricing: { basic: 79.99, ultimate: 99.99, exclusive: 499.99 },
  },
  {
    id: "6",
    title: "No Hook Needed",
    bpm: 155,
    key: "Bbm",
    tags: ["Drill", "Dark", "Trap"],
    duration: "2:42",
    imageUrl: "/beats/beat6.jpg",
    pricing: { basic: 79.99, ultimate: 99.99, exclusive: 499.99 },
  },
  {
    id: "7",
    title: "Summer in the Bay",
    bpm: 105,
    key: "Eb",
    tags: ["Smooth", "West Coast", "Melodic"],
    duration: "3:30",
    imageUrl: "/beats/beat7.jpg",
    pricing: { basic: 79.99, ultimate: 99.99, exclusive: 499.99 },
  },
  {
    id: "8",
    title: "Off the Porch",
    bpm: 142,
    key: "Em",
    tags: ["Bay Area", "Hard", "Street"],
    duration: "3:15",
    imageUrl: "/beats/beat8.jpg",
    pricing: { basic: 79.99, ultimate: 99.99, exclusive: 499.99 },
  },
  {
    id: "9",
    title: "Mob Talk",
    bpm: 135,
    key: "Dbm",
    tags: ["Bay Area", "Dark", "Street"],
    duration: "3:02",
    imageUrl: "/beats/beat9.jpg",
    pricing: { basic: 79.99, ultimate: 99.99, exclusive: 499.99 },
  },
  {
    id: "10",
    title: "Midnight Run",
    bpm: 128,
    key: "F#m",
    tags: ["West Coast", "Melodic", "Smooth"],
    duration: "3:18",
    imageUrl: "/beats/beat10.jpg",
    pricing: { basic: 79.99, ultimate: 99.99, exclusive: 499.99 },
  },
  {
    id: "11",
    title: "Demon Time",
    bpm: 148,
    key: "Cm",
    tags: ["Trap", "Dark", "808s"],
    duration: "2:55",
    imageUrl: "/beats/beat11.jpg",
    pricing: { basic: 79.99, ultimate: 99.99, exclusive: 499.99 },
  },
  {
    id: "12",
    title: "Fly Shit",
    bpm: 110,
    key: "Ab",
    tags: ["R&B", "Smooth", "Melodic"],
    duration: "3:40",
    imageUrl: "/beats/beat12.jpg",
    pricing: { basic: 79.99, ultimate: 99.99, exclusive: 499.99 },
  },
  {
    id: "13",
    title: "No Days Off",
    bpm: 143,
    key: "Bm",
    tags: ["Hard", "Drill", "Trap"],
    duration: "3:00",
    imageUrl: "/beats/beat13.jpg",
    pricing: { basic: 79.99, ultimate: 99.99, exclusive: 499.99 },
  },
  {
    id: "14",
    title: "Pull Up",
    bpm: 132,
    key: "Gm",
    tags: ["Bay Area", "Street", "Hard"],
    duration: "2:50",
    imageUrl: "/beats/beat14.jpg",
    pricing: { basic: 79.99, ultimate: 99.99, exclusive: 499.99 },
  },
  {
    id: "15",
    title: "Cold Nights",
    bpm: 125,
    key: "Dm",
    tags: ["Dark", "Melodic", "R&B"],
    duration: "3:22",
    imageUrl: "/beats/beat15.jpg",
    pricing: { basic: 79.99, ultimate: 99.99, exclusive: 499.99 },
  },
  {
    id: "16",
    title: "Paper Route",
    bpm: 140,
    key: "Am",
    tags: ["Street", "Trap", "Hard"],
    duration: "3:10",
    imageUrl: "/beats/beat16.jpg",
    pricing: { basic: 79.99, ultimate: 99.99, exclusive: 499.99 },
  },
  {
    id: "17",
    title: "All the Way Up",
    bpm: 118,
    key: "Eb",
    tags: ["West Coast", "Smooth", "Melodic"],
    duration: "3:35",
    imageUrl: "/beats/beat17.jpg",
    pricing: { basic: 79.99, ultimate: 99.99, exclusive: 499.99 },
  },
  {
    id: "18",
    title: "Street Gospel",
    bpm: 137,
    key: "Cm",
    tags: ["Dark", "Bay Area", "Street"],
    duration: "3:05",
    imageUrl: "/beats/beat18.jpg",
    pricing: { basic: 79.99, ultimate: 99.99, exclusive: 499.99 },
  },
  {
    id: "19",
    title: "On Sight",
    bpm: 150,
    key: "F#m",
    tags: ["Drill", "Hard", "Trap"],
    duration: "2:48",
    imageUrl: "/beats/beat19.jpg",
    pricing: { basic: 79.99, ultimate: 99.99, exclusive: 499.99 },
  },
  {
    id: "20",
    title: "Bay Nights",
    bpm: 112,
    key: "Dm",
    tags: ["Bay Area", "Melodic", "Smooth"],
    duration: "3:28",
    imageUrl: "/beats/beat20.jpg",
    pricing: { basic: 79.99, ultimate: 99.99, exclusive: 499.99 },
  },
];

export const licenseDetails = {
  basic: {
    name: "Basic Lease",
    features: [
      "MP3 file",
      "Non-exclusive rights",
      "Up to 5,000 streams",
      "1 music video",
      "Must credit producer",
    ],
  },
  ultimate: {
    name: "Ultimate Lease",
    features: [
      "MP3 + WAV + stems",
      "Non-exclusive rights",
      "Up to 100,000 streams",
      "Unlimited music videos",
      "Radio broadcasting rights",
      "Must credit producer",
    ],
  },
  exclusive: {
    name: "Exclusive Buyout",
    features: [
      "MP3 + WAV + stems + project file",
      "Full exclusive rights",
      "Unlimited streams",
      "Unlimited music videos",
      "Full broadcasting rights",
      "Beat removed from store",
      "No credit required",
    ],
  },
};
