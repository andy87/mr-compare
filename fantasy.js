"use strict";

window.mrCompare = {};

window.addEventListener(.'ready', function(){

let _ = window.mrCompare;

_ = {
  options : {
    viewStyle : ONLY_DIFF,
    sort : ['id', 'ASC'],
    limit : 10,
    display:{
  property: [], // hasProperty( какие свойства выводить)
},
  rules:{
      data :{
          
      }
  },
  validator:{},
  template : {
    param : {
        name : null,
        hint : null,
        type : null
    },
    product : {
        name : ,
        url : null,
        img : null,
        property : {}
    },
  },
  add : { 
    productList : function(products) 
    {
      for( let key in products )
      {
        _.add.product(
            products[key];
        )
      }
    }
    product : function( id, name, params )
    {
       let product = _.add._update(
           'product', name, params
       );
       
       if (product.property.length)
       {
           for( let i in product.property)
           {
             let property = product.property[i];
             _.add.property(
               _.add.property(
                 property[i].id,
                 property[i].name,
                 producty[i].type,
                 property
               )
             );
           }
       }
       
       _.products[id] = product;
    },
    property : function( id, name, params ) { // void
      if(!_.hasProperty[property.id] ) {
        _.property[ property.id ] =
          _.create(
              id, name, params
          );
      }
    }
  },
  hasProperty : function(id) { // bool
    return (
      _.property[id] !== undefined
    );
  }
}

});
