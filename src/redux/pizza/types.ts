export type Pizza = {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
    sizes: number[];
    types: number[];
};

export type SearchPizzaParams = {
    sortBy: string;
    order: string;
    category: string;
    search: string;
    currentPage: string;
};

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'successs',
    ERROR = 'error',
}

export interface PizzaSliceState {
    items: Pizza[];
    status: Status;
}
