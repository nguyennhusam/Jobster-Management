import { Link } from 'react-router-dom';
import img from '../assets/images/not-found.svg';
import Wrapper from '../assets/wrappers/ErrorPage';
// import Wrapper from '../assets/wrappers/RegisterPage';


const Error = () => {
  return (
    <Wrapper className='full-page'>
      <div>
        <img src={img} alt='not found' />
        <h3>Wellcome to Josbter Management</h3>
        <p>Click on go to landing</p>
        <Link to='/'>go to landing page</Link>
      </div>
    </Wrapper>
  );
}
export default Error;