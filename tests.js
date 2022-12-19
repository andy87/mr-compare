
window.addEventListener('load', function ()
{
    console.log('autotests `mrCompare`');

    let tester = {
        steps : [],
        result : function(func, result)
        {
            let step = {};

            step[func] = result;

            this.steps.push(step)

            return result;
        },
        isset : function (item)
        {
            let result = ( !isNaN(item) && item !== undefined );

            return this.result( 'isset', result);
        },
        isEqualObject : function (a, b)
        {
            let result = ( this.isset(a) && this.isset(b) );

            if ( result && this.isObject(a) && this.isObject(b))
            {
                result = (JSON.stringify(a) === JSON.stringify(b));
            }

            return this.result( 'isEqualObject', result);
        },
        isEqualArray : function (a, b)
        {
            let result = ( this.isset(a) && this.isset(b) );

            if ( result && this.isArray(a) && this.isArray(b) )
            {
                result = (JSON.stringify(a) === JSON.stringify(b));
            }

            return this.result( 'isEqualArray', result);
        },
        instanceOfObject : function (obj)
        {
            let result = obj instanceof Object;

            return this.result( 'instanceOfObject', result );
        },
        isObject : function (object)
        {
            let result = ( this.instanceOfObject(object) && !Array.isArray(object));

            return this.result( 'isObject', result );
        },
        isArray : function (array)
        {
            let result = ( this.instanceOfObject(array) && Array.isArray(array));

            return this.result( 'isArray', result );
        }
    }

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


    console.log('equal = ', tester.isEqualObject([new_stat_1], mrCompare.data.stat));
})