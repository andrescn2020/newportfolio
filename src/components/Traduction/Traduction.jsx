import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage } from '../../redux/actions.js';
import "./Traduction.css";

const Traduction = () => {


    const dispatch = useDispatch();
    const language = useSelector((state) => state.language);

    return (
        <div className='traduction-button' onClick={() => dispatch(changeLanguage())}>
            {language === "en" ? <span>ES</span> : <span>EN</span>}
        </div>
    )
};

export default Traduction;