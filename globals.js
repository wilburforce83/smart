// Global variables for use in the daemon.
// Change these or add logging features as required.

var Global = {
  // perhaps add here an emailing global for emailing the end user using SMTP with notifications
  email: "yourname@fmteam.co.uk",
  SMTP: "mail.fmteam.co.uk",
  port: "995",
  contact: "Mr Manager",

  // your own email details below here

  // Variables

  client_company: "test FM team", // client name of FM company
  rss: "https://www.metoffice.gov.uk/public/data/PWSCache/WarningsRSS/Region/UK.xml",
  location: "London ", // as per MET OFFICE RSS feed (https://www.metoffice.gov.uk/public/data/PWSCache/WarningsRSS/Region/UK) IMPORTANT!!! If London add space after to avoid londonderry
  warnings: "rain", // Type of event
  frequency: "15", // in minutes
};

module.exports = Global;
