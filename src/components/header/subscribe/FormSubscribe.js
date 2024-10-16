import { Button } from 'react-bootstrap';
import '../../header/subscribe/form.css';
export const FormSubscribe=()=>{
    return<>
    <form>
        <div className='_subscribe'>
        <input type="email" placeholder="Your Email adresse"></input>
        </div>
        <Button className='btn-subscribe'>Subscribe</Button>
    </form>
    </>
}