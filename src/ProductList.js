import { useEffect, useRef, useState } from "react";
import { Input, InputGroup } from "react-daisyui";
import { useQuery } from "react-query";
import { useDebounce } from "use-debounce";
import capitalize from "capitalize";
import { chunk } from "underscore";
import Product from "./Product";




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