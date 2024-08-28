async function getData() {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = res.json();
    return data;
}
export default async function page() {
    const products = await getData();
  return (
    <div className="p-4">Danh sách sản phẩm
        {products.map((item:any)=>{
            return <ul>
            <li>{item.title}</li>
            <li>Giá:{item.price}</li>
            <li>...................</li>
            </ul>
        })}
    </div>
  )
}
