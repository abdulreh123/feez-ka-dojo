import './product.css'

export default function Product({productdata}) {
    return (
        <main>
            <section id="graphic">
                <img src={productdata?.imageurl} alt="Devtools Tech Banner" />
            </section>
            <section id="content">
                <h1>{productdata?.name}</h1>
                <p>
                {productdata?.info}
                </p>
                {/* <a href="https://youtube.com/c/devtoolstech" target="_blank">Ace Your Interview &rarr;</a> */}
            </section>
        </main>
    );
}