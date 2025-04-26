import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from "yup";
import { AuthRepo } from '../../data/repos/AuthRepo';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Register() {
    const navigate = useNavigate()
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{6,20}$/;
    const phoneRegex = /^\+201[0125]\d{8}$/;
    const validationSchema = Yup.object({
        username: Yup.string().required('Required Field'),
        phone: Yup.string().required('Required Field').matches(phoneRegex, 'Invalid Phone Number'),
        email: Yup.string().email('Invalid Email').required('Required Field'),
        password: Yup.string().required('Required Field').matches(passwordRegex, 'Invalid Password criteria'),
    });

    const handleSubmit = (values) => {
        AuthRepo.register(values).then((res) => {
            res && toast.success(`Welcome ${res.user.username}`)
            res && sessionStorage.setItem('token', res.jwt);
            navigate('/')
        })
    }
    return (
        <div className='w-full h-[100vh] flex justify-center items-center bg-neutral-300 '>
            <Formik onSubmit={handleSubmit} validationSchema={validationSchema} initialValues={{
                email: "",
                password: '',
                username: '',
                phone: ''

            }}>
                <Form className='w-[550px] rounded-2xl p-3 shadow border-1 bg-white '>
                    <p className='!text-lg font-bold font-[roboto] text-center '>Register your Account</p>
                    <label className='w-full font-[roboto] text-sm font-medium'>Enter your Username</label>
                    <Field type="text" name='username' className='form-control'></Field>
                    <ErrorMessage name='username' component="div" className='text-red-500'></ErrorMessage>

                    <label className='w-full font-[roboto] text-sm font-medium'>Enter your Phone Number</label>
                    <Field type="text" name='phone' className='form-control'></Field>
                    <ErrorMessage name='phone' component="div" className='text-red-500'></ErrorMessage>


                    <label className='w-full font-[roboto] text-sm font-medium'>Enter your E-mail address</label>
                    <Field type="text" name='email' className='form-control'></Field>
                    <ErrorMessage name='email' component="div" className='text-red-500'></ErrorMessage>

                    <label className='w-full font-[roboto] text-sm font-medium'>Enter your Password</label>
                    <Field type="password" name='password' className='form-control'></Field>
                    <ErrorMessage name='password' component="div" className='text-red-500'></ErrorMessage>

                    <button type='submit' className='w-full text-[var(--offwhite)] p-2 rounded !font-[roboto]  bg-[var(--darkgreen)] cursor-pointer transition hover:!bg-[var(--light)] hover:text-[var(--darkgreen)] font-bold'>Register</button>

                </Form>
            </Formik>

        </div>
    )
}
