// Styles
import './index.scss';

// Material
import { Typography, Button } from '@material-ui/core';

// Helpers
import { countries } from '../../helpers/countryData';

// ID generator
import nextId from 'react-id-generator';

export const Shipping = ({shippingInput, setShippingInput, handleOnLocationButtonClick}) => {
    const emptyField = false;
    const {
        fullName, daytimePhone, streetAddress,
        aptSuiteBldgGateCode, city, country, zip
    } = shippingInput;

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(shippingInput)
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        if(!value){
            console.log("Error!!!")
        }
        setShippingInput((prevState) => {
            return { ...prevState, [name]: value }
        })
      }

      const handleFocus = (event) => {
        const name = event.target.name;
        setShippingInput((prevState) => {
            return { ...prevState, [name]: '' }
        })
      }

      const handleBlur = (event) => {
        const name = event.target.name;
        if(!shippingInput[name]){
            console.log("Empty field!!!!")
        }
      }
    
    return (
        <section className='shipping'>
            <form onSubmit={handleSubmit}>
                <Typography className='shipping__title' color='primary' variant='h3'>Shipping info</Typography>
                <div className='shipping__name-wrapper'>
                    <label htmlFor='name'>
                        <Typography color='primary' variant='subtitle1'>Recipient</Typography>
                    </label>
                    <input onBlur={handleBlur} onFocus={handleFocus} onChange={handleChange} type='name' name='fullName' value={fullName} className='full-width' />
                </div>
                <div className='shipping__daytime-phone-wrapper'>
                    <input onBlur={handleBlur} onFocus={handleFocus} onChange={handleChange} type='phone' name='daytimePhone' value={daytimePhone} />
                    <label htmlFor='email'>
                        <Typography color='textPrimary' variant='subtitle2'>For delivery questions only</Typography>
                    </label>
                </div>
                <div className='shipping__adress-wrapper'>
                    <label htmlFor='street-adress'>
                        <Typography color='primary' variant='subtitle1'>Adress</Typography>
                    </label>
                    <input onBlur={handleBlur} onFocus={handleFocus} onChange={handleChange} type='street-adress' name='streetAddress' value={streetAddress} className='full-width' />
                </div>
                <div>
                    <input onBlur={handleBlur} onFocus={handleFocus} onChange={handleChange} type='optional-adress' name='aptSuiteBldgGateCode' value={aptSuiteBldgGateCode} className='full-width' />
                </div>
                <div className='shipping__city-wrapper'>
                    <input onBlur={handleBlur} onFocus={handleFocus} onChange={handleChange} type='city' name='city' value={city} className='full-width' />
                    <button onClick={handleOnLocationButtonClick} type='button' />
                </div>
                <div className='shipping__country-wrapper'>
                    <select onChange={handleChange} name='country' defaultValue='default' className='shipping__country-select'>
                        <option value='default' disabled>{country}</option>
                        {
                        countries.map( country => {
                            return (
                                <option value={country} key={nextId()}>{country}</option>
                            )
                        })
                        }
                    </select>
                    <input onBlur={handleBlur} onFocus={handleFocus} onChange={handleChange} type='zip' name='zip' value={zip} className='shipping__zip-input' />
                </div>
                <Button variant="contained" type='submit' color="primary">Continue</Button>
            </form>
        </section>
    )
}