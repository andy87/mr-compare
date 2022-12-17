# mrCompare
widget compare product

### Using

#### Stat
Stat - product property.  

`stat` template
```javascript
stat = {
    name    : '', //string|notNull
    hint    : '', // string|null
}
```

`stat` add
```javascript
window.AddEventListemer('load', function()
{
    // FullData(stat.id, stat.label, stat.hint)
    MrCompare.add.stat(13,'stat label','Small descriprion/hint');
    
    // Compact(stat.id, stat.label, stat.hint)
    MrCompare.add.stat(42,'stat label');
});
```

#### Product
Product - compare item.  

`product` template
```javascript
product = {
    name    : '', //string|notNull
    url     : '', // string|null
    stats   : {}, // object|null
}
```

`product` add
```javascript
window.AddEventListemer('load', function()
{
    // FullData(product.id, product.name, product.params)
    MrCompare.add.product(64,'ProductName',{
        url     : '/url/to/product/page',
        stats   : {
            42      : {
                name    : 'stat Laabel',
                hint    : 'stat Hint',
                value   : 'stat Value',
            }
        }
    });
    
    // Compact(product.id, product.name, product.params)
    MrCompare.add.product(69,'ProductName',{
        stats   : {
            13      : 'stat Value',
            42      : 'stat Value',
        }
    });
});
```

#### Example for Production


`product` add
```javascript
window.AddEventListemer('load', function()
{
    /**
     * @example return array item: [
     *  {
     *      url     : '/url/to/product/page',
     *      stats   : {
     *          42      : {
     *              name    : 'stat Laabel',
     *              hint    : 'stat Hint',
     *              value   : 'stat Value',
     *          }
     *      }
     *  }
     * ]
     * 
     * @return arraay
     */
    function getProducts(){}
    
    // FullData(product.id, product.name, product.params)
    MrCompare.add.productList( getProducts() );
    MrCompare.run('#mrCompare'); // in progress
});
```