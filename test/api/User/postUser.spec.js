


describe(`API :: POST /api/${version}/create-user`,function(){
    context('when sent data is ok',function(){
        it('creates and returns 201 and the new user',(done)=>{
            request
             .post(`/api/${version}/create-user`)
             .send({
                'first_name': 'Anifowose',
                'last_name': '"Habeeb',
                'username': 'mthamayor',
                'date_of_birth': '31-01-1995'  
             })
             .expect(201)
             .end((err,res)=>{
                expect(res.body).have.keys(['status','data'])
                expect(res.body.data).have.keys(['name_prefix','first_name','last_name','username','date_of_birth'])
                expect(res.body.status).to.equal('success')
                expect(res.body.data.success).to.equal('User account successfully created')
                done(err)
             })     
         })
    })

    context('when firstname, username,date_of_birth does not exist',function(){
        it('does not create user and returns 400 with the validation error', function(done){
            request
            .post(`/api/${version}/create-user`)
            .expect(400)
            .end((err,res)=>{
                expect(res.body).have.keys(['status','error'])
                expect(res.body.status).to.equal('error')
                expect(res.body.error).to.equal('ValidationError')
                done(err)
            })
        })
    })
})
