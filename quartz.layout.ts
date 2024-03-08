import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
      "Subscribe (RSS)": {link: "https://carsonboden.com", icon: "fa-solid fa-square-rss", iconcolor: "orange"},
      Github: {link: "https://github.com/cwboden", icon: "fa-brands fa-github", iconcolor: "black"},
      LinkedIn: {link: "https://linkedin.com/in/carson-boden", icon: "fa-brands fa-linkedin", iconcolor: "blue"},
      Mastodon: {link: "https://social.ridetrans.it/@cwboden", icon: "fa-brands fa-mastodon", iconcolor: "purple"},
      Spotify: {link: "https://linkedin.com/in/carson-boden", icon: "fa-brands fa-spotify", iconcolor: "green"},
      Steam: {link: "https://steamcommunity.com/id/xenonn11", icon: "fa-brands fa-steam", iconcolor: "black"},
      BoardGameGeek: {link: "https://boardgamegeek.com/user/xenonn11", icon: "fa-solid fa-chess-pawn", iconcolor: "black"}
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
}
