import card1 from '../css/images/bild1.jpg'
import card2 from '../css/images/bild2.png'
import card3 from '../css/images/bild3.png'


import QRCode from 'react-qr-code'
<QRCode 
    size={200}
    bgColor="white"
    fgColor="grey"
    value="Subscribe to Piratenland"
/>





<div className="card-container">
<div className='card'>
    <img src={card1} alt='card'/>
</div>
<div className='card'>
    <img src={card2} alt='card'/>
</div>
<div className='card'>
    <img src={card3} alt='card'/>
</div>
</div>