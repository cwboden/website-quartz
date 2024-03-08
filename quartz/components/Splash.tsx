import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function Splash({ cfg, fileData }: QuartzComponentProps) {
  const imagePath = `/static/icon.png`
  return (
    <div>
        <a href="/"><img class="site-logo center" src={imagePath} alt="Return to Home Page"/></a>
    </div>
  )
}
Splash.css = `
.site-logo {
  margin: 1rem 1rem 0 0;
  text-align: center;
  width: 6rem;
}
`

export default (() => Splash) satisfies QuartzComponentConstructor
