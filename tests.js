
window.addEventListener('load', function ()
{
    console.log('autotests `mrCompare`');



    let new_stat_1 = {
        id : 1,
        name : 'name',
        hint : 'hint',
    }

    mrCompare.add.stat(
        new_stat_1.id,
        new_stat_1.name,
        new_stat_1.hint
    );


    let mr_compare_property_stat_1 = mrCompare.data.stat[new_stat_1.id].getProperty(['id','name','hint']);


    mrCompare.add.product(3,'product_5','url/product/5',{4:{name:'stat_4','hint': 'hint 4'}})
    mrCompare.add.stat(1,'stat_1', "description")
    mrCompare.add.product(3,'product_5','url/product/5',{4:{name:'stat_4','hint': 'hint 4'}})
    mrCompare.add.stat(3,'stat_3')

    console.log('isEqualObject', mrTester.isEqualObject(new_stat_1, mr_compare_property_stat_1));
})