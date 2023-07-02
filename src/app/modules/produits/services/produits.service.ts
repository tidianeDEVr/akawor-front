import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CATEGORY, IMAGE, PRODUCT, WISHLIST } from 'src/app/data/interfaces';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProduitsService {
  constructor(private httpClient: HttpClient) {}

  getProducts(): Promise<PRODUCT[]> {
    return new Promise<PRODUCT[]>((resolve) => {
      this.httpClient
        .get(`${environment.BACKEND_API_URL}/product/find-all`)
        .subscribe({
          next: (produits: any) => {
            resolve(produits);
          },
          error: (err) => {
            resolve(err);
          },
        });
    });
  }
  getProductBySlug(slug: string): Promise<PRODUCT[]> {
    return new Promise<PRODUCT[]>((resolve) => {
      this.httpClient
        .get(`${environment.BACKEND_API_URL}/product/find-by-slug/${slug}`)
        .subscribe({
          next: (produit: any) => {
            resolve(produit);
          },
          error: (err) => {
            resolve(err);
          },
        });
    });
  }
  getProductsByShop(id: string): Promise<PRODUCT[]> {
    return new Promise<PRODUCT[]>((resolve) => {
      this.httpClient
        .get(`${environment.BACKEND_API_URL}/product/find-by-shop/${id}`)
        .subscribe({
          next: (produits: any) => {
            resolve(produits);
          },
          error: (err) => {
            resolve(err);
          },
        });
    });
  }
  getProductsByCategoriesSlug(slug: string): Promise<PRODUCT[]> {
    let products: PRODUCT[] = [];
    return new Promise<PRODUCT[]>((resolve) => {
      this.httpClient
        .get(`${environment.BACKEND_API_URL}/product/find-by-category/${slug}`)
        .subscribe({
          next: (res: any) => {
            products = res;
            console.log(res);
            resolve(products);
          },
          error: (err) => {
            resolve(err);
          },
        });
    });
  }
  getCategoriesProducts(): Promise<CATEGORY[]> {
    let categories: CATEGORY[] = [];
    return new Promise<CATEGORY[]>((resolve) => {
      this.httpClient
        .get(`${environment.BACKEND_API_URL}/category/find-all/product`)
        .subscribe({
          next: (res: any) => {
            categories = res;
            resolve(categories);
          },
          error: (err) => {
            resolve(err);
          },
        });
    });
  }
  getSubCategoriesProducts(parentId: number): Promise<CATEGORY[]> {
    let categories: CATEGORY[] = [];
    return new Promise<CATEGORY[]>((resolve) => {
      this.httpClient
        .get(`${environment.BACKEND_API_URL}/category/find-subs/${parentId}`)
        .subscribe({
          next: (res: any) => {
            categories = res;
            resolve(categories);
          },
          error: (err) => {
            resolve(categories);
          },
        });
    });
  }
  createProduct(product: PRODUCT, productOwnerId: string): Promise<PRODUCT> {
    return new Promise<PRODUCT>((resolve) => {
      this.httpClient
        .post(`${environment.BACKEND_API_URL}/product/insert`, {
          product,
          productOwnerId,
        })
        .subscribe({
          next: (res: any) => {
            resolve(res);
          },
          error: (err) => {
            resolve(err);
          },
        });
    });
  }
  getSellerProducts(sellerId: string): Promise<PRODUCT[]> {
    return new Promise<PRODUCT[]>((resolve) => {
      this.httpClient
        .get(`${environment.BACKEND_API_URL}/product/seller/${sellerId}`)
        .subscribe({
          next: (res: any) => {
            resolve(res);
          },
          error: (err) => {
            resolve(err);
          },
        });
    });
  }
  getImagesByProducts(id: string): Promise<IMAGE[]> {
    return new Promise<IMAGE[]>((resolve) => {
      this.httpClient
        .get(`${environment.BACKEND_API_URL}/image/find-by-product/${id}`)
        .subscribe({
          next: (res: any) => {
            resolve(res);
          },
          error: (err) => {
            resolve(err);
          },
        });
    });
  }
  addToCart(product: PRODUCT, quantity: number): Promise<Boolean> {
    return new Promise<Boolean>((resolve) => {
      let cart = localStorage.getItem('akawor_cart');
      let alreadyInCart: boolean = false;
      if (cart) {
        let jsonCart = JSON.parse(cart);
        jsonCart.forEach((element: any) => {
          if (element.product.id == product.id) {
            alreadyInCart = true;
            element.quantity = quantity;
            localStorage.setItem('akawor_cart', JSON.stringify(jsonCart));
            return resolve(true);
          }
        });
        if (!alreadyInCart) {
          jsonCart.push({ product, quantity });
          localStorage.setItem('akawor_cart', JSON.stringify(jsonCart));
          resolve(true);
        }
      } else {
        let cartInit: any[] = [{ product, quantity }];
        localStorage.setItem('akawor_cart', JSON.stringify(cartInit));
        resolve(true);
      }
      this.updateCartBtn();
    });
  }
  removeFromCart(product: PRODUCT){
    const cart = localStorage.getItem('akawor_cart');
    if(cart) {
      let jsonCart = JSON.parse(cart)
      jsonCart.forEach(function callback(element:any, index:any){
        if(element.product.id == product.id) jsonCart.splice(index, 1)
        localStorage.setItem('akawor_cart', JSON.stringify(jsonCart));
      });
    }
    this.updateCartBtn();
  }
  getCart(): Promise<any[]> {
    return new Promise<any[]>((resolve)=>{
      const cart = localStorage.getItem('akawor_cart');
      if (cart) resolve(JSON.parse(cart));
      if (!cart) resolve([]);
    })
  }
  updateCartBtn(){
    let cartBtn = document.querySelector('#cart-btn');
    const cart = localStorage.getItem('akawor_cart');
    let cartJson = []
    let total = 0
    if (cart) {
      cartJson = JSON.parse(cart);
      cartJson.forEach((element:any) => {
        total += element.product.productPrice*element.quantity;
      });
    }
    if (cartBtn) {
      let badge = cartBtn.querySelector('.badge-cart');
      let amount = cartBtn.querySelector('.amount-cart');
      if (badge) badge.textContent = cartJson.length
      if(amount) amount.textContent = `Panier - €${total}`
    }
  }
  getWishlist(id_client:string): Promise<WISHLIST> {
    return new Promise<WISHLIST>((resolve) => {
      this.httpClient
      .get(`${environment.BACKEND_API_URL}/product/find-wishlist/${id_client}`)
        .subscribe({
          next: (res: any) => {
            resolve(res);
          },
          error: (err) => {
            resolve(err);
          },
        });
    });
  }
  addToWishlist(product:PRODUCT, id:string): Promise<WISHLIST> {
    return new Promise<WISHLIST>((resolve)=>{
      this.httpClient.post(`${environment.BACKEND_API_URL}/product/add-to-wishlist`, {product, id})
      .subscribe({
        next: (res: any) => {
          resolve(res);
        },
        error: (err) => {
          resolve(err);
        },
      });
    })
  }
  removeFromWishlist(product:PRODUCT, id:string): Promise<WISHLIST> {
    return new Promise<WISHLIST>((resolve)=>{
      this.httpClient.post(`${environment.BACKEND_API_URL}/product/remove-from-wishlist`, {product, id})
      .subscribe({
        next: (res: any) => {
          resolve(res);
        },
        error: (err) => {
          resolve(err);
        },
      });
    })
  }
}
