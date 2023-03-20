import { useState } from "react"
import Question from "./Question"


const QUESTIONS = [
    {
      question: "How would you describe your skin type?",
      placeHolder: "Eg: Oily, Normal, Dry ",
      answer: "",
      type:"option",
      options:[
        {
          value:"oily",
          text:"Oily"
        },
        {
          value:"normal",
          text:"Normal"
        },
        {
          value:"dry",
          text:"Dry"
        }
      ]
    },
    {
      question: "Do you have any specific skin concerns",
      placeHolder: "Eg: Acne, Dark-spots, Wrinkles, Dryness",
      answer: "",
      type:"option",
      options:[
        {
          value:"acne",
          text:"Acne"
        },
        {
          value:"dark-spots",
          text:"Dark-Spots"
        },
        {
          value:"wrinkles",
          text:"Wrinkles"
        },
        {
          value:"dryness",
          text:"Dryness"
        }
      ]
    },
    {
      question: "How often do you currently use skincare products?",
      placeHolder: "Once-a-day",
      answer: "",
      type:"option",
      options:[
        {
          value:"once",
          text:"Once-a-day"
        },
        {
          value:"twice",
          text:"Twice-a-day"
        },
        {
          value:"thrice",
          text:"Thrice-a-day"
        },
        {
          value:"more",
          text:"More than thrice-a-day"
        },
        {
          value:"never",
          text:"Never"
        }
      ]
    },
    {
      question: "Are you currently using any skincare products to address specific concerns?",
      placeHolder: "Yes/No",
      answer: "",
      type:"option",
      options:[
        {
          value:"yes",
          text:"Yes"
        },
        {
          value:"no",
          text:"No"
        }
      ]
    },
    {
      question: "Have you noticed any changes in your skin recently?",
      placeHolder: "Eg: breakouts, dryness, redness",
      answer: "",
      type:"option",
      options:[
        {
          value:"breakouts",
          text:"Breakouts"
        },
        {
          value:"dryness",
          text:"Dryness"
        },
        {
          value:"redness",
          text:"Redness"
        }
      ]
    }
  ]

function Recommender(){
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [answers, setAnswers] = useState([])
    return(
      
       <div className="w-1/2 mx-auto ">
          <div className='mx-auto text-xl mt-24' >DISCOVER <br />YOUR PERFECT LOOK</div>
          <div className="mt-5">Question {currentQuestion+1} out of {QUESTIONS.length}</div>

          <Question question={QUESTIONS[currentQuestion].question} 
                    placeHolder={QUESTIONS[currentQuestion].placeHolder}
                    options={QUESTIONS[currentQuestion].options}
                    onNext={()=>{
                      setCurrentQuestion(currentQuestion+1)
                    }} />

        </div> 
    )
}
export default Recommender;