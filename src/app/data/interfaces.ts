export interface ToastInfo {
    header: string;
    body: string;
    delay?: number;
    isSuccess?: boolean,
}

export interface USER {
    id?: string;
    userFirstName?: string;
    userLastName?: string;
    userBirthday?: string;
    joined_at?: string;
    userEmail?: string;
    userPassword?: string;
    userPhonenumber?: string;
    userIsdeleted?: boolean;
    userRole?: ROLE;
    shop?: SHOP;
    orders?: ORDER[];
}

export interface ROLE {
    id?: string;
    libelle?: string;
    users?: USER[];
    products?: PRODUCT[];
}

export interface PACK {
    id?: string;
    libelle?: string;
    price?: string;
    added_at?: string;
    is_available?: boolean;
    description?: string;
    is_deleted?: boolean;
    subscriptions?: SUBSCRIPTION[];
}

export interface SUBSCRIPTION {
    id?: string;
    added_at?: string;
    finish_at?: string;
    pack: PACK;
    transactions?: TRANSACTION;
}

export interface CATEGORY {
    id?: string;
    categoryLibelle?: string;
    categoryType?: string;
    categoryParent?: CATEGORY;
    categoryIconClass?: string;
}

export interface SHOP {
    id?: string;
    title?: string;
    added_at?: string;
    profile_image?: IMAGE;
    cover_image?: IMAGE;
    address?: string;
    is_deleted?: boolean;
    owner: USER;
    subscriptions?: SUBSCRIPTION[];
    products?: PRODUCT[];
    category?: CATEGORY;
}

export interface ORDER {
    id?: string;
    added_at?: string;
    status?: string;
    owner?: USER;
    line?: ORDER_LINE;
}

export interface ORDER_LINE {
    id?: string;
    products?: PRODUCT[];
    price?: string;
}

export interface TRANSACTION {
    id?: string;
    added_at?: string;
    status?: string;
    subscriptions?: SUBSCRIPTION[];
    order?: ORDER;
}

export interface PRODUCT {
    id?: string;
    title?: string;
    price?: string;
    added_at?: string;
    description?: string;
    is_out_of_stock?: boolean;
    is_deleted?: boolean;
    shop?: SHOP;
    category?: CATEGORY;
    images?: IMAGE[];
    boosts?: BOOST[];
}

export interface DELIVERY {
    id?: string;
    added_at?: string;
    status?: string;
}

export interface BOOST {
    id?: string;
    added_at?: string;
    status?: string;
    finish_at?: string;
    is_deleted?: boolean;
    product?: PRODUCT;
}

export interface IMAGE {
    id?: string;
    title?: string;
    path?: string;
    is_deleted?: boolean;
}