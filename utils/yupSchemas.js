const yup = require("yup");

const yupSchemas = {
    loginSchema: yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().required(),
    }),

    getData: yup.object().shape({
        token: yup.string().required(),
    }),

    insertData: yup.object().shape({
        token: yup.string().required(),
        score: yup.number().required(),
    }),
};

module.exports = yupSchemas;