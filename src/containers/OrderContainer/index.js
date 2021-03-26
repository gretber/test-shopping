// Styles
import './index.scss';

// Components
import { OrderData } from '../../components/OrderData';
import { OrderSummary } from '../../components/OrderSummary';

// Material
import Container from '@material-ui/core/Container';

export const OrderContainer = () => {

    return(
        <Container maxWidth="sm">
            <main className='ordering'>
                <OrderData />
                <OrderSummary />
            </main>
        </ Container>
    )
}