import { useContext, useState } from "react"
import { Button } from "react-daisyui"
import Question from "./Question"
import WebCam from "./WebCam"
import BeatLoader from "react-spinners/BeatLoader";
import axios from 'axios';
import { PredictContext } from "./Contexts";
import { Navigate, useNavigate } from "react-router-dom";


const QUESTIONS = [
  {
    question: "How would you describe your skin type?",
    placeHolder: "Eg: Oily, Normal, Dry ",
    answer: "",
    type: "option",
    options: [
      {
        value: "oily",
        text: "Oily"
      },
      {
        value: "normal",
        text: "Normal"
      },
      {
        value: "dry",
        text: "Dry"
      }
    ]
  },
  {
    question: "Do you have any specific skin concerns",
    placeHolder: "Eg: Acne, Dark-spots, Wrinkles, Dryness",
    answer: "",
    type: "option",
    options: [
      {
        value: "acne",
        text: "Acne"
      },
      {
        value: "dark-spots",
        text: "Dark-Spots"
      },
      {
        value: "wrinkles",
        text: "Wrinkles"
      },
      {
        value: "dryness",
        text: "Dryness"
      }
    ]
  },
  {
    question: "How often do you currently use skincare products?",
    placeHolder: "Eg:Once-a-day",
    answer: "",
    type: "option",
    options: [
      {
        value: "once",
        text: "Once-a-day"
      },
      {
        value: "twice",
        text: "Twice-a-day"
      },
      {
        value: "thrice",
        text: "Thrice-a-day"
      },
      {
        value: "more",
        text: "More than thrice-a-day"
      },
      {
        value: "never",
        text: "Never"
      }
    ]
  },
  {
    question: "Are you currently using any skincare products to address specific concerns?",
    placeHolder: "Yes/No",
    answer: "",
    type: "option",
    options: [
      {
        value: "yes",
        text: "Yes"
      },
      {
        value: "no",
        text: "No"
      }
    ]
  },
  {
    question: "Have you noticed any changes in your skin recently?",
    placeHolder: "Eg: breakouts, dryness, redness",
    answer: "",
    type: "option",
    options: [
      {
        value: "breakouts",
        text: "Breakouts"
      },
      {
        value: "dryness",
        text: "Dryness"
      },
      {
        value: "redness",
        text: "Redness"
      }
    ]
  }
]

function Recommender() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  // const [answers, setAnswers] = useState([])
  const { 
    answers,
    setAnswers,
    imgData,
    setImgData,
    output,
    setOutput,
    recommendedProducts,
    setRecommendedProducts 
  } = useContext(PredictContext)
  const navigate=useNavigate()
  const [secondaryStep, setSecondaryStep] = useState(-1)
  // const [imgData, setImgData] = useState("")
  // const [output, setOutput] = useState(0)
  /* 
  0= Makeup
  1= Skincare
  2= Both
  */
  const [isSubmitting, setIsSubmitting] = useState(false)

  return (

    <div className="w-1/2 mx-auto ">
      <div className='mx-auto text-xl mt-24' >DISCOVER <br />YOUR PERFECT LOOK</div>

      {
        secondaryStep < 0 &&
        <>
          <div className="mt-5">Question {currentQuestion + 1} out of {QUESTIONS.length}</div>
          <Question key={currentQuestion} question={QUESTIONS[currentQuestion].question}
            placeHolder={QUESTIONS[currentQuestion].placeHolder}
            options={QUESTIONS[currentQuestion].options}
            onNext={() => {
              if (currentQuestion == QUESTIONS.length - 1) {
                setSecondaryStep(0)

              } else {
                setCurrentQuestion(currentQuestion + 1)
              }

            }}
            onChange={(e) => {
              const x = [...answers]
              x[currentQuestion] = e.target.value
              setAnswers(x)
            }} />
        </>
      }

      {
        secondaryStep == 0 &&
        <>
          <div className="mt-5">We need to capture your face for the recommendations</div>
          <WebCam onCapture={(imageSrc) => {
            setImgData(imageSrc)
            setSecondaryStep(1)
          }} />
        </>
      }

      {
        secondaryStep == 1 &&
        <div >
          <div className="mt-5 text-3xl font-thin">Your products are ready..</div>
          <div className="mt-3 text-lg font-thin">Which product recommendations do you want?</div>
          <div className="mt-2">

            <select className="select w-full max-w-xs mt-5 " onChange={(e) => {
              setOutput(e.target.value)
            }}>
              <option className="" value={0} >{"Makeup"}</option>
              <option className="" value={1} >{"Skincare"}</option>
              <option className="" value={2}>{"Both Makeup & Skincare"}</option>
            </select>
          </div>
          <div>
            <Button className="mt-3 w-72" variant="secondary" onClick={async () => {
              setIsSubmitting(true)
              const resp = await axios.post("http://127.0.0.1:8000/predict", {
                answers: answers,
                output: output,
                imgData: imgData
              },{
                headers:{
                  'Content-Type': 'application/json'
                }
              })
              console.log(resp.data)
              setRecommendedProducts(resp.data)
              navigate("/result")
            }}>
              {!isSubmitting && " View Recommended Products"}
              {isSubmitting && <BeatLoader />}
            </Button>
          </div>
        </div>
      }

    </div>
  )
}
export default Recommender;