var assert = require('assert');
var add = require('../server/routes/add.js')
var read = require('../server/routes/read.js')
var remove = require('../server/routes/remove.js')
var update = require('../server/routes/update.js')
var http = require('http')
let chai = require('chai')
let chaiHttp = require('chai-http')
let should = chai.should();
chai.use(chaiHttp)


describe('Server test', function(){

    before(function() {console.log("before test");})
    after(function() {console.log("after test")})

    describe('/add', ()=>{
        it('should return all products', function(){
            http.post('http://localhost:3000/add', {id: 1, name: 'product 1', description: 'iphone', price: 600, units: 1}, function(response){
                assert.equal(response.statusCode, 200);

                response.body.should.be.a('boolean');
            })
        })
    })
    // describe('/list', ()=>{
    //     it('should return all products', function(){
    //         http.get('http://localhost:3000/list', function(response){
    //             assert.equal(response.statusCode, 200);

    //             response.body.should.be.a('array');
    //         })
    //     })
    // })
    // describe('/add', ()=>{
    //     it('it should insert a doc', (done)=>{
    //         chai.request("http://localhost:3000").post('/add').type('form').send({id: 1, name: 'product 1', description: 'iphone', price: 600, units: 1})
    //             .end((err, res)=>{
    //                 res.should.have.status(200);
    //                 res.body.should.be.a('boolean');
    //                 console.log(res.body);
    //                 done();
    //             })
    //     })
    // })
    // describe('/add', ()=>{
    //     it('it should insert a doc', (done)=>{
    //         chai.request("http://localhost:3000").post('/add').type('form').send({id: 2, name: 'product 2', description: 'iphone 11', price: 1000, units: 1})
    //             .end((err, res)=>{
    //                 res.should.have.status(200);
    //                 res.body.should.be.a('boolean');
    //                 res.body.should.be.eql(false)
    //                 console.log(res.body);
    //                 done();
    //             })
    //     })
    // })
    // describe('/list', ()=>{
    //     it('it should get all the products', (done)=>{
    //         chai.request("http://localhost:3000").get('/list')
    //             .end((err, res)=>{
    //                 res.should.have.status(200);
    //                 res.body.should.be.a('array');
    //                 done();
    //             })
    //     })
    // })
    // describe('/list', ()=>{
    //     it('it should get all the products', (done)=>{
    //         chai.request("http://localhost:3000").get('/list')
    //             .end((err, res)=>{
    //                 res.should.have.status(200);
    //                 res.body.length.should.be.eql(1);
    //                 console.log(res.body[0].name)
    //                 console.log(res.body.length)
    //                 done();
    //             })
    //     })
    // })
})
