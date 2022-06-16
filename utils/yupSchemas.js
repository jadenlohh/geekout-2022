const yup = require("yup");

const yupSchemas = {
    loginSchema: yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().required(),
    }),

    tokenOnlyBody: yup.object().shape({
        token: yup.string().required(),
    }),

    insertData: yup.object().shape({
        token: yup.string().required(),
        score: yup.number().required(),
    }),

    deleteData: yup.object().shape({
        token: yup.string().required(),
        _id: yup.string().required(),
    }),

    registerSchema: yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().required(),
        name: yup.string().required(),
        age: yup.number().required(),
        gender: yup.string().required(),
    }),
};

module.exports = yupSchemas;
