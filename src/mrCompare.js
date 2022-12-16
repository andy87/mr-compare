"use strict";

/**
 * @author Kidin and_y87 Andrey
 */

let mrCompare = {};

(function()
{
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

        data: {},

        template : {},

        add : {},

        events : {}
    };

    _.data[STAT] = {};
    _.data[PRODUCT] = {};


    // Templates

    let triggerPrototype = function()
    {
        let self = this;

        let TYPE = '';

        this.trigger = function(event){
            return _.events[TYPE][event](self);
        }
    }

    _.template[STAT] = function()
    {
        this.prototype = triggerPrototype.prototype;
        let TYPE = STAT;

        this.name = '';
        this.hint = null;

        return this;
    };

    _.template[PRODUCT] = function()
    {
        this.prototype = triggerPrototype.prototype;
        let TYPE = PRODUCT;
        
        this.name = '';
        this.url = '';
        this.stats = null;

        return this;
    };


    // CallBack's

    _.events[STAT][EVENT_BEFORE_ADD] = function (id, data){
        return data;
    };
    _.events[STAT][EVENT_AFTER_ADD] = function (data){
        return data;
    };

    _.events[PRODUCT][EVENT_BEFORE_ADD] = function (id, data){
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
        let stat = _upgrade( new _.template[STAT](), {
            name : name,
            hint : hint ?? null,
        });

        _.data[STAT][id] = stat.trigger(EVENT_BEFORE_ADD);

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

})();