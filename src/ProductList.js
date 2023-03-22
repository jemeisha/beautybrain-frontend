import { useEffect } from "react";
import { Input, InputGroup } from "react-daisyui";
import { useQuery } from "react-query";

const PRODUCTS = [
  {
    id: 1,
    url: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/4384871/2021/8/11/44f62cd5-555e-45d2-ba86-05aad086ce001628671666203LakmeAbsolutePerfectRadianceSkinLighteningDayCreme15g1.jpg",
    name: "Product 1"
  },
  {
    id: 2,
    url: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/1661465/2021/8/11/4ada0a5c-81e7-44bc-b9bf-a5c6eddd01901628671309687BiotiqueBioMorningNectarFlawlessSustainableSkinLotion190ml1.jpg",
    name: "Product 2"
  },
  {
    id: 3,
    url: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/8529167/2019/4/19/4ce57d8e-3257-4428-adce-0eae7e558b051555656637473-Nivea-Unisex-Hand-and-Feet-Cream-2421555656637210-1.jpg",
    name: "Product 3"
  },
  {
    id: 4,
    url: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/15390390/2021/9/7/b1ec71fe-bc6d-4bc0-b347-8a4ff9bdb75b1631007748959VI-JOHNSaffronFairnessCreamAdvancedPackOf550g1.jpg",
    name: "Product 4"
  }
]

function Product({ name, url }) {
  return (
    <div className="flex flex-col hover:scale-105 cursor-pointer">
      <img src={url} className="w-52 h-52 rounded-lg" />
      <div className="mx-auto text-[#1D201F]">{name}</div>
    </div>
  )
}
function ProductList() {

  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch(`http://127.0.0.1:8000/search/mini`).then(res =>
      res.json()
    )
  )
  useEffect(() => { 
   console.log(data)
  }, [data])

  return (
    <div className="mx-auto flex flex-col">
      <div className="ml-auto mb-8">
        <InputGroup color="accent" >
          <Input className="bg-white" type="text" placeholder="Search product" bordered />
          <button className="btn btn-square bg-white text-black border-none border-l-2 hover:bg-[#ebdcca]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
        </InputGroup>
      </div>
      {isLoading && <div>Searching the products...</div>}

      {!isLoading && <div className="flex flex-row flex-wrap gap-10 mx-auto">
        {
          PRODUCTS.map((p) => {
            return <Product name={p.name} url={p.url} />
          })
        }

      </div>}
    </div>
  )
}
export default ProductList;