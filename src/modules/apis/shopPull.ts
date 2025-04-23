export interface shopPayloadInterface {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
}

export const shopPull = async (): Promise<shopPayloadInterface[]> => {
  const apiData = await (await fetch('https://fakestoreapi.com/products')).json()

  return apiData
}
