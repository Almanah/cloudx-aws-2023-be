import { APIGatewayProxyResultV2 } from 'aws-lambda';

export enum StatusCodes {
  COMPLETED = 200,
  CRATED = 201,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  SERVER_ERROR = 500,
}

export const addCorsHeaders = (headers = {}) => {
  return {
    ...headers,
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS,GET',
  };
};

export const wrapSuccessResponse = (
  data: object,
  statusCode = StatusCodes.COMPLETED,
  headers?: object,
): APIGatewayProxyResultV2 => {
  return {
    statusCode,
    headers: addCorsHeaders(headers),
    body: JSON.stringify(data),
  };
};

export const wrapErrorResponse = (
  error: Error | string,
  statusCode = StatusCodes.BAD_REQUEST,
  headers?: object,
): APIGatewayProxyResultV2 => {
  return {
    statusCode,
    headers: addCorsHeaders(headers),
    body: JSON.stringify(
      error instanceof Error ? { message: error.message } : { message: error },
    ),
  };
};
