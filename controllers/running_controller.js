const runningService = require('../services/running_service')

module.exports.createRunning = async (req, res) => {
    let response = {};
    try{
      const responseFromService = await runningService.createRunning(req.body);
      response.status = 200;
      response.message = 'Running activity created';
      response.body = responseFromService;
    }catch(err){
        console.log('Something went wrong: Controller : Running: ', err);
        response.status = 400;
        response.message = err.message;
        response.body = {};
    }
    return res.status(response.status).send(response);
};