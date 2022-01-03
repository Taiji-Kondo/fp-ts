import { VFC } from 'react'
import { Link, useParams } from 'react-router-dom'
import { PRODUCTS } from '../../../../constants/Products'
import {Button} from "@chakra-ui/react";

const PageProductDetail: VFC = () => {
  const { id } = useParams<{ id: string }>()
  const selectedProduct = PRODUCTS.find((product) => product.id === Number(id))

  return (
    <article>
      {selectedProduct ? (
        <dl>
          <dt style={{ fontWeight: 'bold' }}>Product Name:</dt>
          <dd>{selectedProduct.name}</dd>
          <dt style={{ fontWeight: 'bold' }}>Product Price:</dt>
          <dd>{selectedProduct.price}</dd>
          <dt style={{ fontWeight: 'bold' }}>Product Description:</dt>
          <dd>{selectedProduct.detail.description}</dd>
          <dt style={{ fontWeight: 'bold' }}>Product Evaluation:</dt>
          <dd>{selectedProduct.detail.evaluation}</dd>
        </dl>
      ) : (
        <p>This product is not found.</p>
      )}
      <Link to="/product">
        <Button>
          BACK
        </Button>
      </Link>
    </article>
  )
}

export default PageProductDetail
