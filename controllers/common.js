'use strict'

module.exports = function commonCallBacks (res, error, succesVar)  {
    if (error) return res.status(500).send({message: 'Something went wrong'});
    if (!succesVar) return res.status(404).send({message: 'Not found'});

    return res.status(200).send({response: succesVar});
};