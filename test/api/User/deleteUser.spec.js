
describe(`API :: DELETE api/${version}/users/:username`,function(){
    let username
    beforeEach((done)=>{
        username = 'abdulazeez'
        done()
    })

    context('when username is valid',function(){
        it('delete user, return 200',function(done){
              request 
                  .delete(`api/${version}/users/${username}`)
                  .expect(200)
                  .end((err,res)=>{
                      console.log(res)
                    // expect(res._body).have.keys(['status','message','info'])
                    // expect(res._body.status).to.equal('success')
                    // expect(res._body.message).to.equal('You deleted the user successfully')
                    done(err)
                  })
        })

    })
})