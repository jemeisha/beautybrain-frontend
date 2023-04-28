import { useQuery } from "react-query"
import Container from "./Container"
import NavBar from "./NavBar"
import Product from "./Product"
import mainLogo from './images/logo.png'
import { useContext, useEffect, useState } from "react"
import MiniProduct from "./MiniProduct"
import { PredictContext } from "./Contexts"


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
            <div className="collapse w-full">
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
            </div>
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
        output: productOutput

    } = useContext(PredictContext)
    const [firstContent, setFirstContent] = useState([])
    const [secondContent, setSecondContent] = useState([])
    const [isMakeup, setIsMakeup] = useState(true)
    const [isAnswers, setIsAnswers] = useState(false)
    const [data, setData] = useState(recommendedProducts)
    const [makeupData, setMakeupData] = useState(recommendedProducts)
    const [skincareData, setSkincareData] = useState(recommendedProducts)

    useEffect(() => {
        console.log(data)
        console.log("ProductOut", productOutput)


    }, [data])
    useEffect(() => {
        if (isAnswers) {

            if (productOutput === "2") {
                const product_type = isMakeup ? "makeup" : "skincare"
                setData(answerBasedProducts.filter((x) => x["product_type"] === product_type))
            }
            else {
                setData(answerBasedProducts)
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

    }, [isAnswers, isMakeup, recommendedProducts, answerBasedProducts])

    useEffect(() => {
        // console.log("Data ", Array.isArray(data))
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

    return (
        <div className="App w-screen bg-[#f8f1e9]">
            <NavBar />
            <Container>
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
                        <span className={`tab tab-bordered ${!isAnswers ? 'tab-active' : ""} text-black`} onClick={() => setIsAnswers(false)}>AI recommendations</span>
                        <span className={`tab tab-bordered ${isAnswers ? 'tab-active' : ""} text-black`} onClick={() => setIsAnswers(true)}>Answer based recommendations</span>
                    </div>
                </div>
                <div className="divider w-full border-black border-opacity-40 border-b-2 md-2"></div>
                {productOutput == 0 && <div className="text-xl text-black mb-5 ">Makeup products({data.length})</div>}
                {productOutput == 1 && <div className="text-xl text-black mb-5 ">Skincare products({data.length})</div>}
                {productOutput == 2 && <div className="tabs text-black mb-5">
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