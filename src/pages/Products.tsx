import Navproduct from "../Components/Products/Navproduct"
// import Medoic from "../Components/Products/Medoic"
// import Endoscopy from "../Components/Products/Endoscopy"
import WhyChoose from "../Components/Products/WhyChoose"
import RecommendedProducts from "../Components/Products/RecommendedProducts"

function Products() {
  return (
    <div>
      <Navproduct />
<RecommendedProducts />      
{/* <Medoic />
      <Endoscopy /> */}
      <WhyChoose />

    </div>
  )
}

export default Products