/*
 * File: js/app/store/Authorizations.js
 *
 * This file was generated by Sencha Designer version 2.0.0.
 * http://www.sencha.com/products/designer/
 *
 * This file requires use of the Ext JS 4.0.x library, under independent license.
 * License of Sencha Designer does not include license for Ext JS 4.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * You should implement event handling and custom methods in this
 * class.
 */

Ext.define('BlogApp.store.Authorizations', {
    extend: 'BlogApp.store.base.Authorizations',
    alias: 'widget.authorizations',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({}, cfg)]);
    },

    isAllowed: function(model, id, action) {
        /**
        * @param model the model to look up authorization
        * @param id the id of the model to look up authorization
        * @param actions 'create', 'edit' or 'delete'
        *        (when you don't have read permissions you will never see it)
        * @return boolean or -1 if not yet loaded (just a falsy value)
        */

        // transform model id to global id
        var authId = this.createAuthorizationId(model,id)
        // get the entry
        rec = this.getById(authId);

        // get the store right
        return (rec) ? rec.get(action) : -1;

    },

    createAuthorizationId: function(model, id) {
        // ext designer doesn't allow to set propterties 
        // so we have to do it here on first usage
        this.model2IdMapping = {
            'article': 1,
            'comment': 2
        };

        this.createAuthorizationId = function(model,id) {
            return id*100 + this.model2IdMapping[model];
        }

        return this.createAuthorizationId(model,id);

    }

});