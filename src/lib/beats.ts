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

export const beats: Beat[] = [
  {
    id: "1",
    title: "Slidin' Through the Town",
    bpm: 140,
    key: "Cm",
    tags: ["Bay Area", "Slap", "Dark"],
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
    tags: ["Trap", "Hard", "808"],
    duration: "3:12",
    imageUrl: "/beats/beat3.jpg",
    pricing: { basic: 79.99, ultimate: 99.99, exclusive: 499.99 },
  },
  {
    id: "4",
    title: "Blue Money",
    bpm: 120,
    key: "Dm",
    tags: ["Smooth", "R&B", "Vibe"],
    duration: "3:45",
    imageUrl: "/beats/beat4.jpg",
    pricing: { basic: 79.99, ultimate: 99.99, exclusive: 499.99 },
  },
  {
    id: "5",
    title: "Pressure on Repeat",
    bpm: 138,
    key: "Am",
    tags: ["Bay Area", "Bounce", "Slap"],
    duration: "3:08",
    imageUrl: "/beats/beat5.jpg",
    pricing: { basic: 79.99, ultimate: 99.99, exclusive: 499.99 },
  },
  {
    id: "6",
    title: "No Hook Needed",
    bpm: 155,
    key: "Bbm",
    tags: ["Drill", "Dark", "Aggressive"],
    duration: "2:42",
    imageUrl: "/beats/beat6.jpg",
    pricing: { basic: 79.99, ultimate: 99.99, exclusive: 499.99 },
  },
  {
    id: "7",
    title: "Summer in the Bay",
    bpm: 105,
    key: "Eb",
    tags: ["Smooth", "West Coast", "Chill"],
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
