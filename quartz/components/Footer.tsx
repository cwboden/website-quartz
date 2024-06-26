import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Link {
  link: string,
  icon: string,
}

interface Options {
  links: Record<string, Link>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <hr />
        <ul>
          {Object.entries(links).map(([text, detail]) => {
            return (
            <li>
              <a href={detail.link}><i class={detail.icon}/></a>
            </li>
          )})}
        </ul>
        <p>
          <i class="fa-regular fa-copyright"/>{year} | Created with <a href="https://obsidian.md">Obsidian</a>, <a href="https://quartz.jzhao.xyz/">Quartz</a>, and Love 💖
        </p>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
