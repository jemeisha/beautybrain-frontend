import { useQuery } from "react-query"
import Container from "./Container"
import NavBar from "./NavBar"
import Product from "./Product"
import mainLogo from './images/logo.png'
import { useContext, useEffect, useState } from "react"
import MiniProduct from "./MiniProduct"
import { PredictContext } from "./Contexts"
import { Button } from "react-daisyui"
import { useNavigate } from "react-router-dom"


function ResultList({ firstContent, secondContent }) {
    const [isShown, setIsShown] = useState(false)
    useEffect(() => {
        // console.log("Is Array: ", Array.isArray(firstContent))
        // console.log("Is Array second: ", Array.isArray(secondContent))
    }
        , [])
    return (
        <>
            <div className="grid grid-cols-5 gap-5 mx-auto justify-between">
                {
                    firstContent && firstContent.length && firstContent.map((product) => <MiniProduct

                        id={product.id}
                        brand={product.brand}
                        name={product.name}
                        url={product.img}
                        tags={product.tags}
                        rating={product.rating}
                    />)
                }

            </div>
            {secondContent && secondContent.length > 0 && <div className="collapse w-full">
                <input type="checkbox" onChange={() => setIsShown(true)} />
                {!isShown && <div className="collapse-title text-xl font-medium">
                    Show more..
                </div>}
                <div className="collapse-content grid grid-cols-5 gap-5 justify-between p-0">
                    {
                        secondContent && secondContent.length && secondContent.map((product) => <MiniProduct

                            id={product.id}
                            brand={product.brand}
                            name={product.name}
                            url={product.img}
                            tags={product.tags}
                            rating={product.rating}
                        />)
                    }
                </div>
            </div>}
        </>
    )
}

function Result() {
    // const { isLoading, error, data } = useQuery(['prediction'], (data) =>
    //     fetch(`http://127.0.0.1:8000/predict/`).then(res =>
    //         res.json()
    //     )
    // )
    const {
        recommendedProducts,
        answerBasedProducts,
        acneBasedProducts,
        output: productOutput

    } = useContext(PredictContext)
    const [firstContent, setFirstContent] = useState([])
    const [secondContent, setSecondContent] = useState([])
    const [isMakeup, setIsMakeup] = useState(true)
    const [productListType, setProductListType] = useState(2)
    const [data, setData] = useState(recommendedProducts)
    const [makeupData, setMakeupData] = useState(recommendedProducts)
    const [skincareData, setSkincareData] = useState(recommendedProducts)

    useEffect(() => {
        console.log(data)
        console.log("ProductOut", productOutput)


    }, [data])
    useEffect(() => {
        if (productListType == 0) {

            if (productOutput === "2") {
                const product_type = isMakeup ? "makeup" : "skincare"
                setData(answerBasedProducts.filter((x) => x["product_type"] === product_type))
            }
            else {
                setData(answerBasedProducts)
            }
        }
        else if (productListType == 1) {
            if (productOutput === "2") {
                const product_type = isMakeup ? "makeup" : "skincare"
                setData(acneBasedProducts.filter((x) => x["product_type"] === product_type))
                //setData(acneBasedProducts)
                console.log("Acne if", product_type)
            }
            else {
                setData(acneBasedProducts)
                console.log("Acne else")

            }

        }
        else {
            if (productOutput === "2") {

                const product_type = isMakeup ? "makeup" : "skincare"
                setData(recommendedProducts.filter((x) => x["product_type"] === product_type))
            }
            else {
                setData(recommendedProducts)
            }
        }

    }, [productListType, isMakeup, recommendedProducts, answerBasedProducts, acneBasedProducts])

    useEffect(() => {
        console.log("Data ", data)
        if (data && Array.isArray(data)) {

            const arr = data
            const firstContent = arr.slice(0, 10)
            const secondContent = arr.slice(10, arr.length - 1)
            // console.log("fc ",firstContent)
            // console.log("sc ",secondContent)
            setFirstContent(firstContent)
            setSecondContent(secondContent)
        }

    }, [data])

    const navigate = useNavigate()
    return (
        <div className="App w-screen bg-[#f8f1e9]">
            <NavBar />
            <Container>
                <div>
                    <Button onClick={() => navigate(-1)} className="bg-transparent mt-5 border-0 text-gray-800 hover:bg-transparent"> {"<<"} Back </Button>
                </div>
                <div className="mt-10 flex flex-row w-full">
                    <div className='font-extralight text-5xl text-left text-black w-2/3' >
                        <span className="text-2xl">Recommended products </span>
                        <br />for your unique skin type
                    </div>
                    <div className="ml-auto">
                        <img src={mainLogo} className="h-36 aspect-square" />
                    </div>
                </div>
                <div className="w-full flex flex-row ">
                    <div className="tabs text-black ml-auto">
                        <span className={`tab tab-bordered ${productListType == 2 ? 'tab-active' : ""} text-black`} onClick={() => setProductListType(2)}>AI recommendations</span>
                        {acneBasedProducts.length>0 && <span className={`tab tab-bordered ${productListType == 1 ? 'tab-active' : ""} text-black`} onClick={() => {
                            setProductListType(1)
                            setIsMakeup(false)
                        }}>AI acne</span>}
                        <span className={`tab tab-bordered ${productListType == 0 ? 'tab-active' : ""} text-black`} onClick={() => setProductListType(0)}>Answer based recommendations</span>
                    </div>
                </div>
                <div className="divider w-full border-black border-opacity-40 border-b-2 md-2"></div>
                {productOutput == 0 && <div className="text-xl text-black mb-5 ">Makeup products({data.length})</div>}
                {productOutput == 1 && <div className="text-xl text-black mb-5 ">Skincare products({data.length})</div>}
                {productOutput == 2 && productListType!=1 && <div className="tabs text-black mb-5">
                    <span className={`tab tab-bordered ${isMakeup ? 'tab-active' : ""} text-black`} onClick={() => setIsMakeup(true)}>Makeup</span>
                    <span className={`tab tab-bordered ${!isMakeup ? 'tab-active' : ""} text-black`} onClick={() => setIsMakeup(false)}>Skincare</span>
                </div>
                }
                {firstContent && firstContent.length && isMakeup && <ResultList firstContent={firstContent} secondContent={secondContent} />}
                {firstContent && firstContent.length && !isMakeup && <ResultList firstContent={firstContent} secondContent={secondContent} />}

            </Container>

        </div>
    )
}
export default Result