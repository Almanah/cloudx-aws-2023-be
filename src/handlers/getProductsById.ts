import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from 'aws-lambda';
import {
  StatusCodes,
  wrapErrorResponse,
  wrapSuccessResponse,
} from '../helpers/http';
import { ProductsService } from '../services/products.service';

export const handler = async (
  event: APIGatewayProxyEventV2,
): Promise<APIGatewayProxyResultV2> => {
  const id = event.pathParameters?.productId;

  if (!id) {
    return wrapErrorResponse('Product id is missing');
  }

  const product = await ProductsService.getProductById(id);

  if (!product) {
    return wrapErrorResponse('Product not found', StatusCodes.NOT_FOUND);
  }

  return wrapSuccessResponse(product);
};
