"use strict";

/**
 * @author Kidin and_y87 Andrey
 */

let mrCompare = {};

(function()
{
    console.log('file: dev.js');

    const
        STAT = 'stat',
        PRODUCT = 'product',

        NAME = 'name',
        HINT = 'hint',

        EVENT_BEFORE_ADD = 'beforeAdd',
        EVENT_AFTER_ADD = 'afterAdd';

    let _ = mrCompare = {
        STAT : STAT,
        PRODUCT : PRODUCT,

        NAME : NAME,
        HINT : HINT,

        selector : {
            wrapper : null,
            wrapperID : 'compareWrapper',
            wrapperStat : 'mr_compare_table_stats',
            wrapperProduct : 'mr_compare_table_product',
        },

        data: {},

        template : {},

        add : {},

        events : {},

        /**
         * display HTML on selector Element
         * @param selector
         */
        init : function (selector){

            _.selector.wrapper = selector;

            const commonWrapper = document.createElement("div");
            commonWrapper.id  = this.selector.wrapperID;

            this.render();
        },


        render : function ()
        {

            let commonWrapper = document.querySelector('#' + this.selector.wrapperID);
            commonWrapper.innerHTML = '';

            /**
             * create table wrapper
             *
             * @param id
             */
            function addWrapper(id){

                const newWrapper = document.createElement('div');
                newWrapper.id = id;

                return newWrapper;
            }

            let wrapperStat = addWrapper(_.selector.wrapperStat);
            let wrapperProduct = addWrapper(_.selector.wrapperProduct);

            // ...

            let tableParams = document.createElement('table');

            function createTDinTR(text)
            {
                let TR = document.createElement('TR');
                let TD = document.createElement("TD");
                TD.innerText = text;
                TR.append(TD);

                return TR;
            }

            tableParams.append( createTDinTR('name') );
            tableParams.append( createTDinTR('img') );

            for( let id in _.data.stat )
            {
                tableParams.append( createTDinTR(_.data.stat[id].name) );
            }

            let tableStat = tableParams.cloneNode(true);
            let tableProduct = tableParams.cloneNode(true);

            wrapperStat.append(tableStat);
            wrapperProduct.append(tableProduct);

            let td = document.createElement('TD');
            td.innerText = 'innerText';

            //tableProduct.;

            commonWrapper.append(wrapperStat);
            commonWrapper.append(wrapperProduct);

            document.querySelector(_.selector.wrapper).append(commonWrapper);
        }
    };

    _.data[STAT] = {};
    _.data[PRODUCT] = {};


    // Templates
    let modelPrototype = function()
    {
        let self = this;
        this.name;
        this.TYPE = '';

        this.trigger = function(event){
            return _.events[this.TYPE][event](this);
        }

        this.getProperty = function (arr) {
            let property = {};

            for (let key in arr)
            {
                key = arr[key];
                property[key] = self[key] ?? null
            }

            return property;
        }
    }

    _.template[STAT] = function()
    {
        modelPrototype.call(this);
        this.TYPE = STAT;

        this.id;
        this.hint = null;

        return this;
    };

    _.template[PRODUCT] = function()
    {
        modelPrototype.call(this);
        this.TYPE = PRODUCT;

        this.url = null;
        this.stats = null;

        return this;
    };


    // Events
    _.events[STAT] = {};
    _.events[STAT][EVENT_BEFORE_ADD] = function (data){
        return data;
    };
    _.events[STAT][EVENT_AFTER_ADD] = function (data){
        return data;
    };

    _.events[PRODUCT] = {};
    _.events[PRODUCT][EVENT_BEFORE_ADD] = function (data){
        return data;
    };
    _.events[PRODUCT][EVENT_AFTER_ADD] = function (data){
        return data;
    };


    // Actions
    function _upgrade(obj, params)
    {
        for (let key in params) {
            obj[key] = params[key];
        }

        return obj;
    }


    _.add[STAT] = function (id, name, hint)
    {
        _.data[STAT][id] = _upgrade( new _.template[STAT](), {
            id : id,
            name : name,
            hint : hint ?? null,
        }).trigger(EVENT_BEFORE_ADD);

        return _.data[STAT][id].trigger(EVENT_AFTER_ADD);
    }

    _.add[PRODUCT] = function (id, name, url, stats)
    {
        stats = stats ?? {};

        _.data[PRODUCT][id] = _upgrade( new _.template[PRODUCT](), {
            name : name,
            url : url,
            stats : stats
        }).trigger(EVENT_BEFORE_ADD);

        for( let stat_id in stats ) {
            _.add[STAT]( stat_id, stats[stat_id][NAME], stats[stat_id][HINT] ?? null );
        }

        return _.data[PRODUCT][id].trigger(EVENT_AFTER_ADD);
    }

    _.add.productList = function ( array )
    {
        for( let index in array ){
            _.add[PRODUCT]( array[index] );
        }
    }

})();