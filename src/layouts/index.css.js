import { injectGlobal } from 'styled-components'
import normalize from 'styled-normalize'


injectGlobal`
  @import 'https://cloud.typography.com/6240112/779488/css/fonts.css'

  ${normalize}

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Gotham Narrow SSm A', 'Gotham Narrow SSm B', 'Helvetica', sans-serif;
  }
`