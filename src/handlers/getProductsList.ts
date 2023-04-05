import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from 'aws-lambda';
import { wrapSuccessResponse } from '../helpers/http';
import { ProductsService } from '../services/products.service';

export const handler = async (
  event: APIGatewayProxyEventV2,
): Promise<APIGatewayProxyResultV2> => {
  const products = await ProductsService.getProductsList();

  return wrapSuccessResponse(products);
};
