---
to: src/components/<%= directory %>/<%= h.changeCase.pascal(component_name) %>/<%= h.changeCase.pascal(component_name) %>.tsx
---
import { FC } from 'react'

import styles from './<%= h.changeCase.paramCase(component_name) %>.module.scss'

type Props = {

}

export const <%= h.changeCase.pascal(component_name) %>: FC<Props> = ({}) => {
  return (
    <></>
  )
}
