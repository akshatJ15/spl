import {
  LayoutGrid,
  Building2,
  Factory,
  HeartPulse,
  Hotel,
  GraduationCap,
  FerrisWheel,
  Landmark,
  Home,
} from "lucide-react";

export const categories = [
  {
    id: "all",
    name: "All Projects",
    icon: <LayoutGrid className="w-4 h-4" />,
  },
  {
    id: "commercial",
    name: "Commercial",
    icon: <Building2 className="w-4 h-4" />,
  },
  {
    id: "industrial",
    name: "Industrial",
    icon: <Factory className="w-4 h-4" />,
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: <HeartPulse className="w-4 h-4" />,
  },
  {
    id: "hospitality",
    name: "Hospitality",
    icon: <Hotel className="w-4 h-4" />,
  },
  {
    id: "educational",
    name: "Educational",
    icon: <GraduationCap className="w-4 h-4" />,
  },
  {
    id: "entertainment",
    name: "Entertainment",
    icon: <FerrisWheel className="w-4 h-4" />,
  },
  {
    id: "government",
    name: "Government",
    icon: <Landmark className="w-4 h-4" />,
  },
  {
    id: "residential",
    name: "Residential",
    icon: <Home className="w-4 h-4" />,
  },
  {
    id: "retail",
    name: "Retail",
    icon: <Home className="w-4 h-4" />,
  },
];

