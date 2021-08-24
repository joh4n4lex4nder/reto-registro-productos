

document.addEventListener('DOMContentLoaded', () => {
    getProduct()
})

const getProduct = async (url) => {
    let showProduct = document.querySelector(".XXX")
    showProduct.innerHTML = '';
    const res = await fetch(url);
    const data = await res.json();
    data.forEach(product => {
        const {nombre, precio, marca, descripcion, categoria, imagen} = product;
        showProduct.innerHTML += `
            <div class="col mascotas">
                <a href="#" class="enlace-detalle-mascota">
                    <div class="card bg-dark text-white gradiente">                
                        <img src="${imagen}" class="card-img" alt="...">
                        <div class="card-img-overlay">
                            <h5 class="card-title body2Bold">${nombre}</h5>
                            <p class="card-text body2Regular">${raza}</p>
                        </div>
                    </div>
                </a>
            </div>
        `
    });
}