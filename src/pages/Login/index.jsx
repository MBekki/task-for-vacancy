import { useFormik } from 'formik';
// import login from '../../service/login';
// import { useState } from 'react';
// import { setToken } from '../../redux/action';
import { useDispatch } from 'react-redux';

const Login = () => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            login: '',
            password: '',
            fullname: '',
        },
        onSubmit: async (values, { resetForm }) => {},
    });

    return (
        <div className='login-page'>
            <div className='login-section'>
                <form className='login-form' onSubmit={formik.handleSubmit}>
                    {/* <div>
                        Пароль
                        <Input
                            placeholder='Введите пароль'
                            id='password'
                            name='password'
                            // type='password'
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                    </div> */}

                    <button type='submit'>submit</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
