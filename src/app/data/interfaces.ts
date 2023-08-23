export interface ToastInfo {
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
  userState?: boolean;
  createdAt?: any;
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
  createdAt?: any;
  updatedAt?: any;
  parentId?: string;
}

export interface SHOP {
  id?: string;
  UserId?: string;
  shopLibelle?: string;
  shopSlug?: string;
  shopDescription?: string;
  shopLatitude?: string;
  shopLongitude?: string;
  shopWorkingHours?: string;
  shopAddedAt?: string;
  shopAddress?: string;
  shopState?: string;
  shopLogoImage?: IMAGE;
  shopCoverImage?: IMAGE;
  shopIsDeleted?: boolean;
  shopOwner?: USER;
  Category?: CATEGORY;
  shopSubscriptions?: SUBSCRIPTION[];
  shopProducts?: PRODUCT[];
  Social?: SOCIAL;
  User?: USER;
  createdAt?: any;
  updatedAt?: any;
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
  createdAt?: any;
  orderAddedAt?: string;
  orderStatus?: string;
  orderReference?: string;
  orderOwner?: USER;
  OrderLine?: ORDER_LINE;
  orderIsPayed?: boolean;
  orderDescription?: string;
  orderClientPhoneNumber?: string;
  orderClientEmail?: string;
  orderClientFirstName?: string;
  orderClientLastName?: string;
  orderClientCity?: string;
  orderClientCountry?: string;
  orderClientAddress?: string;
}

export interface ORDER_LINE {
  id?: string;
  orderLineProducts?: any;
  orderLineJsonCart?: any;
  orderLineTotalPrice?: string;
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
  productPrice: number;
  productPricePromo?: number;
  productWeight ?: number;
  productStock ?: number;
  productDescription: string;
  productState?: string;
  productIsOutOfStock: boolean;
  productIsDeleted?: boolean;
  productShop?: SHOP;
  productCategory?: CATEGORY;
  productImages?: IMAGE[];
  productBoosts?: BOOST[];
  ShopId?: string;
  productFeatures?: string;
  createdAt?: any;
  Category?: CATEGORY;
  CategoryId?: string;
  Shop?: SHOP;
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

export interface NOTIFICATON_SETTING {
  id?: string;
  offersPromitionsMail?: boolean;
  ordesMail?: boolean;
  shopAlertsMail?: boolean;
  shopDraftsMail?: boolean;
  createdAt?: any;
}

export interface REVIEW {
  id?: string;
  reviewAmount?: number;
  reviewDescription?: string;
  Product?: PRODUCT;
  User?: USER;
  createdAt?: any;
}

export interface BANNER {
  id?: string;
  bannerType?: string;
  bannerStatut?: string;
  bannerTitle?: string;
  bannerSubTitle?: string;
  bannerFilename?: string;
  bannerStartAt?: any;
  bannerFinishAt?: any;
  bannerRedirectTo?: string;
}

export const DATATABLE_LANGAGE_FR = {
  processing: 'Traitement en cours...',
  search: 'Rechercher&nbsp;:',
  lengthMenu: 'Afficher _MENU_ &eacute;l&eacute;ments',
  info: "Affichage de l'&eacute;lement _START_ &agrave; _END_ sur _TOTAL_ &eacute;l&eacute;ments",
  infoEmpty:
    "Affichage de l'&eacute;lement 0 &agrave; 0 sur 0 &eacute;l&eacute;ments",
  infoFiltered: '(filtr&eacute; de _MAX_ &eacute;l&eacute;ments au total)',
  infoPostFix: '',
  loadingRecords: 'Chargement en cours...',
  zeroRecords: 'Aucun &eacute;l&eacute;ment &agrave; afficher',
  emptyTable: 'Aucune donnée disponible dans le tableau',
  paginate: {
    first: 'Premier',
    previous: 'Pr&eacute;c&eacute;dent',
    next: 'Suivant',
    last: 'Dernier',
  },
  aria: {
    sortAscending: ': activer pour trier la colonne par ordre croissant',
    sortDescending: ': activer pour trier la colonne par ordre décroissant',
  },
};
