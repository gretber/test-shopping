// Core
import { useState } from 'react';

// Styles
import './index.scss';

// Separator
import separator from '../../assets/images/separator.png';

// Material
import { Typography, Breadcrumbs } from '@material-ui/core';

// Components
import { Shipping } from '../Shipping';
import { Billing } from '../Billing';
import { Payment } from '../Payment';

export const OrderData = () => {
    const [shipping, setShipping] = useState(true);
    const [billing, setBilling] = useState(false);
    const [payment, setPayment] = useState(false);
    const [count, setCount] = useState(0);

    const handleClick = (event) => {
        event.preventDefault();
        const step = event.target.innerHTML;
        switch(step){
            case 'Shipping':
                setShipping(true);
                setBilling(false);
                setPayment(false);
                setCount(0);
                break
            case 'Billing':
                setShipping(false);
                setBilling(true);
                setPayment(false);
                setCount(1);
                break
            case 'Payment':
                setShipping(false);
                setBilling(false);
                setPayment(true);
                setCount(2);
                break
            default: 
                setShipping(true);
                setBilling(false);
                setPayment(false);
                setCount(0);
        }
    }

    let stepJSX = <Shipping />;
   switch(count){
        case 0: stepJSX = <Shipping />
        break
        case 1: stepJSX = <Billing />
        break
        case 2: stepJSX = <Payment />
        break
        default: stepJSX = <Shipping />
    } 


    return (
        <section className='order-data'>
            <Breadcrumbs separator={<img src={separator} alt='separator' />} aria-label="breadcrumb">
                <Typography color={shipping?'primary':'secondary'} onClick={handleClick}>Shipping</Typography>
                <Typography color={billing?'primary':'secondary'} onClick={handleClick}>Billing</Typography>
                <Typography color={payment?'primary':'secondary'} onClick={handleClick}>Payment</Typography>
            </Breadcrumbs>

            {stepJSX}
        </section>
    )
}