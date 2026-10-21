/* ==========================================================
   config.js  -  ALL BUSINESS DETAILS LIVE HERE
   Edit the text between the quote marks. Save the file, then
   refresh the page in Chrome to see your changes.
   Anything still in [SQUARE BRACKETS] is a placeholder.
   ========================================================== */

window.SITE = {
  // --- Business identity ---
  businessName: "Palm Leaf Wisdom",
  logo: "images/logo.png",                         // e.g. "images/logo.png" (leave empty to show the name as text)
  readerName: "",
  domain: "palmleafwisdom.com",      // the client's GoDaddy domain, used later for deployment

  // --- Contact details ---
  email: "palmleafwisdom@gmail.com",
  phoneDisplay: "+91 80153 23929",
  // WhatsApp number: digits only, with country code, no "+" or spaces. Example for India: 919876543210
  whatsappNumber: "918015323929",
  whatsappMessage: "Hello, I would like to enquire about a palm leaf reading.",
  hours: "10:00 AM - 6:00 PM IST",
  address: "",                      // optional: leave empty if there is no public address

  // --- Social media (leave url empty to hide a link) ---
  socials: [
    { name: "Instagram", url: "" },
    { name: "Facebook",  url: "" },
    { name: "YouTube",   url: "" }
  ],

  
  // --- Services (used on the Home and Services pages) ---
  showPrices: false,

  services: [
    {
      name: "Online Palm Leaf Reading",
      description: "Explore the traditional palm leaf reading process remotely by video or phone. Available for clients who wish to participate from home.",
      image: "images/services/online-reading.jpg",
      price: ""
    },
    {
      name: "Additional Chapters",
      description: "Explore specific areas of life through additional chapters from your identified palm leaf. See the complete chapter list below and contact us to confirm availability.",
      image: "images/services/additional-chapters.jpg",
      price: ""
    },
    {
      name: "Direct Palm Leaf Reading",
      description: "Experience a traditional palm leaf reading in person. Contact us to enquire about arrangements, availability and booking.",
      image: "images/services/direct-reading.jpg",
      price: ""
    },
    {
      name: "Homa (Fire Ceremony)",
      description: "A traditional fire ceremony performed according to spiritual customs. Contact us to learn about the homam services available.",
      image: "images/services/homa.jpg",
      price: ""
    },
    {
      name: "Athma Shanti Pooja",
      description: "A traditional spiritual pooja. Contact us for information about its purpose, arrangements and availability.",
      image: "images/services/athma-shanti-pooja.jpg",
      price: ""
    },
    {
      name: "Mantra and Yantra Services",
      description: "Explore traditional mantra and yantra services offered through Palm Leaf Wisdom. Contact us for details about available options.",
      image: "images/services/mantra-yantra.jpg",
      price: ""
    }
  ],

  // --- Additional Chapters ---
  chapters: [
    {
      number: 1,
      name: "General Chapter",
      description: "An overview of your life and its key themes.",
      status: "Included in Main Reading"
    },
    {
      number: 2,
      name: "Education and Wealth",
      description: "Traditional interpretations concerning education, learning, wealth and financial circumstances."
    },
    {
      number: 3,
      name: "Siblings",
      description: "Traditional interpretations concerning brothers, sisters and sibling relationships."
    },
    {
      number: 4,
      name: "Mother and Material Comforts",
      description: "Covers your mother and material aspects of life, including house, land, vehicles and comforts."
    },
    {
      number: 5,
      name: "Children",
      description: "Traditional interpretations concerning children, parenthood and family life."
    },
    {
      number: 6,
      name: "Enemies and Diseases",
      description: "Traditional interpretations concerning opposition, challenges and health-related matters. This is not medical advice."
    },
    {
      number: 7,
      name: "Marriage and Relationships",
      description: "Traditional interpretations concerning marriage, partnerships and relationships."
    },
    {
      number: 8,
      name: "Life Span",
      description: "Traditional interpretations concerning longevity and the course of life; these are not certain predictions."
    },
    {
      number: 9,
      name: "Father and Spiritual Path",
      description: "Covers your father, spiritual inclinations and your personal spiritual journey."
    },
    {
      number: 10,
      name: "Career, Job and Business",
      description: "Traditional interpretations concerning employment, career direction and business."
    },
    {
      number: 11,
      name: "Luck, Profits and Potential Second Marriage",
      description: "Covers luck and profits. The potential second-marriage topic is optional; clients in their first marriage can request to skip it."
    },
    {
      number: 12,
      name: "Foreign Connections and Next Incarnation",
      description: "Traditional interpretations concerning foreign connections and beliefs about the next incarnation."
    },
    {
      number: 13,
      name: "Previous Birth and Old Karma",
      description: "Explores traditional spiritual beliefs concerning previous births and past karma."
    },
    {
      number: 14,
      name: "Energetic Remedies to Improve Your Life Path",
      description: "Traditional spiritual or energetic remedies discussed as part of your reading.",
      status: "Included in Main Reading"
    },
    {
      number: 15,
      name: "Ayurveda Medicine",
      description: "A special chapter relating to traditional Ayurvedic themes. It does not replace professional medical advice.",
      status: "Special Chapter",
      image: "images/services/ayurveda.jpg"
    },
    {
      number: 16,
      name: "Spiritual Development",
      description: "A special chapter exploring spiritual growth and your personal spiritual journey.",
      status: "Special Chapter",
      image: "images/services/spiritual-development.jpg"
    },
    {
      number: 17,
      name: "Current Planetary Effects",
      description: "A special chapter exploring the traditional astrological interpretation of current planetary influences.",
      status: "Special Chapter",
      image: "images/services/planetary-effects.jpg"
    }
  ],

  // --- Enquiry form (free Web3Forms service) ---
  // Paste the Access Key that Web3Forms emails to the business address.
  // It is safe to keep in public code. Leave it empty until the key arrives:
  // the form stays switched off while this is empty.
  formAccessKey: "81fd84b4-d4a0-4f54-bc99-823106dfde76"
};
