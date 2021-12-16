const Running = require('../database/models/runningModel')

module.exports.createRunning = async (runningData) => {
    let running = new Running({...runningData});
    try{
        return await running.save()
    }catch(err){
        console.log('Fail to save a new running entry in the database', err);
        throw new Error(err);
    }
}