export const SITE_CONFIG = {
  name: "Desi Safai",
  tagline: "Premium Cleaning Services",
  description:
    "Professional cleaning services for homes, offices, and commercial spaces. Trusted by thousands of happy customers across the city.",
  phone: "+91 98765 43210",
  whatsapp: "+919876543210",
  email: "hello@desisafai.com",
  address: "123, Clean Street, Hyderabad, Telangana - 500001",
  workingHours: {
    weekdays: "Mon – Sat: 8:00 AM – 8:00 PM",
    sunday: "Sun: 9:00 AM – 5:00 PM",
  },
  social: {
    instagram: "#",
    facebook: "#",
    twitter: "#",
    youtube: "#",
  },
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES = [
  {
    slug: "home-cleaning",
    title: "Home Cleaning",
    shortDesc: "Spotless homes, happy families. Regular or one-time deep cleans.",
    description:
      "Our professional home cleaning service covers every corner of your living space. From dusting and vacuuming to kitchen scrubbing and bathroom sanitization, we leave your home sparkling clean.",
    icon: "Home",
    color: "blue",
    image: "/images/home-cleaning.jpg",
    features: [
      "Full room dusting & vacuuming",
      "Kitchen deep clean",
      "Bathroom sanitization",
      "Floor mopping & polishing",
      "Window sill & blind cleaning",
      "Trash removal",
    ],
    process: [
      { step: 1, title: "Book Online", desc: "Schedule in under 60 seconds" },
      { step: 2, title: "We Arrive", desc: "Punctual, uniformed professionals" },
      { step: 3, title: "Deep Clean", desc: "Thorough, systematic cleaning" },
      { step: 4, title: "Inspection", desc: "Quality check before we leave" },
    ],
    price: "Starting ₹999",
    duration: "2–4 hours",
    popular: true,
  },
  {
    slug: "office-cleaning",
    title: "Office Cleaning",
    shortDesc: "A clean workspace boosts productivity and impresses clients.",
    description:
      "Keep your workplace hygienic and professional with our tailored office cleaning solutions. We work around your schedule to minimize disruption.",
    icon: "Building2",
    color: "green",
    image: "/images/office-cleaning.jpg",
    features: [
      "Workstation & desk sanitization",
      "Common area cleaning",
      "Restroom deep clean",
      "Pantry & kitchen cleaning",
      "Trash & recycling management",
      "Floor care & carpet vacuuming",
    ],
    process: [
      { step: 1, title: "Site Assessment", desc: "We evaluate your space" },
      { step: 2, title: "Custom Plan", desc: "Tailored cleaning schedule" },
      { step: 3, title: "Regular Service", desc: "Daily, weekly or monthly" },
      { step: 4, title: "Reporting", desc: "Transparent service logs" },
    ],
    price: "Starting ₹1,999",
    duration: "3–6 hours",
    popular: false,
  },
  {
    slug: "deep-cleaning",
    title: "Deep Cleaning",
    shortDesc: "Intensive top-to-bottom cleaning for a truly fresh start.",
    description:
      "Our deep cleaning service tackles the grime that regular cleaning misses. Perfect for post-renovation, seasonal cleaning, or moving into a new home.",
    icon: "Sparkles",
    color: "purple",
    image: "/images/deep-cleaning.jpg",
    features: [
      "Inside appliance cleaning",
      "Grout & tile scrubbing",
      "Behind furniture cleaning",
      "Ceiling fan & light fixtures",
      "Cabinet interior cleaning",
      "Balcony & terrace cleaning",
    ],
    process: [
      { step: 1, title: "Pre-Assessment", desc: "Identify problem areas" },
      { step: 2, title: "Equipment Setup", desc: "Professional-grade tools" },
      { step: 3, title: "Zone Cleaning", desc: "Systematic room-by-room" },
      { step: 4, title: "Final Polish", desc: "Finishing touches & review" },
    ],
    price: "Starting ₹2,499",
    duration: "4–8 hours",
    popular: true,
  },
  {
    slug: "move-in-out",
    title: "Move In/Out Cleaning",
    shortDesc: "Start fresh or leave spotless. Perfect for tenants & landlords.",
    description:
      "Moving is stressful enough. Let us handle the cleaning so you can focus on settling in or getting your deposit back.",
    icon: "Truck",
    color: "orange",
    image: "/images/move-cleaning.jpg",
    features: [
      "Complete property cleaning",
      "Inside all cabinets & drawers",
      "Appliance deep clean",
      "Wall spot cleaning",
      "Window & door frame cleaning",
      "Garage & storage areas",
    ],
    process: [
      { step: 1, title: "Property Walkthrough", desc: "Document current state" },
      { step: 2, title: "Checklist Review", desc: "Agree on scope of work" },
      { step: 3, title: "Full Clean", desc: "Every inch covered" },
      { step: 4, title: "Sign-off", desc: "Client approval & handover" },
    ],
    price: "Starting ₹3,499",
    duration: "5–10 hours",
    popular: false,
  },
  {
    slug: "carpet-cleaning",
    title: "Carpet Cleaning",
    shortDesc: "Restore your carpets to their original glory with steam cleaning.",
    description:
      "Our hot water extraction method removes deep-seated dirt, allergens, and stains, leaving your carpets fresh, clean, and dry within hours.",
    icon: "Layers",
    color: "teal",
    image: "/images/carpet-cleaning.jpg",
    features: [
      "Hot water extraction",
      "Stain pre-treatment",
      "Deodorizing treatment",
      "Allergen removal",
      "Fast drying technology",
      "Fabric protection coating",
    ],
    process: [
      { step: 1, title: "Pre-Vacuum", desc: "Remove loose debris" },
      { step: 2, title: "Pre-Treatment", desc: "Stain & spot treatment" },
      { step: 3, title: "Steam Clean", desc: "Hot water extraction" },
      { step: 4, title: "Dry & Groom", desc: "Speed dry & pile grooming" },
    ],
    price: "Starting ₹799/room",
    duration: "1–2 hours/room",
    popular: false,
  },
  {
    slug: "window-cleaning",
    title: "Window Cleaning",
    shortDesc: "Crystal-clear windows that let the sunshine in.",
    description:
      "Professional window cleaning for residential and commercial properties. We use streak-free solutions and professional squeegees for a perfect finish.",
    icon: "Wind",
    color: "sky",
    image: "/images/window-cleaning.jpg",
    features: [
      "Interior & exterior cleaning",
      "Streak-free finish",
      "Frame & sill cleaning",
      "Screen cleaning",
      "High-rise capability",
      "Eco-friendly solutions",
    ],
    process: [
      { step: 1, title: "Pre-Rinse", desc: "Remove loose dirt & debris" },
      { step: 2, title: "Solution Apply", desc: "Eco-friendly cleaning fluid" },
      { step: 3, title: "Squeegee", desc: "Professional streak-free wipe" },
      { step: 4, title: "Detail Finish", desc: "Edges & frames polished" },
    ],
    price: "Starting ₹499",
    duration: "1–3 hours",
    popular: false,
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Banjara Hills, Hyderabad",
    rating: 5,
    text: "Desi Safai transformed my home! The team was professional, thorough, and incredibly detail-oriented. My kitchen hasn't looked this clean since we moved in. Highly recommend!",
    service: "Deep Cleaning",
    avatar: "PS",
  },
  {
    id: 2,
    name: "Rahul Mehta",
    location: "Gachibowli, Hyderabad",
    rating: 5,
    text: "We use Desi Safai for our office every week. The consistency and quality are unmatched. Our clients always comment on how clean and fresh our workspace looks.",
    service: "Office Cleaning",
    avatar: "RM",
  },
  {
    id: 3,
    name: "Ananya Reddy",
    location: "Jubilee Hills, Hyderabad",
    rating: 5,
    text: "Booked the move-out cleaning and got my full security deposit back! The landlord was amazed. Worth every rupee. Will definitely use again for my new place.",
    service: "Move Out Cleaning",
    avatar: "AR",
  },
  {
    id: 4,
    name: "Vikram Nair",
    location: "Kondapur, Hyderabad",
    rating: 5,
    text: "The carpet cleaning service is phenomenal. 10-year-old stains that I thought were permanent are completely gone. The team was punctual and very professional.",
    service: "Carpet Cleaning",
    avatar: "VN",
  },
  {
    id: 5,
    name: "Sunita Patel",
    location: "Madhapur, Hyderabad",
    rating: 5,
    text: "I've tried many cleaning services but Desi Safai is on another level. They use eco-friendly products which is important for my family with young kids. Absolutely love them!",
    service: "Home Cleaning",
    avatar: "SP",
  },
  {
    id: 6,
    name: "Arjun Kapoor",
    location: "Hitech City, Hyderabad",
    rating: 5,
    text: "Excellent service from booking to completion. The app is easy to use, the team arrived on time, and the quality of cleaning exceeded my expectations. 5 stars!",
    service: "Home Cleaning",
    avatar: "AK",
  },
];

export const STATS = [
  { value: 5000, suffix: "+", label: "Happy Customers" },
  { value: 98, suffix: "%", label: "Satisfaction Rate" },
  { value: 8, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Expert Cleaners" },
];

export const WHY_CHOOSE_US = [
  {
    icon: "Shield",
    title: "Fully Insured & Vetted",
    desc: "All our cleaners are background-checked, trained, and fully insured for your peace of mind.",
  },
  {
    icon: "Leaf",
    title: "Eco-Friendly Products",
    desc: "We use only non-toxic, biodegradable cleaning products safe for children, pets, and the planet.",
  },
  {
    icon: "Clock",
    title: "Always On Time",
    desc: "We respect your time. Our teams arrive within the scheduled window, every single time.",
  },
  {
    icon: "Star",
    title: "Satisfaction Guaranteed",
    desc: "Not happy? We'll re-clean for free. Your satisfaction is our top priority, no questions asked.",
  },
  {
    icon: "CreditCard",
    title: "Transparent Pricing",
    desc: "No hidden charges. Get an upfront quote and pay only for what you need.",
  },
  {
    icon: "Headphones",
    title: "24/7 Support",
    desc: "Our customer support team is available round the clock to assist you with any queries.",
  },
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Book Your Service",
    desc: "Choose your service, pick a date and time that works for you, and book in under 2 minutes.",
    icon: "CalendarCheck",
  },
  {
    step: "02",
    title: "We Confirm & Prepare",
    desc: "Receive instant confirmation. Our team prepares all equipment and eco-friendly supplies.",
    icon: "CheckCircle",
  },
  {
    step: "03",
    title: "Expert Team Arrives",
    desc: "Our uniformed, vetted professionals arrive on time with everything needed for the job.",
    icon: "Users",
  },
  {
    step: "04",
    title: "Sit Back & Relax",
    desc: "We clean thoroughly while you relax. Inspect the results and share your feedback.",
    icon: "Smile",
  },
];

export const FAQS = [
  {
    q: "How do I book a cleaning service?",
    a: "You can book through our website contact form, call us directly, or send us a WhatsApp message. We'll confirm your booking within 30 minutes.",
  },
  {
    q: "Are your cleaning products safe for children and pets?",
    a: "Absolutely! We use only eco-friendly, non-toxic, biodegradable cleaning products that are completely safe for children, pets, and the environment.",
  },
  {
    q: "Do I need to be home during the cleaning?",
    a: "It's your choice. Many clients provide access and go about their day. We're fully insured and all our staff are background-verified.",
  },
  {
    q: "What if I'm not satisfied with the cleaning?",
    a: "We offer a 100% satisfaction guarantee. If you're not happy, contact us within 24 hours and we'll re-clean the areas of concern at no extra charge.",
  },
  {
    q: "How far in advance should I book?",
    a: "We recommend booking 24–48 hours in advance. However, we also offer same-day service subject to availability.",
  },
  {
    q: "Do you bring your own cleaning supplies and equipment?",
    a: "Yes, our team arrives fully equipped with professional-grade tools and eco-friendly cleaning products. You don't need to provide anything.",
  },
];

export const GALLERY_ITEMS = [
  { id: 1, category: "home", title: "Living Room Transformation", cols: 2 },
  { id: 2, category: "office", title: "Corporate Office Clean", cols: 1 },
  { id: 3, category: "deep", title: "Kitchen Deep Clean", cols: 1 },
  { id: 4, category: "carpet", title: "Carpet Restoration", cols: 1 },
  { id: 5, category: "home", title: "Bathroom Sparkle", cols: 1 },
  { id: 6, category: "office", title: "Conference Room", cols: 2 },
  { id: 7, category: "deep", title: "Post-Renovation Clean", cols: 1 },
  { id: 8, category: "window", title: "Crystal Clear Windows", cols: 1 },
  { id: 9, category: "home", title: "Bedroom Refresh", cols: 1 },
  { id: 10, category: "carpet", title: "Stain Removal Magic", cols: 2 },
  { id: 11, category: "office", title: "Open Plan Office", cols: 1 },
  { id: 12, category: "window", title: "High-Rise Windows", cols: 1 },
];

export const GALLERY_CATEGORIES = [
  { value: "all", label: "All Work" },
  { value: "home", label: "Home Cleaning" },
  { value: "office", label: "Office Cleaning" },
  { value: "deep", label: "Deep Cleaning" },
  { value: "carpet", label: "Carpet Cleaning" },
  { value: "window", label: "Window Cleaning" },
];

export const TEAM = [
  { name: "Rajesh Kumar", role: "Founder & CEO", initials: "RK" },
  { name: "Meena Devi", role: "Operations Manager", initials: "MD" },
  { name: "Suresh Babu", role: "Head of Quality", initials: "SB" },
  { name: "Kavitha Rao", role: "Customer Success", initials: "KR" },
];

export const VALUES = [
  { icon: "Heart", title: "Care", desc: "We treat every home and office as if it were our own." },
  { icon: "Shield", title: "Trust", desc: "Fully vetted staff and transparent practices always." },
  { icon: "Leaf", title: "Sustainability", desc: "Eco-friendly products for a cleaner planet." },
  { icon: "Award", title: "Excellence", desc: "We never settle for anything less than perfect." },
];
