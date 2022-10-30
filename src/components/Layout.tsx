import ChildrenProps from "../models/ChildrenModel"
import Logo from "./Logo"

const Layout = ({ children }: ChildrenProps): JSX.Element => {
  return (
    <div className="layout">
      <div className="layout__sidebar">
        <Logo />
        <div className="layout__avatar">
          
        </div>
        <div className="layout__information"></div>
        <div className="layout__nav"></div>
        <div className="layout__footer"></div>
      </div>
      <div className="layout__content">
        {children}
      </div>
    </div>
  )
}

export default Layout