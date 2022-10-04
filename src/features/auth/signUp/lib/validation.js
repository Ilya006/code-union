import * as Yup from 'yup'

export const SignInSchema = Yup.object().shape({
  email: Yup.string().email('Email некорректный').required('Поле обязательное'),
  password: Yup.string().required('Поле обязательное'),
  passwordConfirmation: Yup.string()
    .required('Поле обязательное')
    .oneOf([Yup.ref('password'), null], 'Пароли должы совпадать'),
  politicalAgreement: Yup.boolean().oneOf(
    [true],
    'Примите Политическое соглашение'
  ),
})
