import './appBanner.scss';
import avengers from '../../resources/img/Avengers.png';
import avengersLogo from '../../resources/img/avengers.png';

const AppBanner = () => {
    return (
        <div className='app__banner'>
            <img src={avengers} alt="avengers" />
            <div className="app__banner-text">
                New comics every week! <br/>
                Stay tuned!
            </div>
            <img src={avengersLogo} alt="avengers logo" />
        </div>
    );
};

export default AppBanner;
