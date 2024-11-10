import { Outlet } from 'react-router-dom'
import ParticlesBg from '../Particles/Particles'
import Sidebar from '../Sidebar/Sidebar'
import './Layout.scss'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tags top-tags">&lt;body&gt;</span>

        <Outlet />
        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
        <div className = "particlesBg">
            <ParticlesBg/>
        </div>
    </div>
  )
}

export default Layout