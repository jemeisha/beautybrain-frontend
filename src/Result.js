import Container from "./Container"
import NavBar from "./NavBar"
import mainLogo from './images/logo.png'

function Result() {
    return (
        <div className="App h-screen w-screen bg-[#f8f1e9]">
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
            </Container>

        </div>
    )
}
export default Result