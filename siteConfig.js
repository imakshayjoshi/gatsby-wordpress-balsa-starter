module.exports = {
  siteUrl: "https://gatsbywordpressbalsastart57495.gatsbyjs.io", // Site domain. Do not include a trailing slash!

  postsPerPage: 10, // Number of posts shown on paginated pages (changes this requires sometimes to delete the cache)

  siteTitleMeta: "Web Designer Pad", // This allows an alternative site title for meta data for pages.
  siteDescriptionMeta:
    "Lightning fast, secure front-end for Web Designer Pad", // This allows an alternative site description for meta data for pages.

  shareImageWidth: 1000, // Change to the width of your default share image
  shareImageHeight: 523, // Change to the height of your default share image

  shortTitle: "Built with Balsa", // Used for App manifest e.g. Mobile Home Screen
  siteIcon: "favicon.png", // Logo in /static dir used for SEO, RSS, and App manifest
  backgroundColor: "#e9e9e9", // Used for Offline Manifest
  themeColor: "#15171A", // Used for Offline Manifest
  apiUrl: "https://dev-web-designers.pantheonsite.io",
  subscribeWidget: {
    visible: true,
    title: "Subscribe to Draftbox",
    helpText: "Get the latest posts delivered right to your inbox.",
    successMessage: "Thanks for subscribing to Draftbox.",
  },
  header: {
    navigation: [
      {
        label: "Home",
        url: "https://dev-web-designers.pantheonsite.io/",
      },
      {
        label: "Contact",
        url: "https://dev-web-designers.pantheonsite.io/contact",
      },
    ],
  },
  footer: {
    copyright: "https://ajo.co.in",
    navigation: [
      {
        label: "Home",
        url: "https://dev-web-designers.pantheonsite.io/",
      },
      {
        label: "Sitemap",
        url: "https://dev-web-designers.pantheonsite.io/sitemap.xml",
      },
      {
        label: "RSS",
        url: "https://dev-web-designers.pantheonsite.io/rss.xml",
      },
      {
        label: "Contact",
        url: "https://dev-web-designers.pantheonsite.io/contact",
      },
      {
        label: "External Link",
        url: "https://spectrum.chat/gatsby-js/themes?tab=posts",
      },
    ],
  },
  socialLinks: {
    twitter: "#",
    facebook: "#",
    instagram: "https://www.instagram.com/",
    linkedin: "https://linkedin.com/",
    github: "#",
    pinterest: "",
    youtube: "",
    dribbble: "",
    behance: "",
    externalLink: "",
    whatsapp: "",
  },
  contactWidget: {
    title: "Contact",
    successMessage: "We???ll get in touch with you soon.",
  },
  metadata: {
    title: "Built",
    description:
      "Lightning fast, secure front-end for your WordPress or Ghost blog, without coding. Draftbox is a new-age blogging platform for everyone, built on Gatsby.",
  },
  twitterCard: {
    title: "Built with Draftbox",
    description:
      "Lightning fast, secure front-end for your WordPress or Ghost blog, without coding. Draftbox is a new-age blogging platform for everyone, built on Gatsby.",
    imageUrl: "twitterImage.png",
    username: "@DraftboxHQ",
  },
  facebookCard: {
    title: "Built with Draftbox",
    description:
      "Lightning fast, secure front-end for your WordPress or Ghost blog, without coding. Draftbox is a new-age blogging platform for everyone, built on Gatsby.",
    imageUrl: "facebookImage.png",
    appId: "2391725224459953",
  },
  siteTitle: "Web Designer Pad",
  siteDescription:
    "Lightning fast, secure front-end for your WordPress or Ghost blog, without coding.",
  language: "en",
  logoUrl: "wdplogo.svg",
  iconUrl: "favicon.png",
  coverUrl: "cover.jpg",
  alternateLogoUrl: "wdplogo.svg",
  themeConfig: {
    variables: [
      {
        varName: "--primary-color",
        value: `#2b6cb0`,
      },
      {
        varName: "--primary-color-active",
        value: `#2a4365`,
      },
      {
        varName: "--primary-color-light",
        value: `#bee3f8`,
      },
      {
        varName: "--sans-font",
        value: `"Montserrat"`,
      },
      {
        varName: "--sans-font-normal",
        value: `400`,
      },
      {
        varName: "--sans-font-medium",
        value: `500`,
      },
      {
        varName: "--sans-font-semibold",
        value: `600`,
      },
      {
        varName: "--sans-font-bold",
        value: `700`,
      },
      {
        varName: "--serif-font",
        value: `Merriweather`,
      },
      { varName: "--serif-font-light", value: `300` },
      { varName: "--serif-font-normal", value: `400` },
      { varName: "--serif-font-medium", value: `400` },
      { varName: "--serif-font-bold", value: `700` },
    ],
    fonts: [
      {
        family: "Montserrat",
        variants: ["400", "500", "600", "700"],
        //subsets: ['latin']
        //text: 'Hello'
        fontDisplay: "swap",
        strategy: "selfHosted", // 'base64' || 'cdn'
      },
      {
        family: "Merriweather",
        variants: ["300", "400", "700"],
        //subsets: ['latin']
        //text: 'Hello'
        fontDisplay: "swap",
        strategy: "selfHosted", // 'base64' || 'cdn'
      },
    ],
  },
};
