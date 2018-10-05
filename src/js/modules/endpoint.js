

export const vtexSearchPage = (query, shelfId, ps = 12) => `/buscapagina?&ft=${query}&PS=${ps}&sl=${shelfId}&cc=50&sm=0&PageNumber=1`;

export const vtexCategoryTree = (level) =>  `/api/catalog_system/pub/category/tree/${level}`;

export const vtexSeachProductByCategory = (categoryId) =>  `/api/catalog_system/pub/products/search/?fq=C:${categoryId}`;

export const vtexProductWithVariations = (productId) =>  `/api/catalog_system/pub/products/variations/${productId}`;

