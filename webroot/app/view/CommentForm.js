/*
 * File: app/view/CommentForm.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('BlogApp.view.CommentForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.commentform',

    cls: '',
    bodyPadding: 10,
    frameHeader: false,

    initComponent: function() {
        var me = this;

        me.initialConfig = Ext.apply({
            api: { submit: 'Bancha.RemoteStubs.Comment.submit' }
        }, me.initialConfig);

        Ext.applyIf(me, {
            bodyCls: [
                'comments-form',
                'x-panel-body-default'
            ],
            api: { submit: 'Bancha.RemoteStubs.Comment.submit' },
            items: [
                {
                    xtype: 'fieldset',
                    title: 'Add a comment',
                    items: [
                        {
                            xtype: 'hiddenfield',
                            anchor: '100%',
                            fieldLabel: '',
                            name: 'article_id'
                        },
                        {
                            xtype: 'textareafield',
                            anchor: '100%',
                            fieldLabel: '',
                            name: 'comment',
                            growAppend: '-'
                        },
                        {
                            xtype: 'toolbar',
                            style: {
                                'margin-bottom': '10px'
                            },
                            items: [
                                {
                                    xtype: 'tbspacer',
                                    flex: 1
                                },
                                {
                                    xtype: 'button',
                                    action: 'submitComment',
                                    cls: 'comment-submit',
                                    text: 'submit'
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});