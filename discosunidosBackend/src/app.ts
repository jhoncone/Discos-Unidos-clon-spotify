import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import config from './config'

import discoRoutes from './routes/routeDiscos/disco.routes'
import userRoutes from './routes/routeUsers/user.routes'

const app=express()


app.set('port',config.PORT);



app.use(morgan('dev'));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(discoRoutes)
app.use(userRoutes)

export default app
