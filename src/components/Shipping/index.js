// Styles
import './index.scss';

// Material
import { Typography, Button } from '@material-ui/core';

// Helpers
import { countries } from '../../helpers/countryData';

// ID generator
import nextId from 'react-id-generator';

export const Shipping = () => {
    return (
        <section className='shipping'>
            <form>
                <Typography className='shipping__title' color='primary' variant='h3'>Shipping info</Typography>
                <div className='shipping__name-wrapper'>
                    <label htmlFor='name'>
                        <Typography color='primary' variant='subtitle1'>Recipient</Typography>
                    </label>
                    <input type='name' name='name' className='full-width' />
                </div>
                <div className='shipping__daytime-phone-wrapper'>
                    <input type='name' name='name' />
                    <label htmlFor='name'>
                        <Typography color='textPrimary' variant='subtitle2'>For delivery questions only</Typography>
                    </label>
                </div>
                <div className='shipping__adress-wrapper'>
                    <label htmlFor='name'>
                        <Typography color='primary' variant='subtitle1'>Adress</Typography>
                    </label>
                    <input type='adress' name='adress' className='full-width' />
                </div>
                <div>
                    <input type='adress' name='adress' className='full-width' />
                </div>
                <div className='shipping__city-wrapper'>
                    <input type='city' name='city' className='full-width' />
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
                    <input type='zip' name='zip' className='shipping__zip-input' />
                </div>
                <Button variant="contained" color="primary">Continue</Button>
            </form>
        </section>
    )
}