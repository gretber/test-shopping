// Styles
import './index.scss';

// Material
import { Typography } from '@material-ui/core';

export const OrderSummary = () => {
    return (
        <section className='order-summary'>
            <div className='order-summary__header'>
                <Typography variant='subtitle1' color='primary'>Order Summary</Typography>
                <a className='order-summary__link' href='/'>
                    <Typography color='secondary'>edit order</Typography>
                </a>
            </div>
        </section>
    )
}