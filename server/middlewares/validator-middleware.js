const validate = (schema) => async(req, res, next) => {
    try{
        console.log(req.body);
        const parseBody = await schema.parseAsync(req.body);
        console.log(parseBody);
        req.body = parseBody;
        next();
    }catch(err){
        console.log(err)
        const status = 400;
        const message = "Form inputs error";
        const details = err.errors[0].message;
        const error = {
            status,
            message,
            details
        }
        next(error);
    }
}

module.exports = validate;