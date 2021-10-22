import { VFC } from 'react'
import { Link } from 'react-router-dom'

const PageHome: VFC = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/product">Product</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default PageHome
