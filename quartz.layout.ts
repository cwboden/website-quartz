import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      "Subscribe (RSS)": { link: "https://carsonboden.com/index.xml", icon: "fa-solid fa-square-rss" },
      Github: { link: "https://github.com/cwboden", icon: "fa-brands fa-github" },
      LinkedIn: { link: "https://linkedin.com/in/carson-boden", icon: "fa-brands fa-linkedin" },
      Mastodon: { link: "https://social.ridetrans.it/@cwboden", icon: "fa-brands fa-mastodon" },
      Spotify: { link: "https://open.spotify.com/user/l92w5wicgopkq6tge6osg5ibm", icon: "fa-brands fa-spotify" },
      Steam: { link: "https://steamcommunity.com/id/xenonn11", icon: "fa-brands fa-steam" },
      BoardGameGeek: { link: "https://boardgamegeek.com/user/xenonn11", icon: "fa-solid fa-chess-pawn" }
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(
      Component.RecentNotes({
        title: "Related recent files",
        // Show recent files with tags that match the current article
        filter: (openFile, fileToFilter) => (openFile != fileToFilter)
          && (
            openFile.frontmatter?.tags?.some(
              (tag) => fileToFilter.frontmatter?.tags?.includes(tag) ?? false
            ) ?? false
          )
      })
    )
  ],
  right: [
    Component.Graph({
      localGraph: {
        // Add one deeper layer of links
        depth: 2,
      },
      globalGraph: undefined // use defaults
    }),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
  ],
  right: [],
}
