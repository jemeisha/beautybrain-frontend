import { useQuery } from "react-query"
import Container from "./Container"
import NavBar from "./NavBar"
import Product from "./Product"
import mainLogo from './images/logo.png'
import { useEffect, useState } from "react"

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


function Result() {
    const { isLoading, error, data } = useQuery(['prediction'], (data) =>
        fetch(`http://127.0.0.1:8000/predict/`).then(res =>
            res.json()
        )
    )

    const [jsonData, setJsonData] = useState([])
    useEffect(()=>{
        if (data){
            setJsonData(JSON.parse(data))
        }

    },[data])

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
                <p>
                    Makeup Products
                </p>
                <div className="grid grid-cols-3 gap-10 mx-auto justify-between">
                    {
                        jsonData && jsonData.length && jsonData.map((product) => <Product

                            id={product.id}
                            brand={product.brand}
                            name={product.name}
                            url={product.img}
                            tags={product.tags}
                            rating={product.rating}
                        />)
                    }

                </div>
            </Container>

        </div>
    )
}
export default Result