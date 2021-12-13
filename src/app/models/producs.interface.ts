export interface IOrder {
  OrderId: number
  OrderDate: string
  UserId: string
  Products: IProduct[]
  PaymentType: string
}

export interface IProduct {
  ProductId: number
  Quantity: number
}