export const projects = [
  {
    id: 1,
    title: "Amar Care Mathura",
    category: "healthcare",
    image: "/Projects/Amar-Care-Mathura.png",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "Mathura, Uttar Pradesh",
  },
  {
    id: 2,
    title: "Apollo Clinic Agra",
    category: "healthcare",
    image: "/Projects/Apollo-Clininc-Agra.png",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "Agra, Uttar Pradesh",
  },
  {
    id: 3,
    title: "BestWestern Mathura",
    category: "hospitality",
    image: "/Projects/BestWestern-Mathura.png",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "Mathura, Uttar Pradesh",
  },
  {
    id: 4,
    title: "City Hospital",
    category: "healthcare",
    image: "/Projects/City-Hospital.png",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "TBD",
  },
  {
    id: 5,
    title: "GD Goenka Agra",
    category: "educational",
    image: "/Projects/GD-Goenka-Agra.png",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "Agra, Uttar Pradesh",
  },
  {
    id: 6,
    title: "GD Goenka Gwalior",
    category: "educational",
    image: "/Projects/GD-Goenka-Gwalior.png",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "Gwalior, Madhya Pradesh",
  },
  {
    id: 7,
    title: "GD Goenka Luckhnow",
    category: "educational",
    image: "/Projects/GD-Goenka-Luckhnow.png",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "Lucknow, Uttar Pradesh",
  },
  {
    id: 8,
    title: "Gold Cinema",
    category: "entertainment",
    image: "/Projects/Gold-Cinema.jpg",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "TBD",
  },
  {
    id: 9,
    title: "Gurudwara",
    category: "commercial",
    image: "/Projects/Gurudwara.jpg",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "Agra, Uttar Pradesh",
  },
  {
    id: 10,
    title: "Haldiram Tajganj",
    category: "retail",
    image: "/Projects/Haldiram-Tajganj.png",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "TBD",
  },
  {
    id: 11,
    title: "Hotel Amar",
    category: "hospitality",
    image: "/Projects/Hotel-Amar.png",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "TBD",
  },
  {
    id: 12,
    title: "Hotel Alleviate",
    category: "hospitality",
    image: "/Projects/Hotel-Alleviate.png",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "TBD",
  },
  {
    id: 13,
    title: "Hotel Idhyan Palace",
    category: "hospitality",
    image: "/Projects/Hotel-Idhyan-Palace.png",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "TBD",
  },
  {
    id: 14,
    title: "Jaipuria School Noida",
    category: "educational",
    image: "/Projects/Jaipuria-School-Noida.png",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "Noida, Uttar Pradesh",
  },
  {
    id: 15,
    title: "JS University",
    category: "educational",
    image: "/Projects/JS-University.jpg",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "TBD",
  },
  {
    id: 16,
    title: "KP Hospital",
    category: "healthcare",
    image: "/Projects/KP-Hospital.png",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "TBD",
  },
  {
    id: 17,
    title: "Lalita Grand",
    category: "hospitality",
    image: "/Projects/Lalita-Grand.png",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "TBD",
  },
  {
    id: 18,
    title: "Meher Cinema Agra",
    category: "entertainment",
    image: "/Projects/Meher-Cinema-Agra.jpg",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "Agra, Uttar Pradesh",
  },
  {
    id: 19,
    title: "Nayati Hospital",
    category: "healthcare",
    image: "/Projects/Nayati-Hospital.png",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "TBD",
  },
  {
    id: 20,
    title: "Neel Clarks Inn",
    category: "hospitality",
    image: "/Projects/Neel-Clarks-Inn.png",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "TBD",
  },
  {
    id: 21,
    title: "Paras Hospital",
    category: "healthcare",
    image: "/Projects/Paras-Hospital.png",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "TBD",
  },
  {
    id: 22,
    title: "PremMandir",
    category: "commercial",
    image: "/Projects/PremMandir.jpg",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "TBD",
  },
  {
    id: 23,
    title: "Pushpanjali",
    category: "commercial",
    image: "/Projects/Pushpanjali.png",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "TBD",
  },
  {
    id: 24,
    title: "RadhaSwami",
    category: "commercial",
    image: "/Projects/RadhaSwami.png",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "TBD",
  },
  {
    id: 25,
    title: "Radisson Mathura",
    category: "hospitality",
    image: "/Projects/Radisson-Mathura.jpg",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "Mathura, Uttar Pradesh",
  },
  {
    id: 26,
    title: "Rainbow Hospital Agra",
    category: "healthcare",
    image: "/Projects/Rainbow-Hospital-Agra.png",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "Agra, Uttar Pradesh",
  },
  {
    id: 27,
    title: "Royal Reagant",
    category: "commercial",
    image: "/Projects/Royal-Reagant.png",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "TBD",
  },
  {
    id: 28,
    title: "Shantived",
    category: "commercial",
    image: "/Projects/Shantived.png",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "TBD",
  },
  {
    id: 29,
    title: "Sharda School Agra",
    category: "educational",
    image: "/Projects/Sharda-School-Agra.png",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "Agra, Uttar Pradesh",
  },
  {
    id: 30,
    title: "Sharda University",
    category: "educational",
    image: "/Projects/Sharda-University.png",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "TBD",
  },
  {
    id: 31,
    title: "Shree Krisha Hospital",
    category: "healthcare",
    image: "/Projects/Shree-Krishna-Hospital.png",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "TBD",
  },
  {
    id: 32,
    title: "Synergy Hospital",
    category: "healthcare",
    image: "/Projects/Synergy-Hospital-.png",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "TBD",
  },
  {
    id: 33,
    title: "Tandon Hospital",
    category: "healthcare",
    image: "/Projects/Tandon-Hospital.png",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "TBD",
  },
  {
    id: 34,
    title: "Upadhay Hospital",
    category: "healthcare",
    image: "/Projects/Upadhay-Hospital.png",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "TBD",
  },
  {
    id: 35,
    title: "Vimal Cinema",
    category: "entertainment",
    image: "/Projects/Vimal-Cinema.png",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "TBD",
  },
  {
    id: 36,
    title: "Wingston Barsana",
    category: "hospitality",
    image: "/Projects/Wingston-Barsana.png",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "Barsana, Uttar Pradesh",
  },
  {
    id: 37,
    title: "Wingston Mathura",
    category: "hospitality",
    image: "/Projects/Wingston-Mathura.png",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "Mathura, Uttar Pradesh",
  },
  {
    id: 38,
    title: "AP Jewellers",
    category: "commercial",
    image: "/Projects/AP.png",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "TBD",
  },
  {
    id: 39,
    title: "Bachoomal",
    category: "commercial",
    image: "/Projects/Bachoomal.jpg",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "TBD",
  },
  {
    id: 40,
    title: "Basant Overseas",
    category: "commercial",
    image: "/Projects/Basant-Overseas.jpg",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "TBD",
  },
  {
    id: 41,
    title: "Byjus",
    category: "commercial",
    image: "/Projects/Byjus.jpg",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "TBD",
  },
  {
    id: 42,
    title: "Caratlane",
    category: "commercial",
    image: "/Projects/Caratlane.png",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "TBD",
  },
  {
    id: 43,
    title: "CocaCola",
    category: "commercial",
    image: "/Projects/CocaCola.png",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "TBD",
  },
  {
    id: 44,
    title: "DDA",
    category: "government",
    image: "/Projects/DDA.jpg",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "TBD",
  },
  {
    id: 45,
    title: "Dimple",
    category: "commercial",
    image: "/Projects/Dimple.jpg",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "TBD",
  },
  {
    id: 46,
    title: "Foot & Shoes",
    category: "commercial",
    image: "/Projects/Foot&Shoes.png",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "TBD",
  },
  {
    id: 47,
    title: "Ganpati Mandir",
    category: "commercial",
    image: "/Projects/Ganpati-Mandir.png",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "TBD",
  },
  {
    id: 48,
    title: "Gupta Overseas",
    category: "commercial",
    image: "/Projects/Gupta-Overseas.jpg",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "TBD",
  },
  {
    id: 49,
    title: "Kapda Mandir",
    category: "commercial",
    image: "/Projects/Kapda-Mandir.jpg",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "TBD",
  },
  {
    id: 50,
    title: "Khatu Shyamji",
    category: "commercial",
    image: "/Projects/Khatu-Shyamji.jpg",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "TBD",
  },
  {
    id: 51,
    title: "Lalsons",
    category: "commercial",
    image: "/Projects/Lalsons.png",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "TBD",
  },
  {
    id: 52,
    title: "Lamba Soles",
    category: "commercial",
    image: "/Projects/Lamba-Soles.png",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "TBD",
  },
  {
    id: 53,
    title: "Metro & Metro",
    category: "commercial",
    image: "/Projects/Metro&Metro.png",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "TBD",
  },
  {
    id: 54,
    title: "Neelsons Overseas",
    category: "commercial",
    image: "/Projects/Neelsons-Overseas.jpg",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "TBD",
  },
  {
    id: 55,
    title: "Oswal Books",
    category: "commercial",
    image: "/Projects/Oswal-Books.png",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "TBD",
  },
  {
    id: 56,
    title: "Park Exports",
    category: "commercial",
    image: "/Projects/Park-Exports.png",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "TBD",
  },
  {
    id: 57,
    title: "PNC House",
    category: "residential",
    image: "/Projects/pnc-house.jpg",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "TBD",
  },
  {
    id: 58,
    title: "Prem Mandir",
    category: "commercial",
    image: "/Projects/Prem-Mandir.png",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "TBD",
  },
  {
    id: 59,
    title: "PW",
    category: "commercial",
    image: "/Projects/PW.jpg",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "TBD",
  },
  {
    id: 60,
    title: "Romsons",
    category: "commercial",
    image: "/Projects/Romsons.png",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "TBD",
  },
  {
    id: 61,
    title: "Saloni Oil",
    category: "commercial",
    image: "/Projects/Saloni-Oil.png",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "TBD",
  },
  {
    id: 62,
    title: "Tanishq",
    category: "commercial",
    image: "/Projects/Tanishq.jpg",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "TBD",
  },
  {
    id: 63,
    title: "Tapan Ghee",
    category: "commercial",
    image: "/Projects/Tapan-Ghee.png",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "TBD",
  },
  {
    id: 64,
    title: "Torrent Office",
    category: "commercial",
    image: "/Projects/Torrent-Office.png",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "TBD",
  },
  {
    id: 65,
    title: "Womans Plaza",
    category: "commercial",
    image: "/Projects/Womans-Plaza.jpg",
    description:
      "Retrofitting heritage government buildings with modern, energy-efficient climate control systems.",
    client: "CPWD",
    location: "TBD",
  },
];
