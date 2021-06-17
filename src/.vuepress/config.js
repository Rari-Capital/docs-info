const { description } = require("../../package");

module.exports = {
  title: "Rari Capital",
  //  description: description,

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
          { text: "Earn", link: "/products/earn.md/" },
          { text: "Fuse", link: "/products/fuse/fuse.md/" },
          { text: "Tranches", link: "/products/tranches/TRANCHES.md/" },
          { text: "Pool2", link: "/products/pool2/pool2.md" },
        ],
      },
      { text: "Ecosystem", link: "/ecosystem/" },
    { 
         text: "Risks",
        ariaLabel: "Risk Menu",
        items: [
        { text: "Yield Aggregator Capital Allocation Risks", link: "/risks/" },
        { text: "Yield Aggregator Strategy Assessment", link: "/products/yasa/README copy.md" },
        { text: "Safeguarded Launches for all products", link: "/products/yasa/README copy.md" },
        
            ],
    },
      { text: "Security", link: "/security/" },
      {
        text: "Governance",
        ariaLabel: "Governance Menu",
        items: [
          { text: "Overview", link: "/governanceoverview.md" },
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
      { text: "Contribute", link: "https://docs.rari.capital/" },
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