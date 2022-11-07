import { PersistentUnorderedMap, u128, context } from "near-sdk-core";

@nearBindgen
export class Product {
  id: string;
  name: string;
  description: string;
  image: string;
  location: string;
  price: u128;
  owner: string;
  sold: u32;
  public static fromPayload(payload: Product): Product {
    const product = new Product();
    product.id = payload.id;
    product.name = payload.name;
    product.description = payload.description;
    product.image = payload.image;
    product.location = payload.location;
    product.price = payload.price;
    product.owner = context.sender;
    return product;
  }
  public incrementSoldAmount(): void {
    this.sold = this.sold + 1;
  }
}
// L_PDTS => LISTED_PRODUCTS
export const listedProducts = new PersistentUnorderedMap<string, Product>(
  "L_PDTS"
);
