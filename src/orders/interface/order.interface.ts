export interface Order {
    productId: number;
    orderByEmail: string;
    prodName: string;
    prodQuantity: number;
    isDelivered: boolean;
    isCancelled: boolean; 
}