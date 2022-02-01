


describe(`API :: POST /api/${version}/users`,function(){
    context('when sent data is ok',function(){
        it('creates and returns 201 and the new user',(done)=>{
            request
             .post(`/api/${version}/users`)
             .send({
                'first_name': 'Anifowose',
                'last_name': 'Habeeb',
                'username': 'mthamayor',
                'date_of_birth': '31-01-1995'  
             })
             .expect(201)
             .end((err,res)=>{
                expect(res._body).have.keys(['status','data','message'])
                expect(res._body.status).to.equal('success')
                expect(res._body.message).to.equal('User created successfully')
                done(err)
             })     
         })
    })

})
