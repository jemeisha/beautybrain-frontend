import { useEffect, useRef, useState } from "react";
import { Dropdown, Input, InputGroup } from "react-daisyui";
import { useQuery } from "react-query";
import { useDebounce } from "use-debounce";
import capitalize from "capitalize";
import { chunk } from "underscore";
import Product from "./Product";




function ProductList() {
  const [query, setQuery] = useState("")
  const [productCategory, setProductCategory] = useState("all")
  const handleProductCategoryChange = (e) => {
    setProductCategory(e.target.value)
  }
  const [productConcern, setProductConcern] = useState("all")
  const handleProductConcernChange = (e) => {
    setProductConcern(e.target.value)
  }
  const [debouncedQuery] = useDebounce(query, 800)
  const { isLoading, error, data } = useQuery(['productSearch', debouncedQuery,productCategory,productConcern], (data) =>
    fetch(`http://127.0.0.1:8000/search/${debouncedQuery == "" ? "all_products" : debouncedQuery}`,{
      params:{
           category:productCategory,
           concern:productConcern
      }
    }).then(res =>
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
    //console.log("Jsondata: ",jsonData)
    setPagesData(chunk(jsonData, 15))
    // console.log(pagesData)
  }, [jsonData])

  useEffect(() => {
    //console.log(pagesData)
  }, [pagesData])


  const [currentPage, setCurrentPage] = useState(0)


  return (
    <div className="mx-auto flex flex-col">
      <div className="ml-auto mb-8">
        <InputGroup className=" mr-10" color="accent" >
          <Input className="bg-white" type="text" placeholder="Search product" bordered onChange={(e) => setQuery(e.target.value)} value={query} />
          <button className="btn btn-square bg-white text-black border-none border-l-2 hover:bg-[#ebdcca]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
        </InputGroup>
      </div>
      <div className="flex flex-row mb-5">
        <select className="select ml-3" onChange={handleProductCategoryChange}>
         
          <option value="all" selected > All</option>
          <option value="face-moisturisers">Face Moisturisers</option>
          <option value="cleanser">Cleanser</option>
          <option value="mask-and-peel">Mask-and-Peel</option>
          <option value="eye-cream">Eye-cream</option>
          <option value="primer">Primer</option>
          <option value="foundation">Foundation</option>
          <option value="concealer">Concealer</option>
        </select>
        

        <select className="select ml-3" onChange={handleProductConcernChange}>
          
          <option value="all" selected> All</option>
          <option value="Acne and Blemishes">Acne and Blemishes</option>
          <option value="Uneven Skin Tone">Uneven Skin Tone</option>
          <option value="Finelines and Wrinkles">Finelines and Wrinkles</option>
          <option value="Dark circles">Dark Circles</option>
          <option value="Pore Minimizing and Blurring">Pore Minimizing and Blurring</option>
          
        </select>
     
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