const Sequalize = require('sequelize');

const sequelize = new Sequalize('MYDB','root','Mysql@123',{
    host:'localhost',
    dialect:'mysql',
    pool:{max:5,min:0,idle:10000}
});



sequelize.authenticate().then(()=>{
    console.log('connected');
}).catch(err=>{
    console.log('error'+err);
})


module.exports = sequelize;