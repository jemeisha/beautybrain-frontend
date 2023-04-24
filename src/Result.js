import { useQuery } from "react-query"
import Container from "./Container"
import NavBar from "./NavBar"
import Product from "./Product"
import mainLogo from './images/logo.png'
import { useContext, useEffect, useState } from "react"
import MiniProduct from "./MiniProduct"
import { PredictContext } from "./Contexts"


function ResultList({firstContent,secondContent}){
   useEffect(()=>{
    console.log("Is Array: ",Array.isArray(firstContent))
    console.log("Is Array second: ",Array.isArray(secondContent))
   }
   ,[])
    return(
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
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        Show more..
                    </div>
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
    const {recommendedProducts:data}=useContext(PredictContext)
    const [firstContent, setFirstContent] = useState([])
    const [secondContent, setSecondContent] = useState([])
    const [isMakeup,setIsMakeup]=useState(false)

    useEffect(() => {
        console.log("Data ",Array.isArray(data))
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
                <div className="divider w-full border-black border-opacity-40 border-b-2 my-2"></div>
                
                <div className="tabs text-black mb-5">
                    <span className={`tab tab-bordered ${isMakeup?'tab-active':""} text-black`} onClick={()=>setIsMakeup(true)}>Makeup</span>
                    <span className={`tab tab-bordered ${!isMakeup?'tab-active':""} text-black`} onClick={()=>setIsMakeup(false)}>Skincare</span>
                </div>
                {firstContent && firstContent.length && isMakeup && <ResultList firstContent={firstContent} secondContent={secondContent}/>}
                {firstContent && firstContent.length && !isMakeup && <ResultList firstContent={firstContent} secondContent={secondContent}/>}
 
            </Container>

        </div>
    )
}
export default Result