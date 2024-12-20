import express from 'express'
import cors from 'cors'

import fountainsRoutes from './routes/fountains.routes.js'
import tasksRoutes from './routes/tasks.routes.js'
import calendarRoutes from './routes/events.routes.js'
import graphicDataRoutes from './routes/graphic-data.routes.js'

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
app.use(calendarRoutes)
app.use(graphicDataRoutes)



export default app; 