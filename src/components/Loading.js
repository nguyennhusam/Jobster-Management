import { FadeLoader } from 'react-spinners'

const Loading = ({ center }) => {
    return <FadeLoader color='#2b2a4c' className={center ? 'loading loading-center' : 'loading'}></FadeLoader>;
};
export default Loading;