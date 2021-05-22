import dotenv from 'dotenv'
dotenv.config()
import app from './app'
import './database'

//console.log(process.env.TESTING)

app.listen(app.get('port'),()=>{
    console.log('server on port',app.get('port'))

})