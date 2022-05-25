(function seed() {

  const isCartEmpty = !localStorage.getItem('cart') || JSON.parse(localStorage.getItem('cart')).length === 0;
  const shouldExecuteSeed = isCartEmpty || /true/.test(localStorage.getItem('EXECUTE_SEED', true));

  if(shouldExecuteSeed) {
    localStorage.setItem('cart', '[]');
    
    localStorage.setItem(
      'feature-flags',
      '{"isSearch1": true, "isSearch2": true, "isSide1": true, "isSide2": true}'
    );
    localStorage.setItem(
      'products_ember',
      '[{"name":"Product1"},{"name":"Product2"},{"name":"Product3"}]'
    );
    localStorage.setItem('products_react', '[{"name":"Product1"},{"name":"Product2"},{"name":"Product3"}]');
    localStorage.setItem('items', '["Item 1","Item 2","Item 3","Item 4"]');
    // add seeds here

    console.log('seed executed');
  }
})();