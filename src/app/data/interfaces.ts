export interface ToastInfo {
  header: string;
  body: string;
  delay?: number;
  isSuccess?: boolean;
}

export interface USER {
  id?: string;
  userFirstName?: string;
  userLastName?: string;
  userBirthday?: string;
  userJoinedAt?: string;
  userEmail?: string;
  userPassword?: string;
  userPhonenumber?: string;
  userIsdeleted?: boolean;
  userRole?: string;
  userShop?: SHOP;
  userOrders?: ORDER[];
}

export interface PACK {
  id?: string;
  packLibelle?: string;
  packPrice?: string;
  packAddedAt?: string;
  packIsAvailable?: boolean;
  packDescription?: string;
  packIsDeleted?: boolean;
  packSubscriptions?: SUBSCRIPTION[];
}

export interface SUBSCRIPTION {
  id?: string;
  subscriptionAddedAt?: string;
  subscriptionFinishAt?: string;
  subscriptionPack: PACK;
  subscriptionTransactions?: TRANSACTION;
}

export interface CATEGORY {
  id?: string;
  categoryLibelle?: string;
  categorySlug?: string;
  categoryType?: string;
  categoryParent?: CATEGORY;
  categoryIconClass?: string;
}

export interface SHOP {
  id?: string;
  shopLibelle?: string;
  shopSlug?: string;
  shopDescription?: string;
  shopLatitude?: string;
  shopLongitude?: string;
  shopWorkingHours?: string;
  shopAddedAt?: string;
  shopAddress?: string;
  shopLogoImage?: IMAGE;
  shopCoverImage?: IMAGE;
  shopIsDeleted?: boolean;
  shopOwner?: USER;
  Category?: CATEGORY;
  shopSubscriptions?: SUBSCRIPTION[];
  shopProducts?: PRODUCT[];
  Social?: SOCIAL;
}
export interface SOCIAL {
  id?: string;
  facebookLink?: string;
  instagramLink?: string;
  websiteLink?: string;
  tiktokLink?: string;
  shopPhoneNumber?: string;
  shopEmailAddress?: string;
}
export interface ORDER {
  id?: string;
  orderAddedAt?: string;
  orderStatus?: string;
  orderOwner?: USER;
  orderLine?: ORDER_LINE;
}

export interface ORDER_LINE {
  id?: string;
  orderLineProducts?: PRODUCT[];
  orderLinePrice?: string;
}

export interface TRANSACTION {
  id?: string;
  transactionAddedAt?: string;
  transactionStatus?: string;
  transactionSubscriptions?: SUBSCRIPTION[];
  transactionOrder?: ORDER;
}

export interface PRODUCT {
  id?: string;
  productTitle: string;
  productSlug?: string;
  productMainImage?: string;
  productAddedAt?: string;
  productPrice: number;
  productDescription: string;
  productState?: string;
  productIsOutOfStock: boolean;
  productIsDeleted?: boolean;
  productShop?: SHOP;
  productCategory?: CATEGORY;
  productImages?: IMAGE[];
  productBoosts?: BOOST[];
  shopId?: string;
  productFeatures?: string;
}

export interface WISHLIST {
  id?: string;
  Products?: PRODUCT[];
}

export interface DELIVERY {
  id?: string;
  deliveryAddedAt?: string;
  deliveryStatus?: string;
}

export interface BOOST {
  id?: string;
  boostAddedAt?: string;
  boostStatus?: string;
  boostFinishAt?: string;
  boostIsDeleted?: boolean;
  boostProduct?: PRODUCT;
}

export interface IMAGE {
  id?: string;
  imageTitle?: string;
}
