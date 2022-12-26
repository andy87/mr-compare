# mrCompare
widget compare product

### Using

#### Model: Stat
Stat - single product property info.  

`stat` json template
```javascript
stat = {
    name    : '', // string|notNull - label (display in table)
    hint    : '', // string|null - description (attr title)
}
```

`stat` example add
```javascript
window.AddEventListemer('load', function()
{
    // add FullData: stat.id, stat.label, stat.hint
    MrCompare.add.stat(13,'stat label','Small descriprion/hint');
    
    // add Minimum: stat.id, stat.label
    MrCompare.add.stat(42,'stat label');
});
```

#### Model: Product
Product - single comparing item.  

`product` template
```javascript
product = {
    name    : '', // string|notNull
    url     : '', // string|null
    stats   : {}, // object|null
}
```

`product` add
```javascript
window.AddEventListemer('load', function()
{
    // add FullData: product.id, product.name, product.params
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
    
    // add minimum: product.id, product.name, product.params
    MrCompare.add.product(69,'ProductName',{
        stats   : {
            13      : 'stat Value',
            42      : 'stat Value',
        }
    });
    
    //for update display table call method
    MrCompare.render();
});
```



#### Example for Production


`product` add
```javascript
window.AddEventListemer('load', function()
{
    MrCompare.add.productList( [ /** array products model  **/] );
    MrCompare.init('#mrCompare'); // in progress
});
```