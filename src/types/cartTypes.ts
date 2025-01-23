// types.ts (create this file for clarity)  
export interface CartItem {  
    id: string; // or number, depending on your implementation  
    image: string;  
    title: string;  
    size: string;  // Assuming size is a string  
    price: number;  
    quantity: number;  
}  

export type CartState = CartItem[];  

export interface CartContextType {  
    state: CartState;  
    dispatch: (action: CartAction) => void; // Update this type depending on your actions  
}  

// Define your action types  
export type CartAction =  
    | { type: 'ADD_TO_CART'; payload: CartItem }  
    | { type: 'REMOVE_FROM_CART'; payload: string }  // Assuming payload is id in this case  
    | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } };