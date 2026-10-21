/* ==========================================================
   config.js  -  ALL BUSINESS DETAILS LIVE HERE
   Edit the text between the quote marks. Save the file, then
   refresh the page in Chrome to see your changes.
   Anything still in [SQUARE BRACKETS] is a placeholder.
   ========================================================== */

window.SITE = {
  // --- Business identity ---
  businessName: "Palm Leaf Wisdom",
  logo: "",                         // e.g. "images/logo.png" (leave empty to show the name as text)
  readerName: "[READER NAME]",
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
  showPrices: true,                 // set to false to hide all prices
  services: [
    {
      name: "[SERVICE NAME 1]",
      description: "[Short description to be supplied by the client.]",
      price: ""                     // leave empty to show "Price on request"
    },
    {
      name: "[SERVICE NAME 2]",
      description: "[Short description to be supplied by the client.]",
      price: ""
    },
    {
      name: "[SERVICE NAME 3]",
      description: "[Short description to be supplied by the client.]",
      price: ""
    }
  ],

  // --- Enquiry form (free Web3Forms service) ---
  // Paste the Access Key that Web3Forms emails to the business address.
  // It is safe to keep in public code. Leave it empty until the key arrives:
  // the form stays switched off while this is empty.
  formAccessKey: "81fd84b4-d4a0-4f54-bc99-823106dfde76"
};
