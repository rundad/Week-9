module.exports = function(db,app,ObjectID){
    //Route to get a single item
    
    app.post('/getProduct',function(req,res){
      
      
        if (!req.body) {
         return res.sendStatus(400)
        }
        
        productID = req.body.productid;
        //Create objectID from passed in+id
        var objectid = new ObjectID(productID);
        const collection = db.collection('products');
        collection.find({_id:objectid}).limit(1).toArray((err,docs)=>{
            //send to client and array of items limited to 1.
            console.log(docs);
              res.send(docs);
        })
         
    })

    app.post('/update',function(req,res){
      
        if (!req.body) {
         return res.sendStatus(400)
        }
        product = req.body;
        //console.log(req);
        var objectid = new ObjectID(product.objid);
        const collection = db.collection('products');
        collection.updateOne({_id:objectid},{$set:{name:product.name, description: product.description, price: product.price, units:product.units}},()=>{
          //Return a response to the client to let them know the delete was successful
           res.send(true);
       })

    });
    
}