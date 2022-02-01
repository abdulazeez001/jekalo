

describe(`API :: GET /api/${version}/users`,function(){
    
    context('when getting all users',function(){
        it('gets list of users, return 200',function(done){
            request
            .get(`/api/${version}/users`)
            .expect(200)
            .end((err,res)=>{
                expect(res.body).have.keys(['status','data'])
                expect(res.body.status).to.equal('success')
                expect(res.body.data).to.be.an('array')
                expect(res.body.data[0]).have.keys(['name_prefix','first_name','last_name','username','date_of_birth'])
                done(err)
            })
        })
    })
})