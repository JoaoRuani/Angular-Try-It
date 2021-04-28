import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class CartService {
  items = [];
  constructor(private httpClient: HttpClient) {}
  addToCart(product) {
    this.items.push(product);
  }
  getItems() {
    return this.items;
  }
  clearCart() {
    this.items.length = 0;
    return this.items;
  }
  getShippingPrices() {
    return this.httpClient.get<{ type: string; price: number }[]>(
      "/assets/shipping.json"
    );
  }
}
