// Styles
import './index.scss';

// Material
import {Container, Typography, Badge} from '@material-ui/core';

// Images
import logo from '../../assets/images/logotype.png';
import shape from '../../assets/images/shape.png';

export const Header = () => {
    return (
        <header className='header'>
            <Container maxWidth="sm">
                <div className='header__wrapper'>
                    <div className='logo'>
                        <img src={logo} alt='logo' />
                        <Typography className='logo__text ' color='primary' component='span'>Front-end Developer Test Task</Typography>
                    </div>
                    <div className='cart'>
                        <span className='cart__text'>cart</span>
                        <Badge badgeContent={3} color="error">
                            <img className='cart__shape' src={shape} alt='shape'/>
                        </Badge>
                    </div>
                </div>
            </Container>
        </header>
    )
}