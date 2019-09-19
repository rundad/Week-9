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

    // describe('/add', ()=>{
    //     it('should return all products', function(){
    //         http.post('http://localhost:3000/add', {id: 1, name: 'product 1', description: 'iphone', price: 600, units: 1}, function(response){
    //             assert.equal(response.statusCode, 200);

    //             response.body.should.be.a('boolean');
    //         })
    //     })
    // })
    // describe('/list', ()=>{
    //     it('should return all products', function(){
    //         http.get('http://localhost:3000/list', (res)=>{
    //             assert.equal(res.statusCode, 200);

    //             // res.body.should.be.a('array');
    //             // console.log("type:", typeof(res.body))
    //             // console.log("type:", typeof(res))
    //             console.log("res: ", res.body)
    //             var body = '';
    //             res.on('data', function(d) {body += d;});
    //             res.on('end', function(){
    //                 assert.equal(body, [{"_id":"5d831be20b31e03c3cefa8ae","id":1,"name":"1","description":"1","price":1,"units":1}])
    //             })
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
    describe('/list', ()=>{
        it('it should get all the products', ()=>{
            chai.request("http://localhost:3000").get('/list')
                .end((err, res)=>{
                    res.should.have.status(200);
                    res.body.should.be.a('array');

                })
        })
        it('it should get all the products', ()=>{
            chai.request("http://localhost:3000").get('/list')
                .end((err, res)=>{
                    res.should.have.status(200);
                    res.body.should.be.a('array');

                })
        })
    })

    describe('/add', ()=>{
        it('it should get all the products', ()=>{
            chai.request("http://localhost:3000").post('/add')
            .send({id: 2, name: "iphone", description: "iphone", price:600, units:1})
                .end((err, res)=>{
                    res.should.have.status(200);
                    res.body.should.be.a('boolean');
     
                })
        })

        it('it should get all the products', ()=>{
            chai.request("http://localhost:3000").post('/add')
            .send({id: 3, name: "iphone11", description: "iphone11", price:1000, units:1})
                .end((err, res)=>{
                    res.should.have.status(200);
                    res.body.should.be.a('boolean');
     
                })
        })
    })

    describe('/deleteProduct', ()=>{
        it('it should get all the products', ()=>{
            chai.request("http://localhost:3000").post('/deleteProduct')
            .send({productid: "5d83316e8f6baf46205839d7"})
                .end((err, res)=>{
                    res.should.have.status(200);
                    res.body.should.be.a('array');
             
                })
        })
        it('it should get all the products', ()=>{
            chai.request("http://localhost:3000").post('/deleteProduct')
            .send({productid: "5d8332802eef18041cac6c27"})
                .end((err, res)=>{
                    res.should.have.status(200);
                    res.body.should.be.a('array');

                })
        })
    })

    describe('/getProduct', ()=>{
        it('it should get all the products', ()=>{
            chai.request("http://localhost:3000").post('/getProduct')
            .send({productid: "5d833040d08875277c1ce7a4"})
                .end((err, res)=>{
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    console.log(res.body)
                })
        })
        it('it should get all the products', ()=>{
            chai.request("http://localhost:3000").post('/getProduct')
            .send({productid: "5d833040d08875277c1ce7a4"})
                .end((err, res)=>{
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    console.log(res.body)
                })
        })
     
    })
    describe('/update', ()=>{
        it('it should get all the products', ()=>{
            chai.request("http://localhost:3000").post('/update')
            .send({objid: "5d833040d08875277c1ce7a4", id: 3, name: "iphone12", description: "iphone12", price:1100, units:1})
                .end((err, res)=>{
                    res.should.have.status(200);
 
                })
        })
        it('it should get all the products', ()=>{
            chai.request("http://localhost:3000").post('/update')
            .send({objid: "5d833040d08875277c1ce7a4", id: 2, name: "iphone111", description: "iphone111", price:100, units:1})
                .end((err, res)=>{
                    res.should.have.status(200);
 
                })
        })
    })
})
