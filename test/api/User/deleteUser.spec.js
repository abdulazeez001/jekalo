
describe(`API :: DELETE api/${version}/users/:username`,function(){
    let username
    beforeEach((done)=>{
        username = ''
        done()
    })

    context('when username is valid',function(){
        it('delete user, return 200',function(done){
              request 
                  .delete(`api/${version}/users/${username}`)
                  .expect(200)
                  .end((err,res)=>{
                    expect(res.body).have.keys(['status','message'])
                    expect(res.body.status).to.equal('success')
                    expect(res.body.message).to.equal('You deleted the user successfully')
                    done(err)
                  })
        })

    })

    context('when username is not valid',function(){
        it('does not delete user, return 401',function(done){
              request 
                  .delete(`api/${version}/users/${username}`)
                  .expect(401)
                  .end((err,res)=>{
                    expect(res.body).have.keys(['status','error'])
                    expect(res.body.status).to.equal('error')
                    expect(res.body.error).to.equal('ValidationError')
                    done(err)
                  })
        })

    })
})