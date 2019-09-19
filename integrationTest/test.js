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
        it('it should added a new product', ()=>{
            chai.request("http://localhost:3000").post('/add')
            .send({id: 4, name: "iphone", description: "iphone", price:600, units:1})
                .end((err, res)=>{
                    res.should.have.status(200);
                    res.body.should.be.a('boolean');
     
                })
        })

        it('it should added a new product', ()=>{
            chai.request("http://localhost:3000").post('/add')
            .send({id: 3, name: "iphone11", description: "iphone11", price:1000, units:1})
                .end((err, res)=>{
                    res.should.have.status(200);
                    res.body.should.be.a('boolean');
     
                })
        })
    })

    describe('/getProduct', ()=>{
        it('it should get all the products', ()=>{
            chai.request("http://localhost:3000").post('/getProduct')
            .send({productid: "5d83fbb76ad55124089d5e16"})
                .end((err, res)=>{
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                 
                })
        })
        it('it should get all the products', ()=>{
            chai.request("http://localhost:3000").post('/getProduct')
            .send({productid: "5d83fbc06ad55124089d5e17"})
                .end((err, res)=>{
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                 
                })
        })
     
    })
    describe('/update', ()=>{
        it('it should get all the products', ()=>{
            chai.request("http://localhost:3000").post('/update')
            .send({objid: "5d84076f6ad55124089d5e1d", id: 1, name: "iphone12", description: "iphone12", price:1100, units:1})
                .end((err, res)=>{
                    res.should.have.status(200);
 
                })
        })
        it('it should get all the products', ()=>{
            chai.request("http://localhost:3000").post('/update')
            .send({objid: "5d8407756ad55124089d5e1e", id: 2, name: "iphone111", description: "iphone111", price:100, units:1})
                .end((err, res)=>{
                    res.should.have.status(200);
 
                })
        })
    })

    describe('/deleteProduct', ()=>{
        it('it should get all the products', ()=>{
            chai.request("http://localhost:3000").post('/deleteProduct')
            .send({productid: "5d84076f6ad55124089d5e1d"})
                .end((err, res)=>{
                    res.should.have.status(200);
                    res.body.should.be.a('array');
             
                })
        })
        it('it should get all the products', ()=>{
            chai.request("http://localhost:3000").post('/deleteProduct')
            .send({productid: "5d8407756ad55124089d5e1e"})
                .end((err, res)=>{
                    res.should.have.status(200);
                    res.body.should.be.a('array');

                })
        })
    })
})
