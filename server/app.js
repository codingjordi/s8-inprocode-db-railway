import express from 'express'
import cors from 'cors'

import fountainsRoutes from './routes/fountains.routes.js'
import tasksRoutes from './routes/tasks.routes.js'

const app = express()
app.use(function(req, res, next) {
    res.removeHeader('X-Powered-By');
    next();
  }
);

app.use(cors())
app.use(express.json())

app.use(fountainsRoutes) 
app.use(tasksRoutes)

export default app; 