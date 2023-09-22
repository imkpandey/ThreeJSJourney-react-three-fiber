import { forwardRef } from 'react'
import DrunkEffect from './DrunkEffect'

export default forwardRef(function Drunk(props, ref) {
  console.log(props)
  const effect = new DrunkEffect(props, ref)

  return <primitive ref={ref} object={effect} />
})