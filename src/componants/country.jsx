import { useState } from 'react';
import './styles/country.css'
const Country = ({country, handleMarkCounries}) => {

    const {name, flags} = country

    const [visited,setVisited] = useState(false)
    const handleBtn = ()=>{
        setVisited(!visited)
    }
    // console.log(handleMarkCounries)
    return (
       

       

            <div className='country'>
                <h4>Name : {name.common}</h4>
                <img style={{height: '250px', width: '100%', backgroundSize: 'contain'}} src={flags.png} alt="" />
                <button onClick={handleMarkCounries}>Mark this country</button><br /><br />
                <button onClick={handleBtn}>{visited? 'visited': 'Go to this place'}</button><br /><br />
                {visited? 'this place is visited':'please visit our'}
            </div>
        
        
    );
};

export default Country;