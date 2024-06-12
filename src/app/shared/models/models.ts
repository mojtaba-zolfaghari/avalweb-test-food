export interface Product {
    id: number;
    thumbnail: string;
    title: string;
    price: number;
    stock: number;
    // ---------------client-side-props---------------
    quantity?: number;
    added?: boolean;
}