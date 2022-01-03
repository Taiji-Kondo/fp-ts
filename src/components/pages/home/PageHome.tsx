import { VFC } from 'react'
import { Link } from 'react-router-dom'
import {Button} from "@chakra-ui/react";

const PageHome: VFC = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/product">
              <Button>
                Product
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default PageHome
