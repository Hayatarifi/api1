async function getProducts() {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
  
      // تحقق من هيكلة البيانات الفعلية وكيفية الوصول إلى العناصر
      const products = data.products || [];
  
      const result = products.map(product => {
        return `
          <div class="post">
            <h2>${product.title}</h2>
            <img src="${product.thumbnail}" alt="${product.title}">
          </div>
        `;
      });
  
      document.querySelector(".products").innerHTML = result.join("");
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  getProducts();
  