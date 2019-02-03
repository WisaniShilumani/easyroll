const { 
  default_headers,
  error_message,
  error_message_forbidden,
  error_message_invalid,
  error_message_not_found,
  error_message_unauthorized,
  error_message_invalid_input
 } = require('./responses')

const response = (statusCode, data) => ({
  statusCode,
  headers: default_headers,
  body: JSON.stringify(data)
})

const emptyResponse = () => ({
  statusCode: 204,
  headers: default_headers
})

const errorResponse = (statusCode, message) => response(statusCode, { message })

// success : content
module.exports.ok = data => response(200, data)
module.exports.created = data => response(201, data)

// success : no content
module.exports.deleted = () => emptyResponse()
module.exports.updated = () => emptyResponse()

// error
module.exports.invalid = (errorMessage = error_message_invalid) =>
  errorResponse(400, errorMessage)
module.exports.unauthorized = (errorMessage = error_message_unauthorized) =>
  errorResponse(401, errorMessage)
module.exports.forbidden = (errorMessage = error_message_forbidden) =>
  errorResponse(403, errorMessage)
module.exports.notFound = (errorMessage = error_message_not_found) =>
  errorResponse(404, errorMessage)
module.exports.invalidInput = (errorMessage = error_message_invalid_input) =>
  errorResponse(405, errorMessage)
module.exports.error = (errorMessage = error_message, statusCode = 500) =>
  errorResponse(statusCode, errorMessage)
