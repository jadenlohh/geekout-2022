const yup = require("yup");

const yupSchemas = {
    loginSchema: yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().required(),
    }),
};

module.exports = yupSchemas;
