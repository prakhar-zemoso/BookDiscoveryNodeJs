const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

var mongoos = require('mongoose');
describe('Get Type unit Testing',()=>{
    it('Get all Categories',(done)=>{
        chai.request(server).get('/categories').end((err,response)=>{
            if(err){
                console.log(err);
            }else{
                response.should.have.status(200);
                response.body.should.be.a('array');
               // response.body.length.should.be.eq(9);
            }
        })
        done();
    });
    it('GET Categories By ID',(done)=>{
        const id = 2;
        chai.request(server).get('/categories/'+id).end((err,response)=>{
            if(err){
                console.log(err);
            }
            else{
                response.should.have.status(200);
                response.body.should.be.a('object');
            }
        });
        done();
    });
    it('GET all the properies',(done)=>{
        const id = 2;
        chai.request(server).get('/category/'+id).end((err,response)=>{
            if(err){
                console.log(err);
            }
            else{
                response.body.should.have.property('categoryid');
                response.body.should.have.property('category_Type');
                response.body.should.have.property('createdAt');
                response.body.should.have.property('updatedAt');
            }
        });
        done();
    })
})
describe('POST Type unit Testing',()=>{
    it('POST some employee',(done)=>{
        const categoryData = {
            category_Type:"Sherlock Homes",
            
        }
        chai.request(server).post('/category').send(categoryData).end((err,response)=>{
            if(err){
                console.log(err);
            }else{
                //response.should.have.status(200);
                response.body.should.be.a('object');
                response.body.should.have.property('bookid').to.not.equal(0);

            }

        })
        done();
    })



})