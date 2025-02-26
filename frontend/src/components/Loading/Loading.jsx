import './Loading.css';
import { FiLoader } from "react-icons/fi";

const Loading = () => {
  return (
    <div className='loading'>
      <FiLoader className='spin' size={48}/>
    </div>
  )
}

export default Loading
