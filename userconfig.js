
// ==========================================
// MIDNIGHT TOKYO | PERSONAL STARTPAGE
// ==========================================

// Use the darkest Catppuccin palette as the base.
// MIDNIGHT TOKYO - custom dark palette
const preferredLightTheme = mocha;
const preferredDarkTheme = mocha;

let palette = initThemeSystem(preferredLightTheme, preferredDarkTheme);

// Override the actual palette used by all components
Object.assign(palette, {
  rosewater: "#b6a5bd",
  flamingo: "#bd929b",
  pink: "#b39acb",
  mauve: "#a49acb",
  red: "#bd8490",
  maroon: "#a87e91",
  peach: "#c49a82",
  yellow: "#c5b58c",
  green: "#94aa9b",
  teal: "#83aaa9",
  sky: "#8ba9c4",
  sapphire: "#829fc4",
  blue: "#8296c8",
  lavender: "#a3a2cf",

  text: "#c5ccda",
  subtext1: "#a5afc4",
  subtext0: "#8792a8",

  overlay2: "#65728a",
  overlay1: "#4c586e",
  overlay0: "#354154",

  surface2: "#242c3a",
  surface1: "#1a202c",
  surface0: "#131923",

  base: "#0b0d12",
  mantle: "#080a0f",
  crust: "#050609",
});
const default_configuration = {
  overrideStorage: true,

  temperature: {
    location: "Kanpur, Uttar Pradesh, India",
    scale: "C",
    appId: "",
  },

  clock: {
    format: "k:i p",
    icon_color: palette.blue,
  },

  additionalClocks: [],

  search: {
    engines: {
      d: ["https://duckduckgo.com/?q=", "DuckDuckGo"],
      g: ["https://google.com/search?q=", "Google"],
      p: ["https://www.perplexity.ai/search/?q=", "Perplexity"],
    },
    default: "d",
  },

  keybindings: {
    "s": "search-bar",
  },

  disabled: [],

  localIcons: true,
  localFonts: true,

  fastlink: "https://duckduckgo.com",
  openLastVisitedTab: true,

  tabs: [
    // ======================================
    // DEVELOPMENT
    // ======================================
    {
      name: "DEV",
      background_url: "src/img/banners/banner_07.gif",

      categories: [
        {
          name: "development",
          links: [
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.text,
            },
            {
              name: "cloud skills",
              url: "https://www.cloudskillsboost.google/",
              icon: "cloud",
              icon_color: palette.blue,
            },
            {
              name: "stackoverflow",
              url: "https://stackoverflow.com",
              icon: "brand-stackoverflow",
              icon_color: palette.peach,
            },
            {
              name: "colab",
              url: "https://colab.research.google.com",
              icon: "notebook",
              icon_color: palette.mauve,
            },
          ],
        },
      ],
    },

    // ======================================
    // AI + WORKSPACE
    // ======================================
    {
      name: "AI",
      background_url: "src/img/banners/banner_11.gif",

      categories: [
        {
          name: "artificial intelligence",
          links: [
            {
              name: "chatgpt",
              url: "https://chatgpt.com",
              icon: "brain",
              icon_color: palette.green,
            },
            {
              name: "gemini",
              url: "https://gemini.google.com",
              icon: "sparkles",
              icon_color: palette.blue,
            },
            {
              name: "claude",
              url: "https://claude.ai",
              icon: "bot",
              icon_color: palette.peach,
            },
            {
              name: "perplexity",
              url: "https://www.perplexity.ai",
              icon: "search",
              icon_color: palette.mauve,
            },
          ],
        },

        {
          name: "productivity",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com",
              icon: "mail",
              icon_color: palette.red,
            },
            {
              name: "drive",
              url: "https://drive.google.com",
              icon: "brand-google-drive",
              icon_color: palette.blue,
            },
            {
              name: "calendar",
              url: "https://calendar.google.com",
              icon: "calendar",
              icon_color: palette.peach,
            },
            {
              name: "coursera",
              url: "https://www.coursera.org",
              icon: "graduation-cap",
              icon_color: palette.green,
            },
            {
              name: "culko.in",
              url: "https://culko.in",
              icon: "school",
              icon_color: palette.mauve,
            },
          ],
        },
      ],
    },

    // ======================================
    // PERSONAL
    // ======================================
    {
      name: "ME",
      background_url: "src/img/banners/banner_15.gif",

      categories: [
        {
          name: "gaming",
          links: [
            {
              name: "steam",
              url: "https://store.steampowered.com",
              icon: "brand-steam",
              icon_color: palette.blue,
            },
            {
              name: "epic games",
              url: "https://store.epicgames.com",
              icon: "gamepad-2",
              icon_color: palette.text,
            },
            {
              name: "discord",
              url: "https://discord.com/app",
              icon: "brand-discord",
              icon_color: palette.mauve,
            },
          ],
        },

        {
          name: "media",
          links: [
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.red,
            },
            {
              name: "reddit",
              url: "https://www.reddit.com",
              icon: "brand-reddit",
              icon_color: palette.peach,
            },
            {
              name: "spotify",
              url: "https://open.spotify.com",
              icon: "brand-spotify",
              icon_color: palette.green,
            },
          ],
        },
      ],
    },
  ],
};

// ==========================================
// INITIALISE
// ==========================================

const CONFIG = new Config(default_configuration, palette);

const root = document.querySelector(":root");

root.style.setProperty("--bg", "#080a0f");
root.style.setProperty("--accent", "#8296c8");
