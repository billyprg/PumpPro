import * as yup from 'yup'
const phoneNoValidator = (value) => {
    if (value !== null && value !== '') {
        if (value.length < 3) {
            return new yup.ValidationError('Phone number must be at least 3 characters long');
        }
    }
    return true;
};
const ValidationSchema = {
    loginValidation: yup.object().shape({
        emailOrUsername: yup
            .string()
            .email("Please enter a valid email or user name")
            .required('Email Address is Required'),
        password: yup
            .string()
            .min(8, ({ min }) => `Password must be at least ${min} characters`)
            .required('Password is required'),
    }),
    signupValidation: yup.object().shape({
        email: yup
            .string()
            .email("Please enter a valid email or user name")
            .required('Email Address is Required'),
        username: yup
            .string()
            .required("Please enter a valid user name"),
        password: yup
            .string()
            .min(8, 'Password must be at least 8 characters')
            .matches(/[a-z]/, 'Password must contain at least 1 lowercase letter')
            .matches(/[A-Z]/, 'Password must contain at least 1 uppercase letter')
            .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least 1 special character')
            .required('Password is required'),
        confirmPassword: yup.string()
            .min(8, ({ min }) => `Password must be at least ${min} characters`)
            .oneOf([yup.ref('password'), null], 'Passwords must match'),
        fullName: yup
            .string()
            .required('Full name is required'),
        dob: yup
            .string()
            .required('Age is required'),
        phoneNo: yup.string().notRequired(),
        gender: yup
            .string()
            .required('Gender is required')
    }),
    resetPasswordValidation: yup.object().shape({
        password: yup
            .string()
            .min(8, 'Password must be at least 8 characters')
            .matches(/[a-z]/, 'Password must contain at least 1 lowercase letter')
            .matches(/[A-Z]/, 'Password must contain at least 1 uppercase letter')
            .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least 1 special character')
            .required('Password is required'),
        reEnterPassword: yup.string()
            .min(8, ({ min }) => `Password must be at least ${min} characters`)
            .oneOf([yup.ref('password'), null], 'Passwords must match'),
    }),
    changePasswordValidation: yup.object().shape({
        currentPassword: yup
            .string()
            .min(8, 'Password must be at least 8 characters')
            .matches(/[a-z]/, 'Password must contain at least 1 lowercase letter')
            .matches(/[A-Z]/, 'Password must contain at least 1 uppercase letter')
            .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least 1 special character')
            .required('Password is required'),
        newPassword: yup
            .string()
            .min(8, 'New Password must be at least 8 characters')
            .matches(/[a-z]/, 'New Password must contain at least 1 lowercase letter')
            .matches(/[A-Z]/, 'New Password must contain at least 1 uppercase letter')
            .matches(/[!@#$%^&*(),.?":{}|<>]/, 'New Password must contain at least 1 special character')
            .required('New Password is required')
            .notOneOf([yup.ref('currentPassword'), null], 'New Password must not match with current password'),
        reEnterPassword: yup.string()
            .min(8, ({ min }) => `Password must be at least ${min} characters`)
            .oneOf([yup.ref('newPassword'), null], 'Passwords must match'),
    })
}

export default ValidationSchema