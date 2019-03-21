import * as React from 'react'

export const Person: React.SFC<{name: string}> = (props) => (
  <div>{props.name}</div>
)
