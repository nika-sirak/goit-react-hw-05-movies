import image404 from '../../images/404error.jpg';
import s from './NotFoundPage.module.css';

function NotFoundPage() {
  return (
    <section>
      <h1 className={s.error}>404...Page Not Found...</h1>
      <img src={image404} alt="page not found" />
    </section>
  );
}

export default NotFoundPage;
