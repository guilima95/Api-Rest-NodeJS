"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _express = require('express'); var _express2 = _interopRequireDefault(_express);



var _AuthController = require('./controllers/AuthController'); var _AuthController2 = _interopRequireDefault(_AuthController);
var _LivroController = require('./controllers/LivroController'); var _LivroController2 = _interopRequireDefault(_LivroController);
var _ProfileController = require('./controllers/ProfileController'); var _ProfileController2 = _interopRequireDefault(_ProfileController);
var _AnotacaoController = require('./controllers/AnotacaoController'); var _AnotacaoController2 = _interopRequireDefault(_AnotacaoController);


var _upload = require('./config/upload'); var _upload2 = _interopRequireDefault(_upload);
var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);

const routes =  _express.Router.call(void 0, );
const upload = _multer2.default.call(void 0, _upload2.default);

routes.get('/profile', _ProfileController2.default.show);
routes.get('/livros', _LivroController2.default.index);
routes.post('/livros', upload.single('thumbnail'), _LivroController2.default.store);
routes.delete('/livros', _LivroController2.default.destroy);

routes.post('/auth', _AuthController2.default.store);

routes.post('/livros/:livro_id/bookings', _AnotacaoController2.default.store)


module.exports = routes;