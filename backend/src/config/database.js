const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost/mymoney', {useNewUrlParser: true})

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obriatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor do que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior do que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum = "'{VALUE}' não é válio para o atributo '{PATH}'."