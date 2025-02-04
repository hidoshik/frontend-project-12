import notFoundImage from '../assets/404.svg';

const NotFound = () => {
  return (
    <div className="text-center">
      <img
        alt="Страница не найдена"
        className="img-fluid h-25"
        src={notFoundImage}
        height="100vw"
        width="100vw"
      />
      <h1 className="h4 text-muted">Страница не найдена</h1>
      <p className="text-muted">
        Но вы можете перейти <a href="/">на главную страницу</a>
      </p>
    </div>
  );
};

export default NotFound;
