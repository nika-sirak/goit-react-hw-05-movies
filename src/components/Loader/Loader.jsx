import { ThreeDots } from 'react-loader-spinner';
import s from './Loader.module.css';

function Loader() {
  return (
    <div className={s.loaderContainer}>
      <ThreeDots color="#90cea1" />
    </div>
  );
}

export default Loader;
