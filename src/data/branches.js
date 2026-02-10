import { Monitor, Bike, Leaf, BadgeCheck } from "lucide-react";

const BRANCHES = [
  {
    slug: "bhageswari-electronics",
    name: "Bhageswari Electronics",
    tagline: "Your Trusted Electronics Destination",
    description:
      "Bhageswari Electronics is the premier electronics and home appliances retailer in Sudurpashchim. We bring world-class brands and cutting-edge technology to Western Nepal, offering everything from televisions, refrigerators, and washing machines to the latest smartphones and audio systems.",
    icon: Monitor,
    color: "blue",
    location: "Dhangadhi",
    features: [
      "Authorized dealer for Samsung, LG, Sony & more",
      "Full range of home appliances & kitchen electronics",
      "Expert installation & after-sales support",
      "EMI & financing options available",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      "https://images.unsplash.com/photo-1601598851547-4302969d0614?w=800&q=80",
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80",
    ],
    contact: {
      phone: "+977-91-521000",
      email: "electronics@bagesworigroups.com",
      address: "Traffic Chowk, Main Road, Dhangadhi, Kailali",
    },
    hours: "Sun - Fri: 9:30 AM - 6:30 PM",
    mapUrl:
      "https://maps.google.com/maps?q=Dhangadhi+Traffic+Chowk&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
  {
    slug: "bhageswori-automotives",
    name: "Bhageswori Automotives",
    tagline: "Ride with Confidence",
    description:
      "Bhageswori Automotives is an authorized dealership for Nepal's most trusted motorcycle brands. From daily commuters to performance machines, we provide the best two-wheelers along with genuine parts, expert service, and transparent financing.",
    icon: Bike,
    color: "blue",
    location: "Dhangadhi",
    features: [
      "Authorized dealer for Bajaj, TVS, Honda & more",
      "Genuine spare parts & accessories",
      "Certified service center with trained technicians",
      "Easy loan & EMI financing options",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
      "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&q=80",
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80",
    ],
    contact: {
      phone: "+977-91-521100",
      email: "automotives@bagesworigroups.com",
      address: "Traffic Chowk, Main Road, Dhangadhi, Kailali",
    },
    hours: "Sun - Fri: 9:30 AM - 6:30 PM",
    mapUrl:
      "https://maps.google.com/maps?q=Dhangadhi+Traffic+Chowk&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
  {
    slug: "bhageswori-multimotors",
    name: "Bhageswori Multimotors",
    tagline: "Multi-Brand. One Destination.",
    description:
      "Bhageswori Multimotors is a comprehensive multi-brand two-wheeler showroom proudly serving the Attariya region. We offer an extensive selection of motorcycles and scooters from multiple leading manufacturers, all under one roof.",
    icon: Bike,
    color: "blue",
    location: "Attariya",
    features: [
      "Multi-brand showroom with wide selection",
      "Competitive pricing & seasonal offers",
      "On-site service center for all brands",
      "Test rides available for all models",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80",
      "https://images.unsplash.com/photo-1558981359-219d6364c9c8?w=800&q=80",
      "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=800&q=80",
    ],
    contact: {
      phone: "+977-91-550200",
      email: "multimotors@bagesworigroups.com",
      address: "Mahakali Highway, Attariya Chowk, Kailali",
    },
    hours: "Sun - Fri: 10:00 AM - 6:00 PM",
    mapUrl:
      "https://maps.google.com/maps?q=Attariya+Kailali&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
  {
    slug: "bhageswori-ebikes",
    name: "Bhageswori Ebikes",
    tagline: "Go Electric. Go Green.",
    description:
      "Bhageswori Ebikes is at the forefront of the electric vehicle revolution in Western Nepal. We offer the latest electric scooters and bikes from top EV manufacturers, providing eco-friendly and cost-effective transportation solutions.",
    icon: Leaf,
    color: "green",
    location: "Dhangadhi",
    features: [
      "Latest electric scooters & bikes",
      "Government subsidy assistance",
      "Free charging station for customers",
      "Extended warranty & battery support",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1558980664-769d59546b3d?w=800&q=80",
      "https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=800&q=80",
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&q=80",
    ],
    contact: {
      phone: "+977-91-521200",
      email: "ebikes@bagesworigroups.com",
      address: "Traffic Chowk, Main Road, Dhangadhi, Kailali",
    },
    hours: "Sun - Fri: 9:30 AM - 6:30 PM",
    mapUrl:
      "https://maps.google.com/maps?q=Dhangadhi+Traffic+Chowk&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
  {
    slug: "bhageswori-recondition-house",
    name: "Bhageswori Recondition House",
    tagline: "Certified Quality. Affordable Price.",
    description:
      "Bhageswori Recondition House specializes in high-quality certified pre-owned vehicles. Every vehicle undergoes rigorous multi-point inspection and reconditioning to ensure reliability, performance, and peace of mind for our customers.",
    icon: BadgeCheck,
    color: "orange",
    location: "Dhangadhi",
    features: [
      "Multi-point quality inspection process",
      "Transparent vehicle history reports",
      "Warranty on all reconditioned vehicles",
      "Trade-in & exchange programs available",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
      "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&q=80",
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80",
    ],
    contact: {
      phone: "+977-91-521300",
      email: "recondition@bagesworigroups.com",
      address: "Traffic Chowk, Main Road, Dhangadhi, Kailali",
    },
    hours: "Sun - Fri: 9:30 AM - 6:30 PM",
    mapUrl:
      "https://maps.google.com/maps?q=Dhangadhi+Traffic+Chowk&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
  {
    slug: "bhageswori-bike-house",
    name: "Bhageswori Bike House",
    tagline: "Expert Care for Your Ride",
    description:
      "Bhageswori Bike House is a full-service motorcycle maintenance and repair center located in Attariya. Our team of certified technicians provides expert repairs using only genuine parts, ensuring your bike runs at peak performance.",
    icon: BadgeCheck,
    color: "orange",
    location: "Attariya",
    features: [
      "Expert repair & maintenance services",
      "100% genuine spare parts guarantee",
      "Quick turnaround on common repairs",
      "Annual maintenance packages available",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80",
      "https://images.unsplash.com/photo-1558981359-219d6364c9c8?w=800&q=80",
      "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=800&q=80",
    ],
    contact: {
      phone: "+977-91-550300",
      email: "bikehouse@bagesworigroups.com",
      address: "Mahakali Highway, Attariya Chowk, Kailali",
    },
    hours: "Sun - Fri: 10:00 AM - 6:00 PM",
    mapUrl:
      "https://maps.google.com/maps?q=Attariya+Kailali&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
];

export default BRANCHES;
