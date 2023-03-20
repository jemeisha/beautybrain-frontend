import { Button } from "react-daisyui";

function Question({ question, placeHolder, onNext,options }) {
    return (
        <div >
            <div className="mt-5 text-3xl font-thin">{question}</div>
            <div className="mt-2">
                
                <select className="select w-full max-w-xs mt-5 ">
                    <option className="" disabled selected>{placeHolder}</option>
                    {options.map((o)=>{
                        return(
                            <option value={o.value}>{o.text}</option>
                        )
                    })}
                </select>
            </div>
            <div>
                <Button className="mt-3 w-32"variant="secondary" onClick={onNext}>Next</Button>
            </div>
        </div>
    )

}
export default Question;