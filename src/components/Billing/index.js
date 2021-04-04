// Styles
import './index.scss';

// Material
import { Typography, Button } from '@material-ui/core';

// Helpers
import { countries } from '../../helpers/countryData';

// ID generator
import nextId from 'react-id-generator';

export const Billing = () => {
    return (
        <section className='billing'>
            <form>
                <div className='billing__title-wrapper'>
                    <Typography className='shipping__title' color='primary' variant='h3'>Billing Information</Typography>
                    <Typography color='primary' variant='body1'>Same as shipping</Typography>
                </div>
                <div className='shipping__name-wrapper'>
                    <label htmlFor='name'>
                        <Typography color='primary' variant='subtitle1'>Billing Contact</Typography>
                    </label>
                    <input type='name' name='name' value='Full Name' className='full-width' />
                </div>
                <div className='shipping__daytime-phone-wrapper'>
                    <input type='email' name='email' value='Daytime Phone' className='full-width' />
                </div>
                <div className='shipping__adress-wrapper'>
                    <label htmlFor='street-adress'>
                        <Typography color='primary' variant='subtitle1'>Billing Address</Typography>
                    </label>
                    <input type='street-adress' name='street-adress' value='Street Address' className='full-width' />
                </div>
                <div>
                    <input type='optional-adress' name='optional-adress' value='Apt, Suite, Bldg, Gate Code. (optional)' className='full-width' />
                </div>
                <div className='shipping__city-wrapper'>
                    <input type='city' name='city' value='City' className='full-width' />
                    <button type='button' />
                </div>
                <div className='shipping__country-wrapper'>
                    <select defaultValue='default' className='shipping__country-select'>
                        <option value='default' disabled>Country</option>
                        {
                        countries.map( country => {
                            return (
                                <option value={country} key={nextId()}>{country}</option>
                            )
                        })
                        }
                    </select>
                    <input type='zip' name='zip' value='ZIP' className='shipping__zip-input' />
                </div>
                <Button variant="contained" color="primary">Continue</Button>
            </form>
        </section>
    )
}