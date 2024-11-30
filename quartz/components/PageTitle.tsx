import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  const imagePath = `/static/icon.png`
  return (
    <h1 class={classNames(displayClass, "page-title")}>
      <div>
        <div>
          <img class="site-logo" src={imagePath} alt="Return to Home Page"/>
        </div>
        <div>
          <a href={baseDir}>{title}</a>
        </div>
      </div>
    </h1>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  min-width: fit-content;
}
.site-logo {
  height: 7.5rem;
  width: auto;
  margin: 0 auto;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
