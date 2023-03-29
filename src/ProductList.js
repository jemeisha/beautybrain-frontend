import { useEffect, useRef, useState } from "react";
import { Input, InputGroup } from "react-daisyui";
import { useQuery } from "react-query";
import { useDebounce } from "use-debounce";
import capitalize from "capitalize";
import { chunk } from "underscore";

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

function Product({ name, url, brand, tags, rating }) {
  return (
    <div className="card w-72 bg-[#e7d9ca] shadow-xl overflow-hidden text-black">
      <div className="w-full h-52 bg-white">
        <figure><img src={url} alt="product" className="w-full h-52 object-contain" /></figure>
      </div>
      <div className="card-body p-2 px-3 pb-3 ">
        <h2 className="card-title">
          {capitalize.words(brand)}
         {rating &&  <div className="ml-auto flex flex-row">
            <span className="text-sm text-[#52462b]">
            {rating}/5
            </span>
            <div className="rating rating-sm ">
              <input type="radio" name="rating-1" className="mask mask-star bg-primary" checked />
            </div>
          </div>}
        </h2>
        <p className="text-sm">{capitalize.words(name)}</p>
        <div className="card-actions justify-end text-[#52462b]">
          {tags.split(",").map((t) => {
            if (t) {
              return (
                <div className="badge badge-outline bg-[#dabea1] border-0" key={t}>{t}</div>
              )
            }
            else { return "" }
          })}
        </div>
        <div className="flex flex-row">

          {/* <div className="card-actions justify-end mt-5">
            <button className="btn btn-sm btn-secondary">View Now</button>
          </div> */}
        </div>
      </div>
    </div>
    // <div className="flex flex-col hover:scale-105 cursor-pointer">
    //   <img src={url} className="w-52 h-52 rounded-lg" />
    //   <div className="mx-auto text-[#1D201F]">{name}</div>
    // </div>
  )
}
function ProductList() {
  const [query, setQuery] = useState("")
  const [debouncedQuery] = useDebounce(query, 800)
  const { isLoading, error, data } = useQuery(['productSearch', debouncedQuery], (data) =>
    fetch(`http://127.0.0.1:8000/search/${debouncedQuery == "" ? "all_products" : debouncedQuery}`).then(res =>
      res.json()
    )
  )
  const [jsonData, setJsonData] = useState([])
  const [pagesData, setPagesData] = useState([])
  useEffect(() => {
    setJsonData(JSON.parse(data || "[]"))
    // console.log(jsonData)
    // console.log(data)
  }, [data])

  useEffect(() => {
    setPagesData(chunk(jsonData, 15))
    // console.log(pagesData)
  }, [jsonData])

  useEffect(() => {
    console.log(pagesData)
  }, [pagesData])

  const [currentPage, setCurrentPage] = useState(0)
  return (
    <div className="mx-auto flex flex-col">
      <div className="ml-auto mb-8">
        <InputGroup color="accent" >
          <Input className="bg-white" type="text" placeholder="Search product" bordered onChange={(e) => setQuery(e.target.value)} value={query} />
          <button className="btn btn-square bg-white text-black border-none border-l-2 hover:bg-[#ebdcca]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
        </InputGroup>
      </div>
      {isLoading && <div className="mx-auto">Searching the products...</div>}

      {!isLoading && <div className="grid grid-cols-3 gap-10 mx-auto justify-between">

        {/* {
          PRODUCTS.map((p) => {
            return <Product name={p.name} url={p.url} />
          })
        } */}
        {
          pagesData.length > 0 && pagesData[currentPage].map((product) => <Product key={product.id}
            name={product.name}
            url={product.img}
            brand={product.brand}
            tags={product.tags}
            rating={product.rating}
          />)
        }

      </div>}
      <div className="my-10 flex flex-row">

        <div className="btn-group mx-auto text-black">
          {/* {(currentPage>0) && } */}
          <button className={`btn ${currentPage == 0 ? "btn-disabled" : ""} bg-transparent border-0 hover:bg-[#ebdcca] text-black`} onClick={() => {
            if (currentPage > 0) {
              setCurrentPage(currentPage - 1)
            }
          }}>«</button>
          <button className="btn bg-transparent border-0 hover:bg-[#ebdcca] text-black">Page {currentPage + 1}</button>
          <button className={`btn ${currentPage == (pagesData.length - 1) ? "btn-disabled" : ""} bg-transparent border-0 hover:bg-[#ebdcca] text-black`} onClick={() => {
            if (currentPage < (pagesData.length - 1)) {
              setCurrentPage(currentPage + 1)
            }
          }}>»</button>
        </div>
      </div>
    </div>
  )
}
export default ProductList;