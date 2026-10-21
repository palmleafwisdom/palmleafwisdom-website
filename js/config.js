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
    image: "images/Additional Chapters.jpeg",
    price: ""
  },
  {
    name: "Direct Palm Leaf Reading",
    description: "Experience a traditional palm leaf reading in person. Contact us to enquire about arrangements, availability and booking.",
    image: "images/Direct Palm Leaf Reading.jpeg",
    price: ""
  },
  {
    name: "Homa (Fire Ceremony)",
    description: "A traditional fire ceremony performed according to spiritual customs. Contact us to learn about the homam services available.",
    image: "images/Homa (Fire Ceremony).jpg",
    price: ""
  },
  {
    name: "Athma Shanti Pooja",
    description: "A traditional spiritual pooja. Contact us for information about its purpose, arrangements and availability.",
    image: "images/Athma Shanti Pooja.jpg",
    price: ""
  },
  {
    name: "Gomadha Pooja",
    description: "A traditional Hindu ritual honouring Gomatha, the sacred cow, to seek blessings for prosperity, peace, happiness and family well-being. Contact us to learn about the pooja arrangements and availability.",
    image: "images/gomadha-pooja.jpg",
    price: ""
  },
  {
    name: "Mantra and Yantra Services",
    description: "Explore traditional mantra and yantra services offered through Palm Leaf Wisdom. Contact us for details about available options.",
    image: "images/Mantra and Yantra Services.jpg",
    price: ""
  }
],


  // --- Additional Chapters ---
chapters: [
   
  {
    number: 1,
    name: "General Chapter",
    description: "An overview of your life and its key themes.",
    status: "Included in Main Reading",
    image: "images/General Chapter.jpg"
  },
  {
    number: 2,
    name: "Education and Wealth",
    image: "images/2. Education and Wealth.jpg"
  },
  {
    number: 3,
    name: "Siblings",
    image: "images/3. Siblings.jpg"
  },
  {
    number: 4,
    name: "Mother and Material Comforts",
    image: "images/4. Mother and Material Comforts.jpg"
  },
  {
    number: 5,
    name: "Children",
    image: "images/5. Children.jpg"
  },
  {
    number: 6,
    name: "Enemies and Diseases",
    image: "images/6. Enemies and Diseases.jpg"
  },
  {
    number: 7,
    name: "Marriage and Relationships",
    image: "images/7. Marriage and Relationships.jpg"
  },
  {
    number: 8,
    name: "Life Span",
    image: "images/8. Life Span.jpg"
  },
  {
    number: 9,
    name: "Father and Spiritual Path",
    image: "images/9. Father and Spiritual Path.jpg"
  },
  {
    number: 10,
    name: "Career, Job and Business",
    image: "images/10. Career, Job and Business.jpg"
  },
  {
    number: 11,
    name: "Luck, Profits and Potential Second Marriage",
    image: "images/11. Luck, Profits and Potential Second Marriage.jpg"
  },
  {
    number: 12,
    name: "Foreign Connections and Next Incarnation",
    image: "images/12. Foreign Connections and Next Incarnation.jpg"
  },
  {
    number: 13,
    name: "Previous Birth and Old Karma",
    image: "images/13. Previous Birth and Old Karma.jpg"
  },
  {
    number: 14,
    name: "Energetic Remedies to Improve Your Life Path",
    image: "images/14. Energetic Remedies to Improve Your Life Path.jpg"
  },
  {
    number: 15,
    name: "Ayurveda Medicine",
    image: "images/15. Ayurveda Medicine.jpg"
  },
  {
    number: 16,
    name: "Spiritual Development",
    image: "images/16. Spiritual Development.jpg"
  },
  {
    number: 17,
    name: "Current Planetary Effects",
    image: "images/17. Current Planetary Effects.jpg"
  }
],


  // --- Enquiry form (free Web3Forms service) ---
  // Paste the Access Key that Web3Forms emails to the business address.
  // It is safe to keep in public code. Leave it empty until the key arrives:
  // the form stays switched off while this is empty.
  formAccessKey: "81fd84b4-d4a0-4f54-bc99-823106dfde76"
};
