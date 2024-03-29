module.exports = {
  title: "Rari Capital",

  head: [
    ["meta", { name: "theme-color", content: "#42C346" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ]
  ],
  themeConfig: {
    repo: "Rari-Capital/docs-info",
    docsDir: "src",
    docsBranch: "main",
    editLinks: true,
    editLinkText:
      "Caught a spelling error or just want to help improve this page? Hit us with a PR on Github!",

    nav: [
      {
        text: "Products",

        items: [
          { text: "Fuse", link: "/products/fuse/" },
          { text: "Earn", link: "/products/earn/" },
          { text: "Pool2", link: "/products/pool2/" },
          { text: "Tranches", link: "/products/tranches/" }
        ]
      },

      { text: "Security", link: "/security/" },

      {
        text: "Contribute",

        items: [
          { text: "Overview", link: "/ecosystem/" },
          { text: "Grants", link: "/grants/" },
        ]
      },


     // { text: "Grants", link: "/ecosystem/" },
      {
        text: "Governance",

        items: [
          { text: "Governance Process", link: "/governance/" },
          { text: "Making a Proposal", link: "/governance/makeProposal/" },
          {
            text: "Privileged Roles and Code Upgradeability",
            link: "/governance/on-chain/"
          },
          { text: "Market XYZ Task Force", link: "/governance/market/" },
          {
            text: "Infrastructure Task Force",
            link: "/governance/infrastructure/"
          },
          { text: "Application Task Force", link: "/governance/genApp/" }
        ]
      },

      {
        text: "Risk",

        items: [
          { text: "Fuse", link: "/risk/fuse/" },
          { text: "Earn", link: "/risk/earn/" }
        ]
      },

      {
        text: "Support",

        items: [
          { text: "FAQ", link: "/faq/" },
          { text: "Glossary", link: "/faq/glossary/" },
          { text: "Twitter", link: "https://twitter.com/raricapital/" },
          { text: "Discord", link: "http://discord.gg/mtb6W57Ap6" }
        ]
      },

      { text: "Developer Documentation", link: "https://docs.rari.capital/" }
    ],

    sidebarDepth: 10,
    sidebar: "auto",
    smoothScroll: true
  }
};
