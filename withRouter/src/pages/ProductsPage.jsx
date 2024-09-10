import { useEffect, useState } from "react"

import postsService from '../services/postsService'
import { toast } from "react-toastify"

import SingleProductCardComponent from "../components/SingleProductCardComponent"

function ProductsPage() {

  const [SingleProduct, setSingleProduct] = useState({})
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    postsService.getSingleProduct()
      .then((res) => {
        setSingleProduct(res.data);
        setIsLoaded(true)
        toast.success('Good job you took the data!');
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="container mx-auto ">
        <h2>Single Product</h2>

        {isLoaded && <SingleProductCardComponent product={SingleProduct} setProduct={setSingleProduct} />}
    </div>
  )
}

export default ProductsPage