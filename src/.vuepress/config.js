const { description } = require("../../package");

module.exports = {
  title: "Rari Capital",
  //description: description,

  head: [
    ["meta", { name: "theme-color", content: "#42C346" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  themeConfig: {
    repo: "Rari-Capital/docs",
    docsDir: "/",
    nav: [
      { text: "Introduction", link: "/" },
      {
        text: "Products",
        ariaLabel: "Product Menu",
        items: [
          { text: "Earn", link: "/earn/" },
          { text: "Fuse", link: "/fuse.md" },
          { text: "Tranches", link: "/tranches.md" },
          { text: "Pool2", link: "/pool2.md" },
        ],
      },
      { text: "Grants", link: "/ecosystem/" },
    { 
         text: "Security",
        ariaLabel: "Security Menu",
        items: [
        { text: "Overview", link: "/security/" },
        { text: "Rari Safety Score", link: "/rss.md" },
        { text: "Yield Aggregator Capital Allocation Risks", link: "/risks/" },
        { text: "Yield Aggregator Strategy Assessment", link: "/products/yasa/SA.md" },
        { text: "Safeguarded Launches for all products", link: "/products/yasa/README copy.md" },
        
            ],
    },
      
      {
        text: "Governance",
        ariaLabel: "Governance Menu",
        items: [
          { text: "Overview", link: "/governanceoverview.md" },
          { text: "Current Contributors", link: "/currentcontributors.md" },
           { text: "DAO Structure", link: "/daostructure.md" },  
          { text: "Forums", link: "https://forums.rari.capital/" },
          { text: "Vote", link: "https://vote.rari.capital/" },
        ],
      },
       { 
         text: "Support",
        ariaLabel: "Support Menu",
        items: [
          { text: "FAQ", link: "/faq.md" },
          { text: "Glossary", link: "/glossary.md" },
          { text: "Twitter", link: "https://twitter.com/raricapital/" },
          { text: "Discord", link: "http://discord.gg/mtb6W57Ap6" },
        ],
  },
      { text: "Code Documentation", link: "https://docs.rari.capital/" },
    ],

    sidebarDepth: 10,
    sidebar: {
      "/": [""],
      "/products/": [""],
      "/ecosystem/": [""],
      "/risks/": [""],
    },
    smoothScroll: true,
  },
};