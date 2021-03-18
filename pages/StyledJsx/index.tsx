import * as React from 'react'
import Template from '../../src/components/Template'

export default props =>
  <Template>
    <div>
      {/*language=PostCSS*/}
      <style jsx> {`
          * {
              color: darkred;
          }
      `}
      </style>
      StyledJsx
    </div>
  </Template>