import { Button } from 'react-daisyui';
import { Link } from 'react-router-dom';

function HeroBanner(){
    return(
     // fragment
      <> 
       <div className='mx-auto font-bold text-3xl w-1/2 mt-24' >DISCOVER <br />YOUR PERFECT LOOK</div>
       <div className='mx-auto w-1/2 text-lg mt-5 mb-5' >with AI-powered Makeup Recommendations Tailored to your unique skin tone and type</div>
       <Link to="/quiz" className='mx-auto w-1/2'>
       <Button className='' variant='primary'>Recommend Me</Button>
       </Link>
      </>
    )
 
 }
 export default HeroBanner;