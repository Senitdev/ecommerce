import { Button } from 'react-bootstrap';
import '../../header/subscribe/form.css';
export const FormSubscribe=()=>{
    return<>
    <form>
        <div>
        <input type="email" placeholder="Your Email adresse"></input>
        </div>
        <Button className='btn-subscribe'>Subscribe</Button>
    </form>
    </>
}