import RegisterForm from '../../RegisterForm';
import css from './RegisterPage.module.css';

const RegisterPage = () => {
  return (
    <div className={css.regContainer}>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
