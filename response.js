// utils/response.js

const sendResponse = (res, data, statusCode = 200) => {
  return res.status(statusCode).json({
    status: true,
    data,
  });
};

const sendErrorResponse = (res, err) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  return res.status(statusCode).json({
    status: false,
    message,
  });
};

module.exports = {
  sendResponse,
  sendErrorResponse,
};
