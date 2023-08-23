import '../css/nav.css'
import '../css/root.css'
import { useState } from 'react'



function Burger(){

    const[brgState, setBrgState] = useState(false);

    function handleClick(){
        setBrgState(brgState => !brgState);
    }

    let toggleClassCheck = brgState ? ' active': null;

    return (
        <div className='burgerBox'>
            <div className={`Burger${toggleClassCheck}`} onClick={handleClick}>
                <div className='bar1' />
                <div className='bar2' />
                <div className='bar3' />
            </div>
        </div>
    )
}

export default Burger;