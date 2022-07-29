let chai = require('chai');
let chaiHttp = require('chai-http');
const { response } = require('../index');
let server = require('../index');
var assert  = chai.assert;

chai.should();
chai.use(chaiHttp);

describe('Book Unit Testing',()=>{
    describe('Get Type unit Testing',()=>{
        it('Get all books',(done)=>{
            chai.request(server).get('/book').end((err,response)=>{
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
        it('GET Book By ID',(done)=>{
            const id = 2;
            chai.request(server).get('/book/'+id).end((err,response)=>{
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
            chai.request(server).get('/book/'+id).end((err,response)=>{
                if(err){
                    console.log(err);
                }
                else{
                    response.body.should.have.property('bookid');
                    response.body.should.have.property('bookTile');
                    response.body.should.have.property('bookDescription');
                    response.body.should.have.property('isReading');
                    response.body.should.have.property('isRecommended');
                    response.body.should.have.property('isBookmarked');
                    response.body.should.have.property('createdAt');
                    response.body.should.have.property('updatedAt');
                    response.body.should.have.property('categoryId');
                    response.body.should.have.property('authorId');
                }
            });
            done();
        })
    })
    describe('POST Type unit Testing',()=>{
        it('POST some employee',(done)=>{
            const bookData = {
                bookTile:"Sherlock Homes",
                bookDescription:"Story about sherlock Homes",
                bookLanguage:"Marathi",
                isReading:"true",
                isRecommended: "true",
                isBookmarked: "true",
                categoryId: 2,
                authorId:3
            }
            chai.request(server).post('/book').send(bookData).end((err,response)=>{
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
})