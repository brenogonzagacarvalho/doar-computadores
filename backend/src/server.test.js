const request = require('supertest')
const app = require('./server')

describe("GET /", () =>{
    
    describe('return status 200  ', () => {
            it('should get alive true ', async ()=>{
                const res = await request(app).get('/')            
                
                expect(res.body).toHaveProperty('alive')
               
            })
    })
})