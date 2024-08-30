export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Sentosaku.id",
  description: "Bersama Membangun Indonesia",
  navItems: [
    {
      label: "Home",
      href: "#home",
    },
    {
      label: "About Us",
      href: "#AboutUs",
    },
    {
      label: "Product",
      href: "#product",
    },
    {
      label: "Blog",
      href: "#blog",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
