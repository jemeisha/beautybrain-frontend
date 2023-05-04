import Container from "./Container"
import foundatest from "./images/foundatest.jpg"
import NavBar from "./NavBar"
import Footer from "./Footer"
import { useQuery } from "react-query"
import axios from "axios"
import { useSearchParams,useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import capitalize from "capitalize"
import { Button } from "react-daisyui"

function Field({ name, value, cap }) {
    if (value) {
        return (
            <div className="flex flex-col border-b-2 border-solid border-opacity-20 mr-3 pb-2">
                <div className="text-thin text-xs">
                    {name}
                </div>
                <div className="font-bold ">
                    {cap ? capitalize(value) : value}
                </div>
            </div>
        )
    }

}

function ProductPage() {
    const [searchParams] = useSearchParams()

    useEffect(() => {
        console.log("sp: ", searchParams.get("id"))
    }, [searchParams])

    const { isLoading, error, data } = useQuery(['product', searchParams], async (data) => {
        const res = await axios(`http://127.0.0.1:8000/product/${searchParams.get("id")}`)
        return res.data
    })
    const [product, setProduct] = useState({})

    useEffect(() => {
        console.log("Data: ", data)
        if (data) {
            const j = JSON.parse(data)
            if (j.length > 0) {
                setProduct(j[0])
            }
        }
    }, [data])
    const navigate=useNavigate()
    return (
        <div className='flex flex-col w-full bg-white'>
            <NavBar />
            <div>
                <Button onClick={() => navigate("/result")} className="bg-transparent mt-5 border-0 text-gray-800 hover:bg-transparent"> {"<<"} Back </Button>
            </div>
            <Container className='flex flex-row mt-10'>
                <div className="w-1/2 bg-white justify-center">
                    <img src={product.img} alt="product" className="w-full rounded-xl " />
                </div>
                <div className=' flex flex-col w-1/2 h-full px-10 rounded-xl ml-5 pb-10' >
                    <div className="text-black">
                        <p className="text-3xl mt-10 mb-5">{product.brand && capitalize(product.brand)}</p>
                        <p className="text-lg">{product.name && capitalize(product.name)}</p>
                    </div>
                    {product.rating && product.rating.trim().length > 0 && <span className="text-sm text-[#52462b] ">Rating: {product.rating}/5
                        <div className="rating rating-sm ml-1 ">
                            <input type="radio" name="rating-1" className="mask mask-star bg-primary" checked />
                        </div>
                    </span>}

                    <hr className="border-black mt-5 border-opacity-20"></hr>
                    <div className="text-black">
                        <p className="text-xl mt-5">PRODUCT DETAILS</p>

                        <div className="grid grid-cols-2 gap-3 mt-5">
                            {[
                                {
                                    name: "Product Type",
                                    key: "label",
                                    cap: true
                                },
                                {
                                    name: "Skin Type",
                                    key: "skin_type",
                                    cap: true
                                },
                                {
                                    name: "Concern",
                                    key: "concern",
                                    cap: true
                                },
                                {
                                    name: "Concern 1",
                                    key: "concern2",
                                    cap: true
                                },
                                {
                                    name: "Concern 2",
                                    key: "concern3",
                                    cap: true
                                },
                                {
                                    name: "Key Ingredient",
                                    key: "key_ingredient",
                                    cap: true
                                },
                                {
                                    name: "Fomulation",
                                    key: "fomula",
                                    cap: true
                                },
                                {
                                    name: "Fomulation",
                                    key: "formulation",
                                    cap: true
                                },
                                {
                                    name: "Shade",
                                    key: "shade",
                                    cap: true
                                },
                                {
                                    name: "Finish",
                                    key: "finish",
                                    cap: true
                                },
                                {
                                    name: "Coverage",
                                    key: "coverage",
                                    cap: true
                                },
                                {
                                    name: "Skin Tone",
                                    key: "skin tone",
                                    cap: true
                                },
                            ].map((x) => <Field name={x.name} value={product[x.key]} cap={x.cap} />)}
                        </div>

                    </div>

                </div>
            </Container>
            <Footer />
        </div>
    )
}
export default ProductPage