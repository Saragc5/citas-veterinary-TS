import { ChildrenProps
 } from "../types"


export const Error:React.FC<ChildrenProps> = ({children}) => {
  return (
    <div>{children}</div>
  )
}