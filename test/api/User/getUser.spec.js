

describe(`API :: GET /api/${version}/users`,function(){
    
    context('when getting all users',function(){
        it('gets list of users, return 200', function(done){
           request
            .get(`/api/${version}/users`)
            .expect(200)
            .end((err,res)=>{
                expect(res._body).have.keys(['status','data','message'])
                expect(res._body.status).to.equal('success')
                expect(res._body.data).to.be.an('array')
                done(err)
            })
        })
    })
})