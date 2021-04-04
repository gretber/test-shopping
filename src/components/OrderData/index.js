// Core
import { useState, useEffect } from 'react';

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

// Helpers
import { getLocationAddress } from '../../helpers/getLocationAddress';

export const OrderData = () => {
    const [shipping, setShipping] = useState(true);
    const [billing, setBilling] = useState(false);
    const [payment, setPayment] = useState(false);
    const [count, setCount] = useState(0);

    const initialShippingInput = {
        fullName: 'Full Name',
        daytimePhone: 'Daytime Phone',
        streetAddress: 'Street Address',
        aptSuiteBldgGateCode: 'Apt, Suite, Bldg, Gate Code. (optional)',
        city: 'City',
        country: 'Country',
        zip: 'ZIP',
    }

    const initialError = {
        formErrors: {
            fullName: '', daytimePhone: '', streetAddress: '',
            aptSuiteBldgGateCode: '', city: '', country: '', zip: ''
        },
        fullName: false,
        daytimePhone: false,
        streetAddress: false,
        aptSuiteBldgGateCode: false,
        city: false,
        country: false,
        zip: false,
        formValid: false
    }

    const [ shippingInput, setShippingInput ] = useState(initialShippingInput);
    const [ error, setError ] = useState(initialError)

    const [ locationAddress, setLocationAddress ] = useState(null);

    useEffect(()=>{
        getLocationAddress(setLocationAddress);
    },[])

    useEffect(() => {
        if(locationAddress){
            const { road, house_number, city, country, postcode } = locationAddress;

            setShippingInput( prevState => {
                return {
                    ...prevState,
                    streetAddress: `${road}, ${house_number}`,
                    city,
                    country,
                    zip: postcode,
                }
            })
        }
    },[locationAddress])

    const handleOnLocationButtonClick = () => {
        getLocationAddress(setLocationAddress);
    }

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
        case 0: stepJSX = <Shipping handleOnLocationButtonClick={handleOnLocationButtonClick} shippingInput={shippingInput} setShippingInput={setShippingInput} />
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