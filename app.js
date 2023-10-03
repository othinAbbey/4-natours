const express = require('express');
const morgan = require('morgan');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

//1) Middlewares
app.use(morgan('dev'));
app.use(express.json());

//middle ware

//app.use is used to call  middleware

// app.get('/', (req, res) => {
//   res.status(200).json({
//     message: 'Hello from the Server side!',
//     app: 'natours',
//     names: 'Abbey',
//     reason: 'I am winning',
//     why: 'i must win',
//   });
// });
// app.post('/', (req, res) => {
//   res.status(404).send('You can send to this endpoint');
// });

//////////////////////middlewares///////////////////////////
app.use((req, res, next) => {
  console.log('Hello from the middleware');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});
////////////////////////////middlewares////////////////////////////

// ////////////////////Rout handlers/////////////////////////////////
// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
// );

////////////////Route fucntions////////////////////////
// const getAlltours = (req, res) => {
//   console.log(req.requestTime);
//   res.status(200).json({
//     status: 'success',
//     requestedAt: req.requestTime,
//     results: tours.length,
//     data: {
//       tours: tours,
//     },
//   });
// };

// const getTour = (req, res) => {
//   console.log(req.params);

//   const id = req.params.id * 1;
//   const tour = tours.find((el) => el.id === id);

//   //if (id>tours.length) or if(!tour)
//   if (!tour) {
//     return res.status(404).json({
//       status: 'fail',
//       message: 'Invalid ID',
//     });
//   }

//   res.status(200).json({
//     status: 'success',
//     results: tours.length,
//     data: {
//       tour,
//     },
//   });
// };

// const createTour = (req, res) => {
//   //   console.log(req.body);
//   //adding an id to the newly created object
//   const newId = tours[tours.length - 1].id + 1;
//   const newTour = Object.assign({ id: newId }, req.body);

//   tours.push(newTour);
//   fs.writeFile(
//     `${__dirname}/dev-data/data/tours-simple.json`,
//     JSON.stringify(tours),
//     (err) => {
//       res.status(201).json({
//         status: 'success',
//         data: {
//           tour: newTour,
//         },
//       });
//     }
//   );
// };

// const updateTour = (req, res) => {
//   if (req.params.id * 1 > tours.length) {
//     return res.status(404).json({
//       status: 'fail',
//       message: 'Invalid ID',
//     });
//   }
//   res.status(200).json({
//     status: 'success',
//     data: {
//       tour: '<Updated tour Here...>',
//     },
//   });
// };

// const deleteTour = (req, res) => {
//   if (req.params.id * 1 > tours.length) {
//     return res.status(404).json({
//       status: 'fail',
//       message: 'Invalid ID',
//     });
//   }
//   res.status(204).json({
//     status: 'success',
//     data: null,
//   });
// };
////////////////user fucntions///////////////
// const getAllUsers = (req, res) => {
//   res.status(500).json({
//     status: 'error',
//     message: 'This route is not yet defined',
//   });
// };

// const getUser = (req, res) => {
//   res.status(500).json({
//     status: 'error',
//     message: 'This route is not yet defined',
//   });
// };
// const createUser = (req, res) => {
//   res.status(500).json({
//     status: 'error',
//     message: 'This route is not yet defined',
//   });
// };

// const updateUser = (req, res) => {
//   res.status(500).json({
//     status: 'error',
//     message: 'This route is not yet defined',
//   });
// };

// const deleteUser = (req, res) => {
//   res.status(500).json({
//     status: 'error',
//     message: 'This route is not yet defined',
//   });
// };

//Using Routes
//this is called mouting
// const tourRouter = express.Router();
// const userRouter = express.Router();
//3) ROUTES

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

//Tour router
// tourRouter.route('/').get(getAlltours).post(createTour);
// tourRouter.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

/////users routng
// userRouter.route('/').get(getAllUsers).post(createUser);
// userRouter.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);
///////////////Crude operations///////////////////

//using indicidual routes
// app.get('/api/v1/tours', getAlltours);
// app.get('/api/v1/tours/:id', getTour);
// app.post('/api/v1/tours', createTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);

//4) Start Server
//moved to server.js
module.exports = app;
