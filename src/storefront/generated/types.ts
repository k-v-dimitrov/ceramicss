export default {
    "scalars": [
        8,
        19,
        20,
        24,
        31,
        50,
        91,
        109,
        110,
        117,
        119,
        122,
        124,
        141,
        149,
        150,
        153,
        154,
        157,
        160,
        161,
        167,
        169,
        177,
        180,
        183,
        186,
        187,
        189,
        195,
        204,
        206,
        209,
        212,
        215,
        223,
        237,
        240,
        241,
        245,
        250,
        253,
        258,
        262,
        263,
        266,
        267,
        271,
        283,
        305,
        309,
        316,
        317,
        318,
        320,
        321,
        322,
        323,
        331
    ],
    "types": {
        "ApiVersion": {
            "displayName": [
                305
            ],
            "handle": [
                305
            ],
            "supported": [
                20
            ],
            "__typename": [
                305
            ]
        },
        "ApplePayWalletContentInput": {
            "billingAddress": [
                199
            ],
            "data": [
                305
            ],
            "header": [
                2
            ],
            "lastDigits": [
                305
            ],
            "signature": [
                305
            ],
            "version": [
                305
            ],
            "__typename": [
                305
            ]
        },
        "ApplePayWalletHeaderInput": {
            "applicationData": [
                305
            ],
            "ephemeralPublicKey": [
                305
            ],
            "publicKeyHash": [
                305
            ],
            "transactionId": [
                305
            ],
            "__typename": [
                305
            ]
        },
        "AppliedGiftCard": {
            "amountUsed": [
                232
            ],
            "amountUsedV2": [
                232
            ],
            "balance": [
                232
            ],
            "balanceV2": [
                232
            ],
            "id": [
                180
            ],
            "lastCharacters": [
                305
            ],
            "presentmentAmountUsed": [
                232
            ],
            "__typename": [
                305
            ]
        },
        "Article": {
            "author": [
                5
            ],
            "authorV2": [
                5
            ],
            "blog": [
                16
            ],
            "comments": [
                113,
                {
                    "first": [
                        186
                    ],
                    "after": [
                        305
                    ],
                    "last": [
                        186
                    ],
                    "before": [
                        305
                    ],
                    "reverse": [
                        20
                    ]
                }
            ],
            "content": [
                305,
                {
                    "truncateAt": [
                        186
                    ]
                }
            ],
            "contentHtml": [
                177
            ],
            "excerpt": [
                305,
                {
                    "truncateAt": [
                        186
                    ]
                }
            ],
            "excerptHtml": [
                177
            ],
            "handle": [
                305
            ],
            "id": [
                180
            ],
            "image": [
                181
            ],
            "metafield": [
                214,
                {
                    "namespace": [
                        305,
                        "String!"
                    ],
                    "key": [
                        305,
                        "String!"
                    ]
                }
            ],
            "metafields": [
                214,
                {
                    "identifiers": [
                        179,
                        "[HasMetafieldsIdentifier!]!"
                    ]
                }
            ],
            "onlineStoreUrl": [
                318
            ],
            "publishedAt": [
                149
            ],
            "seo": [
                272
            ],
            "tags": [
                305
            ],
            "title": [
                305
            ],
            "__typename": [
                305
            ]
        },
        "ArticleAuthor": {
            "bio": [
                305
            ],
            "email": [
                305
            ],
            "firstName": [
                305
            ],
            "lastName": [
                305
            ],
            "name": [
                305
            ],
            "__typename": [
                305
            ]
        },
        "ArticleConnection": {
            "edges": [
                7
            ],
            "nodes": [
                4
            ],
            "pageInfo": [
                249
            ],
            "__typename": [
                305
            ]
        },
        "ArticleEdge": {
            "cursor": [
                305
            ],
            "node": [
                4
            ],
            "__typename": [
                305
            ]
        },
        "ArticleSortKeys": {},
        "Attribute": {
            "key": [
                305
            ],
            "value": [
                305
            ],
            "__typename": [
                305
            ]
        },
        "AttributeInput": {
            "key": [
                305
            ],
            "value": [
                305
            ],
            "__typename": [
                305
            ]
        },
        "AutomaticDiscountApplication": {
            "allocationMethod": [
                157
            ],
            "targetSelection": [
                160
            ],
            "targetType": [
                161
            ],
            "title": [
                305
            ],
            "value": [
                256
            ],
            "__typename": [
                305
            ]
        },
        "AvailableShippingRates": {
            "ready": [
                20
            ],
            "shippingRates": [
                297
            ],
            "__typename": [
                305
            ]
        },
        "BaseCartLine": {
            "attribute": [
                9,
                {
                    "key": [
                        305,
                        "String!"
                    ]
                }
            ],
            "attributes": [
                9
            ],
            "cost": [
                56
            ],
            "discountAllocations": [
                47
            ],
            "estimatedCost": [
                57
            ],
            "id": [
                180
            ],
            "merchandise": [
                213
            ],
            "quantity": [
                186
            ],
            "sellingPlanAllocation": [
                277
            ],
            "on_CartLine": [
                55
            ],
            "__typename": [
                305
            ]
        },
        "BaseCartLineConnection": {
            "edges": [
                15
            ],
            "nodes": [
                13
            ],
            "pageInfo": [
                249
            ],
            "__typename": [
                305
            ]
        },
        "BaseCartLineEdge": {
            "cursor": [
                305
            ],
            "node": [
                13
            ],
            "__typename": [
                305
            ]
        },
        "Blog": {
            "articleByHandle": [
                4,
                {
                    "handle": [
                        305,
                        "String!"
                    ]
                }
            ],
            "articles": [
                6,
                {
                    "first": [
                        186
                    ],
                    "after": [
                        305
                    ],
                    "last": [
                        186
                    ],
                    "before": [
                        305
                    ],
                    "reverse": [
                        20
                    ],
                    "sortKey": [
                        8
                    ],
                    "query": [
                        305
                    ]
                }
            ],
            "authors": [
                5
            ],
            "handle": [
                305
            ],
            "id": [
                180
            ],
            "metafield": [
                214,
                {
                    "namespace": [
                        305,
                        "String!"
                    ],
                    "key": [
                        305,
                        "String!"
                    ]
                }
            ],
            "metafields": [
                214,
                {
                    "identifiers": [
                        179,
                        "[HasMetafieldsIdentifier!]!"
                    ]
                }
            ],
            "onlineStoreUrl": [
                318
            ],
            "seo": [
                272
            ],
            "title": [
                305
            ],
            "__typename": [
                305
            ]
        },
        "BlogConnection": {
            "edges": [
                18
            ],
            "nodes": [
                16
            ],
            "pageInfo": [
                249
            ],
            "__typename": [
                305
            ]
        },
        "BlogEdge": {
            "cursor": [
                305
            ],
            "node": [
                16
            ],
            "__typename": [
                305
            ]
        },
        "BlogSortKeys": {},
        "Boolean": {},
        "Brand": {
            "colors": [
                23
            ],
            "coverImage": [
                207
            ],
            "logo": [
                207
            ],
            "shortDescription": [
                305
            ],
            "slogan": [
                305
            ],
            "squareLogo": [
                207
            ],
            "__typename": [
                305
            ]
        },
        "BrandColorGroup": {
            "background": [
                110
            ],
            "foreground": [
                110
            ],
            "__typename": [
                305
            ]
        },
        "BrandColors": {
            "primary": [
                22
            ],
            "secondary": [
                22
            ],
            "__typename": [
                305
            ]
        },
        "CardBrand": {},
        "Cart": {
            "attribute": [
                9,
                {
                    "key": [
                        305,
                        "String!"
                    ]
                }
            ],
            "attributes": [
                9
            ],
            "buyerIdentity": [
                28
            ],
            "checkoutUrl": [
                318
            ],
            "cost": [
                39
            ],
            "createdAt": [
                149
            ],
            "deliveryGroups": [
                43,
                {
                    "first": [
                        186
                    ],
                    "after": [
                        305
                    ],
                    "last": [
                        186
                    ],
                    "before": [
                        305
                    ],
                    "reverse": [
                        20
                    ]
                }
            ],
            "discountAllocations": [
                47
            ],
            "discountCodes": [
                48
            ],
            "estimatedCost": [
                51
            ],
            "id": [
                180
            ],
            "lines": [
                14,
                {
                    "first": [
                        186
                    ],
                    "after": [
                        305
                    ],
                    "last": [
                        186
                    ],
                    "before": [
                        305
                    ],
                    "reverse": [
                        20
                    ]
                }
            ],
            "metafield": [
                214,
                {
                    "namespace": [
                        305,
                        "String!"
                    ],
                    "key": [
                        305,
                        "String!"
                    ]
                }
            ],
            "metafields": [
                214,
                {
                    "identifiers": [
                        179,
                        "[HasMetafieldsIdentifier!]!"
                    ]
                }
            ],
            "note": [
                305
            ],
            "totalQuantity": [
                186
            ],
            "updatedAt": [
                149
            ],
            "__typename": [
                305
            ]
        },
        "CartAttributesUpdatePayload": {
            "cart": [
                25
            ],
            "userErrors": [
                74
            ],
            "__typename": [
                305
            ]
        },
        "CartAutomaticDiscountAllocation": {
            "discountedAmount": [
                232
            ],
            "title": [
                305
            ],
            "__typename": [
                305
            ]
        },
        "CartBuyerIdentity": {
            "countryCode": [
                119
            ],
            "customer": [
                125
            ],
            "deliveryAddressPreferences": [
                151
            ],
            "email": [
                305
            ],
            "phone": [
                305
            ],
            "walletPreferences": [
                305
            ],
            "__typename": [
                305
            ]
        },
        "CartBuyerIdentityInput": {
            "email": [
                305
            ],
            "phone": [
                305
            ],
            "countryCode": [
                119
            ],
            "customerAccessToken": [
                305
            ],
            "deliveryAddressPreferences": [
                152
            ],
            "walletPreferences": [
                305
            ],
            "__typename": [
                305
            ]
        },
        "CartBuyerIdentityUpdatePayload": {
            "cart": [
                25
            ],
            "userErrors": [
                74
            ],
            "__typename": [
                305
            ]
        },
        "CartCardSource": {},
        "CartCodeDiscountAllocation": {
            "code": [
                305
            ],
            "discountedAmount": [
                232
            ],
            "__typename": [
                305
            ]
        },
        "CartCompletionAction": {
            "on_CompletePaymentChallenge": [
                115
            ],
            "__typename": [
                305
            ]
        },
        "CartCompletionActionRequired": {
            "action": [
                33
            ],
            "id": [
                305
            ],
            "__typename": [
                305
            ]
        },
        "CartCompletionAttemptResult": {
            "on_CartCompletionActionRequired": [
                34
            ],
            "on_CartCompletionFailed": [
                36
            ],
            "on_CartCompletionProcessing": [
                37
            ],
            "on_CartCompletionSuccess": [
                38
            ],
            "__typename": [
                305
            ]
        },
        "CartCompletionFailed": {
            "errors": [
                116
            ],
            "id": [
                305
            ],
            "__typename": [
                305
            ]
        },
        "CartCompletionProcessing": {
            "id": [
                305
            ],
            "pollDelay": [
                186
            ],
            "__typename": [
                305
            ]
        },
        "CartCompletionSuccess": {
            "completedAt": [
                149
            ],
            "id": [
                305
            ],
            "orderId": [
                180
            ],
            "orderUrl": [
                318
            ],
            "__typename": [
                305
            ]
        },
        "CartCost": {
            "checkoutChargeAmount": [
                232
            ],
            "subtotalAmount": [
                232
            ],
            "subtotalAmountEstimated": [
                20
            ],
            "totalAmount": [
                232
            ],
            "totalAmountEstimated": [
                20
            ],
            "totalDutyAmount": [
                232
            ],
            "totalDutyAmountEstimated": [
                20
            ],
            "totalTaxAmount": [
                232
            ],
            "totalTaxAmountEstimated": [
                20
            ],
            "__typename": [
                305
            ]
        },
        "CartCreatePayload": {
            "cart": [
                25
            ],
            "userErrors": [
                74
            ],
            "__typename": [
                305
            ]
        },
        "CartCustomDiscountAllocation": {
            "discountedAmount": [
                232
            ],
            "title": [
                305
            ],
            "__typename": [
                305
            ]
        },
        "CartDeliveryGroup": {
            "cartLines": [
                14,
                {
                    "first": [
                        186
                    ],
                    "after": [
                        305
                    ],
                    "last": [
                        186
                    ],
                    "before": [
                        305
                    ],
                    "reverse": [
                        20
                    ]
                }
            ],
            "deliveryAddress": [
                196
            ],
            "deliveryOptions": [
                45
            ],
            "id": [
                180
            ],
            "selectedDeliveryOption": [
                45
            ],
            "__typename": [
                305
            ]
        },
        "CartDeliveryGroupConnection": {
            "edges": [
                44
            ],
            "nodes": [
                42
            ],
            "pageInfo": [
                249
            ],
            "__typename": [
                305
            ]
        },
        "CartDeliveryGroupEdge": {
            "cursor": [
                305
            ],
            "node": [
                42
            ],
            "__typename": [
                305
            ]
        },
        "CartDeliveryOption": {
            "code": [
                305
            ],
            "deliveryMethodType": [
                153
            ],
            "description": [
                305
            ],
            "estimatedCost": [
                232
            ],
            "handle": [
                305
            ],
            "title": [
                305
            ],
            "__typename": [
                305
            ]
        },
        "CartDirectPaymentMethodInput": {
            "billingAddress": [
                199
            ],
            "sessionId": [
                305
            ],
            "cardSource": [
                31
            ],
            "__typename": [
                305
            ]
        },
        "CartDiscountAllocation": {
            "discountedAmount": [
                232
            ],
            "on_CartAutomaticDiscountAllocation": [
                27
            ],
            "on_CartCodeDiscountAllocation": [
                32
            ],
            "on_CartCustomDiscountAllocation": [
                41
            ],
            "__typename": [
                305
            ]
        },
        "CartDiscountCode": {
            "applicable": [
                20
            ],
            "code": [
                305
            ],
            "__typename": [
                305
            ]
        },
        "CartDiscountCodesUpdatePayload": {
            "cart": [
                25
            ],
            "userErrors": [
                74
            ],
            "__typename": [
                305
            ]
        },
        "CartErrorCode": {},
        "CartEstimatedCost": {
            "checkoutChargeAmount": [
                232
            ],
            "subtotalAmount": [
                232
            ],
            "totalAmount": [
                232
            ],
            "totalDutyAmount": [
                232
            ],
            "totalTaxAmount": [
                232
            ],
            "__typename": [
                305
            ]
        },
        "CartFreePaymentMethodInput": {
            "billingAddress": [
                199
            ],
            "__typename": [
                305
            ]
        },
        "CartInput": {
            "attributes": [
                10
            ],
            "lines": [
                58
            ],
            "discountCodes": [
                305
            ],
            "note": [
                305
            ],
            "buyerIdentity": [
                29
            ],
            "metafields": [
                54
            ],
            "__typename": [
                305
            ]
        },
        "CartInputMetafieldInput": {
            "key": [
                305
            ],
            "value": [
                305
            ],
            "type": [
                305
            ],
            "__typename": [
                305
            ]
        },
        "CartLine": {
            "attribute": [
                9,
                {
                    "key": [
                        305,
                        "String!"
                    ]
                }
            ],
            "attributes": [
                9
            ],
            "cost": [
                56
            ],
            "discountAllocations": [
                47
            ],
            "estimatedCost": [
                57
            ],
            "id": [
                180
            ],
            "merchandise": [
                213
            ],
            "quantity": [
                186
            ],
            "sellingPlanAllocation": [
                277
            ],
            "__typename": [
                305
            ]
        },
        "CartLineCost": {
            "amountPerQuantity": [
                232
            ],
            "compareAtAmountPerQuantity": [
                232
            ],
            "subtotalAmount": [
                232
            ],
            "totalAmount": [
                232
            ],
            "__typename": [
                305
            ]
        },
        "CartLineEstimatedCost": {
            "amount": [
                232
            ],
            "compareAtAmount": [
                232
            ],
            "subtotalAmount": [
                232
            ],
            "totalAmount": [
                232
            ],
            "__typename": [
                305
            ]
        },
        "CartLineInput": {
            "attributes": [
                10
            ],
            "quantity": [
                186
            ],
            "merchandiseId": [
                180
            ],
            "sellingPlanId": [
                180
            ],
            "__typename": [
                305
            ]
        },
        "CartLineUpdateInput": {
            "id": [
                180
            ],
            "quantity": [
                186
            ],
            "merchandiseId": [
                180
            ],
            "attributes": [
                10
            ],
            "sellingPlanId": [
                180
            ],
            "__typename": [
                305
            ]
        },
        "CartLinesAddPayload": {
            "cart": [
                25
            ],
            "userErrors": [
                74
            ],
            "__typename": [
                305
            ]
        },
        "CartLinesRemovePayload": {
            "cart": [
                25
            ],
            "userErrors": [
                74
            ],
            "__typename": [
                305
            ]
        },
        "CartLinesUpdatePayload": {
            "cart": [
                25
            ],
            "userErrors": [
                74
            ],
            "__typename": [
                305
            ]
        },
        "CartMetafieldDeleteInput": {
            "ownerId": [
                180
            ],
            "key": [
                305
            ],
            "__typename": [
                305
            ]
        },
        "CartMetafieldDeletePayload": {
            "deletedId": [
                180
            ],
            "userErrors": [
                216
            ],
            "__typename": [
                305
            ]
        },
        "CartMetafieldsSetInput": {
            "ownerId": [
                180
            ],
            "key": [
                305
            ],
            "value": [
                305
            ],
            "type": [
                305
            ],
            "__typename": [
                305
            ]
        },
        "CartMetafieldsSetPayload": {
            "metafields": [
                214
            ],
            "userErrors": [
                222
            ],
            "__typename": [
                305
            ]
        },
        "CartNoteUpdatePayload": {
            "cart": [
                25
            ],
            "userErrors": [
                74
            ],
            "__typename": [
                305
            ]
        },
        "CartPaymentInput": {
            "amount": [
                231
            ],
            "sourceIdentifier": [
                305
            ],
            "freePaymentMethod": [
                52
            ],
            "directPaymentMethod": [
                46
            ],
            "walletPaymentMethod": [
                75
            ],
            "__typename": [
                305
            ]
        },
        "CartPaymentUpdatePayload": {
            "cart": [
                25
            ],
            "userErrors": [
                74
            ],
            "__typename": [
                305
            ]
        },
        "CartSelectedDeliveryOptionInput": {
            "deliveryGroupId": [
                180
            ],
            "deliveryOptionHandle": [
                305
            ],
            "__typename": [
                305
            ]
        },
        "CartSelectedDeliveryOptionsUpdatePayload": {
            "cart": [
                25
            ],
            "userErrors": [
                74
            ],
            "__typename": [
                305
            ]
        },
        "CartSubmitForCompletionPayload": {
            "result": [
                73
            ],
            "userErrors": [
                74
            ],
            "__typename": [
                305
            ]
        },
        "CartSubmitForCompletionResult": {
            "on_SubmitAlreadyAccepted": [
                310
            ],
            "on_SubmitFailed": [
                311
            ],
            "on_SubmitSuccess": [
                312
            ],
            "on_SubmitThrottled": [
                313
            ],
            "__typename": [
                305
            ]
        },
        "CartUserError": {
            "code": [
                50
            ],
            "field": [
                305
            ],
            "message": [
                305
            ],
            "__typename": [
                305
            ]
        },
        "CartWalletPaymentMethodInput": {
            "applePayWalletContent": [
                1
            ],
            "shopPayWalletContent": [
                299
            ],
            "__typename": [
                305
            ]
        },
        "Checkout": {
            "appliedGiftCards": [
                3
            ],
            "availableShippingRates": [
                12
            ],
            "buyerIdentity": [
                79
            ],
            "completedAt": [
                149
            ],
            "createdAt": [
                149
            ],
            "currencyCode": [
                124
            ],
            "customAttributes": [
                9
            ],
            "discountApplications": [
                158,
                {
                    "first": [
                        186
                    ],
                    "after": [
                        305
                    ],
                    "last": [
                        186
                    ],
                    "before": [
                        305
                    ],
                    "reverse": [
                        20
                    ]
                }
            ],
            "email": [
                305
            ],
            "id": [
                180
            ],
            "lineItems": [
                95,
                {
                    "first": [
                        186
                    ],
                    "after": [
                        305
                    ],
                    "last": [
                        186
                    ],
                    "before": [
                        305
                    ],
                    "reverse": [
                        20
                    ]
                }
            ],
            "lineItemsSubtotalPrice": [
                232
            ],
            "note": [
                305
            ],
            "order": [
                236
            ],
            "orderStatusUrl": [
                318
            ],
            "paymentDue": [
                232
            ],
            "paymentDueV2": [
                232
            ],
            "ready": [
                20
            ],
            "requiresShipping": [
                20
            ],
            "shippingAddress": [
                196
            ],
            "shippingDiscountAllocations": [
                155
            ],
            "shippingLine": [
                297
            ],
            "subtotalPrice": [
                232
            ],
            "subtotalPriceV2": [
                232
            ],
            "taxExempt": [
                20
            ],
            "taxesIncluded": [
                20
            ],
            "totalDuties": [
                232
            ],
            "totalPrice": [
                232
            ],
            "totalPriceV2": [
                232
            ],
            "totalTax": [
                232
            ],
            "totalTaxV2": [
                232
            ],
            "updatedAt": [
                149
            ],
            "webUrl": [
                318
            ],
            "__typename": [
                305
            ]
        },
        "CheckoutAttributesUpdateV2Input": {
            "note": [
                305
            ],
            "customAttributes": [
                10
            ],
            "allowPartialAddresses": [
                20
            ],
            "__typename": [
                305
            ]
        },
        "CheckoutAttributesUpdateV2Payload": {
            "checkout": [
                76
            ],
            "checkoutUserErrors": [
                105
            ],
            "userErrors": [
                327
            ],
            "__typename": [
                305
            ]
        },
        "CheckoutBuyerIdentity": {
            "countryCode": [
                119
            ],
            "__typename": [
                305
            ]
        },
        "CheckoutBuyerIdentityInput": {
            "countryCode": [
                119
            ],
            "__typename": [
                305
            ]
        },
        "CheckoutCompleteFreePayload": {
            "checkout": [
                76
            ],
            "checkoutUserErrors": [
                105
            ],
            "userErrors": [
                327
            ],
            "__typename": [
                305
            ]
        },
        "CheckoutCompleteWithCreditCardV2Payload": {
            "checkout": [
                76
            ],
            "checkoutUserErrors": [
                105
            ],
            "payment": [
                251
            ],
            "userErrors": [
                327
            ],
            "__typename": [
                305
            ]
        },
        "CheckoutCompleteWithTokenizedPaymentV3Payload": {
            "checkout": [
                76
            ],
            "checkoutUserErrors": [
                105
            ],
            "payment": [
                251
            ],
            "userErrors": [
                327
            ],
            "__typename": [
                305
            ]
        },
        "CheckoutCreateInput": {
            "email": [
                305
            ],
            "lineItems": [
                97
            ],
            "shippingAddress": [
                199
            ],
            "note": [
                305
            ],
            "customAttributes": [
                10
            ],
            "allowPartialAddresses": [
                20
            ],
            "buyerIdentity": [
                80
            ],
            "__typename": [
                305
            ]
        },
        "CheckoutCreatePayload": {
            "checkout": [
                76
            ],
            "checkoutUserErrors": [
                105
            ],
            "queueToken": [
                305
            ],
            "userErrors": [
                327
            ],
            "__typename": [
                305
            ]
        },
        "CheckoutCustomerAssociateV2Payload": {
            "checkout": [
                76
            ],
            "checkoutUserErrors": [
                105
            ],
            "customer": [
                125
            ],
            "userErrors": [
                327
            ],
            "__typename": [
                305
            ]
        },
        "CheckoutCustomerDisassociateV2Payload": {
            "checkout": [
                76
            ],
            "checkoutUserErrors": [
                105
            ],
            "userErrors": [
                327
            ],
            "__typename": [
                305
            ]
        },
        "CheckoutDiscountCodeApplyV2Payload": {
            "checkout": [
                76
            ],
            "checkoutUserErrors": [
                105
            ],
            "userErrors": [
                327
            ],
            "__typename": [
                305
            ]
        },
        "CheckoutDiscountCodeRemovePayload": {
            "checkout": [
                76
            ],
            "checkoutUserErrors": [
                105
            ],
            "userErrors": [
                327
            ],
            "__typename": [
                305
            ]
        },
        "CheckoutEmailUpdateV2Payload": {
            "checkout": [
                76
            ],
            "checkoutUserErrors": [
                105
            ],
            "userErrors": [
                327
            ],
            "__typename": [
                305
            ]
        },
        "CheckoutErrorCode": {},
        "CheckoutGiftCardRemoveV2Payload": {
            "checkout": [
                76
            ],
            "checkoutUserErrors": [
                105
            ],
            "userErrors": [
                327
            ],
            "__typename": [
                305
            ]
        },
        "CheckoutGiftCardsAppendPayload": {
            "checkout": [
                76
            ],
            "checkoutUserErrors": [
                105
            ],
            "userErrors": [
                327
            ],
            "__typename": [
                305
            ]
        },
        "CheckoutLineItem": {
            "customAttributes": [
                9
            ],
            "discountAllocations": [
                155
            ],
            "id": [
                180
            ],
            "quantity": [
                186
            ],
            "title": [
                305
            ],
            "unitPrice": [
                232
            ],
            "variant": [
                268
            ],
            "__typename": [
                305
            ]
        },
        "CheckoutLineItemConnection": {
            "edges": [
                96
            ],
            "nodes": [
                94
            ],
            "pageInfo": [
                249
            ],
            "__typename": [
                305
            ]
        },
        "CheckoutLineItemEdge": {
            "cursor": [
                305
            ],
            "node": [
                94
            ],
            "__typename": [
                305
            ]
        },
        "CheckoutLineItemInput": {
            "customAttributes": [
                10
            ],
            "quantity": [
                186
            ],
            "variantId": [
                180
            ],
            "__typename": [
                305
            ]
        },
        "CheckoutLineItemUpdateInput": {
            "id": [
                180
            ],
            "variantId": [
                180
            ],
            "quantity": [
                186
            ],
            "customAttributes": [
                10
            ],
            "__typename": [
                305
            ]
        },
        "CheckoutLineItemsAddPayload": {
            "checkout": [
                76
            ],
            "checkoutUserErrors": [
                105
            ],
            "userErrors": [
                327
            ],
            "__typename": [
                305
            ]
        },
        "CheckoutLineItemsRemovePayload": {
            "checkout": [
                76
            ],
            "checkoutUserErrors": [
                105
            ],
            "userErrors": [
                327
            ],
            "__typename": [
                305
            ]
        },
        "CheckoutLineItemsReplacePayload": {
            "checkout": [
                76
            ],
            "userErrors": [
                105
            ],
            "__typename": [
                305
            ]
        },
        "CheckoutLineItemsUpdatePayload": {
            "checkout": [
                76
            ],
            "checkoutUserErrors": [
                105
            ],
            "userErrors": [
                327
            ],
            "__typename": [
                305
            ]
        },
        "CheckoutShippingAddressUpdateV2Payload": {
            "checkout": [
                76
            ],
            "checkoutUserErrors": [
                105
            ],
            "userErrors": [
                327
            ],
            "__typename": [
                305
            ]
        },
        "CheckoutShippingLineUpdatePayload": {
            "checkout": [
                76
            ],
            "checkoutUserErrors": [
                105
            ],
            "userErrors": [
                327
            ],
            "__typename": [
                305
            ]
        },
        "CheckoutUserError": {
            "code": [
                91
            ],
            "field": [
                305
            ],
            "message": [
                305
            ],
            "__typename": [
                305
            ]
        },
        "Collection": {
            "description": [
                305,
                {
                    "truncateAt": [
                        186
                    ]
                }
            ],
            "descriptionHtml": [
                177
            ],
            "handle": [
                305
            ],
            "id": [
                180
            ],
            "image": [
                181
            ],
            "metafield": [
                214,
                {
                    "namespace": [
                        305,
                        "String!"
                    ],
                    "key": [
                        305,
                        "String!"
                    ]
                }
            ],
            "metafields": [
                214,
                {
                    "identifiers": [
                        179,
                        "[HasMetafieldsIdentifier!]!"
                    ]
                }
            ],
            "onlineStoreUrl": [
                318
            ],
            "products": [
                259,
                {
                    "first": [
                        186
                    ],
                    "after": [
                        305
                    ],
                    "last": [
                        186
                    ],
                    "before": [
                        305
                    ],
                    "reverse": [
                        20
                    ],
                    "sortKey": [
                        258
                    ],
                    "filters": [
                        261,
                        "[ProductFilter!]"
                    ]
                }
            ],
            "seo": [
                272
            ],
            "title": [
                305
            ],
            "updatedAt": [
                149
            ],
            "__typename": [
                305
            ]
        },
        "CollectionConnection": {
            "edges": [
                108
            ],
            "nodes": [
                106
            ],
            "pageInfo": [
                249
            ],
            "__typename": [
                305
            ]
        },
        "CollectionEdge": {
            "cursor": [
                305
            ],
            "node": [
                106
            ],
            "__typename": [
                305
            ]
        },
        "CollectionSortKeys": {},
        "Color": {},
        "Comment": {
            "author": [
                112
            ],
            "content": [
                305,
                {
                    "truncateAt": [
                        186
                    ]
                }
            ],
            "contentHtml": [
                177
            ],
            "id": [
                180
            ],
            "__typename": [
                305
            ]
        },
        "CommentAuthor": {
            "email": [
                305
            ],
            "name": [
                305
            ],
            "__typename": [
                305
            ]
        },
        "CommentConnection": {
            "edges": [
                114
            ],
            "nodes": [
                111
            ],
            "pageInfo": [
                249
            ],
            "__typename": [
                305
            ]
        },
        "CommentEdge": {
            "cursor": [
                305
            ],
            "node": [
                111
            ],
            "__typename": [
                305
            ]
        },
        "CompletePaymentChallenge": {
            "redirectUrl": [
                318
            ],
            "__typename": [
                305
            ]
        },
        "CompletionError": {
            "code": [
                117
            ],
            "message": [
                305
            ],
            "__typename": [
                305
            ]
        },
        "CompletionErrorCode": {},
        "Country": {
            "availableLanguages": [
                188
            ],
            "currency": [
                123
            ],
            "isoCode": [
                119
            ],
            "market": [
                201
            ],
            "name": [
                305
            ],
            "unitSystem": [
                322
            ],
            "__typename": [
                305
            ]
        },
        "CountryCode": {},
        "CreditCard": {
            "brand": [
                305
            ],
            "expiryMonth": [
                186
            ],
            "expiryYear": [
                186
            ],
            "firstDigits": [
                305
            ],
            "firstName": [
                305
            ],
            "lastDigits": [
                305
            ],
            "lastName": [
                305
            ],
            "maskedNumber": [
                305
            ],
            "__typename": [
                305
            ]
        },
        "CreditCardPaymentInputV2": {
            "paymentAmount": [
                231
            ],
            "idempotencyKey": [
                305
            ],
            "billingAddress": [
                199
            ],
            "vaultId": [
                305
            ],
            "test": [
                20
            ],
            "__typename": [
                305
            ]
        },
        "CropRegion": {},
        "Currency": {
            "isoCode": [
                124
            ],
            "name": [
                305
            ],
            "symbol": [
                305
            ],
            "__typename": [
                305
            ]
        },
        "CurrencyCode": {},
        "Customer": {
            "acceptsMarketing": [
                20
            ],
            "addresses": [
                197,
                {
                    "first": [
                        186
                    ],
                    "after": [
                        305
                    ],
                    "last": [
                        186
                    ],
                    "before": [
                        305
                    ],
                    "reverse": [
                        20
                    ]
                }
            ],
            "createdAt": [
                149
            ],
            "defaultAddress": [
                196
            ],
            "displayName": [
                305
            ],
            "email": [
                305
            ],
            "firstName": [
                305
            ],
            "id": [
                180
            ],
            "lastIncompleteCheckout": [
                76
            ],
            "lastName": [
                305
            ],
            "metafield": [
                214,
                {
                    "namespace": [
                        305,
                        "String!"
                    ],
                    "key": [
                        305,
                        "String!"
                    ]
                }
            ],
            "metafields": [
                214,
                {
                    "identifiers": [
                        179,
                        "[HasMetafieldsIdentifier!]!"
                    ]
                }
            ],
            "numberOfOrders": [
                323
            ],
            "orders": [
                238,
                {
                    "first": [
                        186
                    ],
                    "after": [
                        305
                    ],
                    "last": [
                        186
                    ],
                    "before": [
                        305
                    ],
                    "reverse": [
                        20
                    ],
                    "sortKey": [
                        245
                    ],
                    "query": [
                        305
                    ]
                }
            ],
            "phone": [
                305
            ],
            "tags": [
                305
            ],
            "updatedAt": [
                149
            ],
            "__typename": [
                305
            ]
        },
        "CustomerAccessToken": {
            "accessToken": [
                305
            ],
            "expiresAt": [
                149
            ],
            "__typename": [
                305
            ]
        },
        "CustomerAccessTokenCreateInput": {
            "email": [
                305
            ],
            "password": [
                305
            ],
            "__typename": [
                305
            ]
        },
        "CustomerAccessTokenCreatePayload": {
            "customerAccessToken": [
                126
            ],
            "customerUserErrors": [
                148
            ],
            "userErrors": [
                327
            ],
            "__typename": [
                305
            ]
        },
        "CustomerAccessTokenCreateWithMultipassPayload": {
            "customerAccessToken": [
                126
            ],
            "customerUserErrors": [
                148
            ],
            "__typename": [
                305
            ]
        },
        "CustomerAccessTokenDeletePayload": {
            "deletedAccessToken": [
                305
            ],
            "deletedCustomerAccessTokenId": [
                305
            ],
            "userErrors": [
                327
            ],
            "__typename": [
                305
            ]
        },
        "CustomerAccessTokenRenewPayload": {
            "customerAccessToken": [
                126
            ],
            "userErrors": [
                327
            ],
            "__typename": [
                305
            ]
        },
        "CustomerActivateByUrlPayload": {
            "customer": [
                125
            ],
            "customerAccessToken": [
                126
            ],
            "customerUserErrors": [
                148
            ],
            "__typename": [
                305
            ]
        },
        "CustomerActivateInput": {
            "activationToken": [
                305
            ],
            "password": [
                305
            ],
            "__typename": [
                305
            ]
        },
        "CustomerActivatePayload": {
            "customer": [
                125
            ],
            "customerAccessToken": [
                126
            ],
            "customerUserErrors": [
                148
            ],
            "userErrors": [
                327
            ],
            "__typename": [
                305
            ]
        },
        "CustomerAddressCreatePayload": {
            "customerAddress": [
                196
            ],
            "customerUserErrors": [
                148
            ],
            "userErrors": [
                327
            ],
            "__typename": [
                305
            ]
        },
        "CustomerAddressDeletePayload": {
            "customerUserErrors": [
                148
            ],
            "deletedCustomerAddressId": [
                305
            ],
            "userErrors": [
                327
            ],
            "__typename": [
                305
            ]
        },
        "CustomerAddressUpdatePayload": {
            "customerAddress": [
                196
            ],
            "customerUserErrors": [
                148
            ],
            "userErrors": [
                327
            ],
            "__typename": [
                305
            ]
        },
        "CustomerCreateInput": {
            "firstName": [
                305
            ],
            "lastName": [
                305
            ],
            "email": [
                305
            ],
            "phone": [
                305
            ],
            "password": [
                305
            ],
            "acceptsMarketing": [
                20
            ],
            "__typename": [
                305
            ]
        },
        "CustomerCreatePayload": {
            "customer": [
                125
            ],
            "customerUserErrors": [
                148
            ],
            "userErrors": [
                327
            ],
            "__typename": [
                305
            ]
        },
        "CustomerDefaultAddressUpdatePayload": {
            "customer": [
                125
            ],
            "customerUserErrors": [
                148
            ],
            "userErrors": [
                327
            ],
            "__typename": [
                305
            ]
        },
        "CustomerErrorCode": {},
        "CustomerRecoverPayload": {
            "customerUserErrors": [
                148
            ],
            "userErrors": [
                327
            ],
            "__typename": [
                305
            ]
        },
        "CustomerResetByUrlPayload": {
            "customer": [
                125
            ],
            "customerAccessToken": [
                126
            ],
            "customerUserErrors": [
                148
            ],
            "userErrors": [
                327
            ],
            "__typename": [
                305
            ]
        },
        "CustomerResetInput": {
            "resetToken": [
                305
            ],
            "password": [
                305
            ],
            "__typename": [
                305
            ]
        },
        "CustomerResetPayload": {
            "customer": [
                125
            ],
            "customerAccessToken": [
                126
            ],
            "customerUserErrors": [
                148
            ],
            "userErrors": [
                327
            ],
            "__typename": [
                305
            ]
        },
        "CustomerUpdateInput": {
            "firstName": [
                305
            ],
            "lastName": [
                305
            ],
            "email": [
                305
            ],
            "phone": [
                305
            ],
            "password": [
                305
            ],
            "acceptsMarketing": [
                20
            ],
            "__typename": [
                305
            ]
        },
        "CustomerUpdatePayload": {
            "customer": [
                125
            ],
            "customerAccessToken": [
                126
            ],
            "customerUserErrors": [
                148
            ],
            "userErrors": [
                327
            ],
            "__typename": [
                305
            ]
        },
        "CustomerUserError": {
            "code": [
                141
            ],
            "field": [
                305
            ],
            "message": [
                305
            ],
            "__typename": [
                305
            ]
        },
        "DateTime": {},
        "Decimal": {},
        "DeliveryAddress": {
            "on_MailingAddress": [
                196
            ],
            "on_Node": [
                234
            ],
            "__typename": [
                305
            ]
        },
        "DeliveryAddressInput": {
            "deliveryAddress": [
                199
            ],
            "customerAddressId": [
                180
            ],
            "__typename": [
                305
            ]
        },
        "DeliveryMethodType": {},
        "DigitalWallet": {},
        "DiscountAllocation": {
            "allocatedAmount": [
                232
            ],
            "discountApplication": [
                156
            ],
            "__typename": [
                305
            ]
        },
        "DiscountApplication": {
            "allocationMethod": [
                157
            ],
            "targetSelection": [
                160
            ],
            "targetType": [
                161
            ],
            "value": [
                256
            ],
            "on_AutomaticDiscountApplication": [
                11
            ],
            "on_DiscountCodeApplication": [
                162
            ],
            "on_ManualDiscountApplication": [
                200
            ],
            "on_ScriptDiscountApplication": [
                273
            ],
            "__typename": [
                305
            ]
        },
        "DiscountApplicationAllocationMethod": {},
        "DiscountApplicationConnection": {
            "edges": [
                159
            ],
            "nodes": [
                156
            ],
            "pageInfo": [
                249
            ],
            "__typename": [
                305
            ]
        },
        "DiscountApplicationEdge": {
            "cursor": [
                305
            ],
            "node": [
                156
            ],
            "__typename": [
                305
            ]
        },
        "DiscountApplicationTargetSelection": {},
        "DiscountApplicationTargetType": {},
        "DiscountCodeApplication": {
            "allocationMethod": [
                157
            ],
            "applicable": [
                20
            ],
            "code": [
                305
            ],
            "targetSelection": [
                160
            ],
            "targetType": [
                161
            ],
            "value": [
                256
            ],
            "__typename": [
                305
            ]
        },
        "DisplayableError": {
            "field": [
                305
            ],
            "message": [
                305
            ],
            "on_CartUserError": [
                74
            ],
            "on_CheckoutUserError": [
                105
            ],
            "on_CustomerUserError": [
                148
            ],
            "on_MetafieldDeleteUserError": [
                216
            ],
            "on_MetafieldsSetUserError": [
                222
            ],
            "on_UserError": [
                327
            ],
            "__typename": [
                305
            ]
        },
        "Domain": {
            "host": [
                305
            ],
            "sslEnabled": [
                20
            ],
            "url": [
                318
            ],
            "__typename": [
                305
            ]
        },
        "ExternalVideo": {
            "alt": [
                305
            ],
            "embedUrl": [
                318
            ],
            "embeddedUrl": [
                318
            ],
            "host": [
                206
            ],
            "id": [
                180
            ],
            "mediaContentType": [
                204
            ],
            "originUrl": [
                318
            ],
            "presentation": [
                208
            ],
            "previewImage": [
                181
            ],
            "__typename": [
                305
            ]
        },
        "Filter": {
            "id": [
                305
            ],
            "label": [
                305
            ],
            "type": [
                167
            ],
            "values": [
                168
            ],
            "__typename": [
                305
            ]
        },
        "FilterType": {},
        "FilterValue": {
            "count": [
                186
            ],
            "id": [
                305
            ],
            "input": [
                187
            ],
            "label": [
                305
            ],
            "__typename": [
                305
            ]
        },
        "Float": {},
        "Fulfillment": {
            "fulfillmentLineItems": [
                172,
                {
                    "first": [
                        186
                    ],
                    "after": [
                        305
                    ],
                    "last": [
                        186
                    ],
                    "before": [
                        305
                    ],
                    "reverse": [
                        20
                    ]
                }
            ],
            "trackingCompany": [
                305
            ],
            "trackingInfo": [
                174,
                {
                    "first": [
                        186
                    ]
                }
            ],
            "__typename": [
                305
            ]
        },
        "FulfillmentLineItem": {
            "lineItem": [
                242
            ],
            "quantity": [
                186
            ],
            "__typename": [
                305
            ]
        },
        "FulfillmentLineItemConnection": {
            "edges": [
                173
            ],
            "nodes": [
                171
            ],
            "pageInfo": [
                249
            ],
            "__typename": [
                305
            ]
        },
        "FulfillmentLineItemEdge": {
            "cursor": [
                305
            ],
            "node": [
                171
            ],
            "__typename": [
                305
            ]
        },
        "FulfillmentTrackingInfo": {
            "number": [
                305
            ],
            "url": [
                318
            ],
            "__typename": [
                305
            ]
        },
        "GenericFile": {
            "alt": [
                305
            ],
            "id": [
                180
            ],
            "mimeType": [
                305
            ],
            "originalFileSize": [
                186
            ],
            "previewImage": [
                181
            ],
            "url": [
                318
            ],
            "__typename": [
                305
            ]
        },
        "GeoCoordinateInput": {
            "latitude": [
                169
            ],
            "longitude": [
                169
            ],
            "__typename": [
                305
            ]
        },
        "HTML": {},
        "HasMetafields": {
            "metafield": [
                214,
                {
                    "namespace": [
                        305,
                        "String!"
                    ],
                    "key": [
                        305,
                        "String!"
                    ]
                }
            ],
            "metafields": [
                214,
                {
                    "identifiers": [
                        179,
                        "[HasMetafieldsIdentifier!]!"
                    ]
                }
            ],
            "on_Article": [
                4
            ],
            "on_Blog": [
                16
            ],
            "on_Cart": [
                25
            ],
            "on_Collection": [
                106
            ],
            "on_Customer": [
                125
            ],
            "on_Location": [
                191
            ],
            "on_Market": [
                201
            ],
            "on_Order": [
                236
            ],
            "on_Page": [
                246
            ],
            "on_Product": [
                257
            ],
            "on_ProductVariant": [
                268
            ],
            "on_Shop": [
                298
            ],
            "__typename": [
                305
            ]
        },
        "HasMetafieldsIdentifier": {
            "namespace": [
                305
            ],
            "key": [
                305
            ],
            "__typename": [
                305
            ]
        },
        "ID": {},
        "Image": {
            "altText": [
                305
            ],
            "height": [
                186
            ],
            "id": [
                180
            ],
            "originalSrc": [
                318
            ],
            "src": [
                318
            ],
            "transformedSrc": [
                318,
                {
                    "maxWidth": [
                        186
                    ],
                    "maxHeight": [
                        186
                    ],
                    "crop": [
                        122
                    ],
                    "scale": [
                        186
                    ],
                    "preferredContentType": [
                        183
                    ]
                }
            ],
            "url": [
                318,
                {
                    "transform": [
                        185
                    ]
                }
            ],
            "width": [
                186
            ],
            "__typename": [
                305
            ]
        },
        "ImageConnection": {
            "edges": [
                184
            ],
            "nodes": [
                181
            ],
            "pageInfo": [
                249
            ],
            "__typename": [
                305
            ]
        },
        "ImageContentType": {},
        "ImageEdge": {
            "cursor": [
                305
            ],
            "node": [
                181
            ],
            "__typename": [
                305
            ]
        },
        "ImageTransformInput": {
            "crop": [
                122
            ],
            "maxWidth": [
                186
            ],
            "maxHeight": [
                186
            ],
            "scale": [
                186
            ],
            "preferredContentType": [
                183
            ],
            "__typename": [
                305
            ]
        },
        "Int": {},
        "JSON": {},
        "Language": {
            "endonymName": [
                305
            ],
            "isoCode": [
                189
            ],
            "name": [
                305
            ],
            "__typename": [
                305
            ]
        },
        "LanguageCode": {},
        "Localization": {
            "availableCountries": [
                118
            ],
            "availableLanguages": [
                188
            ],
            "country": [
                118
            ],
            "language": [
                188
            ],
            "market": [
                201
            ],
            "__typename": [
                305
            ]
        },
        "Location": {
            "address": [
                192
            ],
            "id": [
                180
            ],
            "metafield": [
                214,
                {
                    "namespace": [
                        305,
                        "String!"
                    ],
                    "key": [
                        305,
                        "String!"
                    ]
                }
            ],
            "metafields": [
                214,
                {
                    "identifiers": [
                        179,
                        "[HasMetafieldsIdentifier!]!"
                    ]
                }
            ],
            "name": [
                305
            ],
            "__typename": [
                305
            ]
        },
        "LocationAddress": {
            "address1": [
                305
            ],
            "address2": [
                305
            ],
            "city": [
                305
            ],
            "country": [
                305
            ],
            "countryCode": [
                305
            ],
            "formatted": [
                305
            ],
            "latitude": [
                169
            ],
            "longitude": [
                169
            ],
            "phone": [
                305
            ],
            "province": [
                305
            ],
            "provinceCode": [
                305
            ],
            "zip": [
                305
            ],
            "__typename": [
                305
            ]
        },
        "LocationConnection": {
            "edges": [
                194
            ],
            "nodes": [
                191
            ],
            "pageInfo": [
                249
            ],
            "__typename": [
                305
            ]
        },
        "LocationEdge": {
            "cursor": [
                305
            ],
            "node": [
                191
            ],
            "__typename": [
                305
            ]
        },
        "LocationSortKeys": {},
        "MailingAddress": {
            "address1": [
                305
            ],
            "address2": [
                305
            ],
            "city": [
                305
            ],
            "company": [
                305
            ],
            "country": [
                305
            ],
            "countryCode": [
                305
            ],
            "countryCodeV2": [
                119
            ],
            "firstName": [
                305
            ],
            "formatted": [
                305,
                {
                    "withName": [
                        20
                    ],
                    "withCompany": [
                        20
                    ]
                }
            ],
            "formattedArea": [
                305
            ],
            "id": [
                180
            ],
            "lastName": [
                305
            ],
            "latitude": [
                169
            ],
            "longitude": [
                169
            ],
            "name": [
                305
            ],
            "phone": [
                305
            ],
            "province": [
                305
            ],
            "provinceCode": [
                305
            ],
            "zip": [
                305
            ],
            "__typename": [
                305
            ]
        },
        "MailingAddressConnection": {
            "edges": [
                198
            ],
            "nodes": [
                196
            ],
            "pageInfo": [
                249
            ],
            "__typename": [
                305
            ]
        },
        "MailingAddressEdge": {
            "cursor": [
                305
            ],
            "node": [
                196
            ],
            "__typename": [
                305
            ]
        },
        "MailingAddressInput": {
            "address1": [
                305
            ],
            "address2": [
                305
            ],
            "city": [
                305
            ],
            "company": [
                305
            ],
            "country": [
                305
            ],
            "firstName": [
                305
            ],
            "lastName": [
                305
            ],
            "phone": [
                305
            ],
            "province": [
                305
            ],
            "zip": [
                305
            ],
            "__typename": [
                305
            ]
        },
        "ManualDiscountApplication": {
            "allocationMethod": [
                157
            ],
            "description": [
                305
            ],
            "targetSelection": [
                160
            ],
            "targetType": [
                161
            ],
            "title": [
                305
            ],
            "value": [
                256
            ],
            "__typename": [
                305
            ]
        },
        "Market": {
            "handle": [
                305
            ],
            "id": [
                180
            ],
            "metafield": [
                214,
                {
                    "namespace": [
                        305,
                        "String!"
                    ],
                    "key": [
                        305,
                        "String!"
                    ]
                }
            ],
            "metafields": [
                214,
                {
                    "identifiers": [
                        179,
                        "[HasMetafieldsIdentifier!]!"
                    ]
                }
            ],
            "__typename": [
                305
            ]
        },
        "Media": {
            "alt": [
                305
            ],
            "mediaContentType": [
                204
            ],
            "presentation": [
                208
            ],
            "previewImage": [
                181
            ],
            "on_ExternalVideo": [
                165
            ],
            "on_MediaImage": [
                207
            ],
            "on_Model3d": [
                229
            ],
            "on_Video": [
                329
            ],
            "__typename": [
                305
            ]
        },
        "MediaConnection": {
            "edges": [
                205
            ],
            "nodes": [
                202
            ],
            "pageInfo": [
                249
            ],
            "__typename": [
                305
            ]
        },
        "MediaContentType": {},
        "MediaEdge": {
            "cursor": [
                305
            ],
            "node": [
                202
            ],
            "__typename": [
                305
            ]
        },
        "MediaHost": {},
        "MediaImage": {
            "alt": [
                305
            ],
            "id": [
                180
            ],
            "image": [
                181
            ],
            "mediaContentType": [
                204
            ],
            "presentation": [
                208
            ],
            "previewImage": [
                181
            ],
            "__typename": [
                305
            ]
        },
        "MediaPresentation": {
            "asJson": [
                187,
                {
                    "format": [
                        209,
                        "MediaPresentationFormat!"
                    ]
                }
            ],
            "id": [
                180
            ],
            "__typename": [
                305
            ]
        },
        "MediaPresentationFormat": {},
        "Menu": {
            "handle": [
                305
            ],
            "id": [
                180
            ],
            "items": [
                211
            ],
            "itemsCount": [
                186
            ],
            "title": [
                305
            ],
            "__typename": [
                305
            ]
        },
        "MenuItem": {
            "id": [
                180
            ],
            "items": [
                211
            ],
            "resourceId": [
                180
            ],
            "tags": [
                305
            ],
            "title": [
                305
            ],
            "type": [
                212
            ],
            "url": [
                318
            ],
            "__typename": [
                305
            ]
        },
        "MenuItemType": {},
        "Merchandise": {
            "on_ProductVariant": [
                268
            ],
            "on_HasMetafields": [
                178
            ],
            "on_Node": [
                234
            ],
            "__typename": [
                305
            ]
        },
        "Metafield": {
            "createdAt": [
                149
            ],
            "description": [
                305
            ],
            "id": [
                180
            ],
            "key": [
                305
            ],
            "namespace": [
                305
            ],
            "parentResource": [
                218
            ],
            "reference": [
                219
            ],
            "references": [
                220,
                {
                    "first": [
                        186
                    ],
                    "after": [
                        305
                    ],
                    "last": [
                        186
                    ],
                    "before": [
                        305
                    ]
                }
            ],
            "type": [
                305
            ],
            "updatedAt": [
                149
            ],
            "value": [
                305
            ],
            "__typename": [
                305
            ]
        },
        "MetafieldDeleteErrorCode": {},
        "MetafieldDeleteUserError": {
            "code": [
                215
            ],
            "field": [
                305
            ],
            "message": [
                305
            ],
            "__typename": [
                305
            ]
        },
        "MetafieldFilter": {
            "namespace": [
                305
            ],
            "key": [
                305
            ],
            "value": [
                305
            ],
            "__typename": [
                305
            ]
        },
        "MetafieldParentResource": {
            "on_Article": [
                4
            ],
            "on_Blog": [
                16
            ],
            "on_Cart": [
                25
            ],
            "on_Collection": [
                106
            ],
            "on_Customer": [
                125
            ],
            "on_Location": [
                191
            ],
            "on_Market": [
                201
            ],
            "on_Order": [
                236
            ],
            "on_Page": [
                246
            ],
            "on_Product": [
                257
            ],
            "on_ProductVariant": [
                268
            ],
            "on_Shop": [
                298
            ],
            "on_HasMetafields": [
                178
            ],
            "on_Node": [
                234
            ],
            "on_OnlineStorePublishable": [
                235
            ],
            "__typename": [
                305
            ]
        },
        "MetafieldReference": {
            "on_Collection": [
                106
            ],
            "on_GenericFile": [
                175
            ],
            "on_MediaImage": [
                207
            ],
            "on_Metaobject": [
                224
            ],
            "on_Page": [
                246
            ],
            "on_Product": [
                257
            ],
            "on_ProductVariant": [
                268
            ],
            "on_Video": [
                329
            ],
            "on_HasMetafields": [
                178
            ],
            "on_Node": [
                234
            ],
            "on_OnlineStorePublishable": [
                235
            ],
            "on_Media": [
                202
            ],
            "__typename": [
                305
            ]
        },
        "MetafieldReferenceConnection": {
            "edges": [
                221
            ],
            "nodes": [
                219
            ],
            "pageInfo": [
                249
            ],
            "__typename": [
                305
            ]
        },
        "MetafieldReferenceEdge": {
            "cursor": [
                305
            ],
            "node": [
                219
            ],
            "__typename": [
                305
            ]
        },
        "MetafieldsSetUserError": {
            "code": [
                223
            ],
            "elementIndex": [
                186
            ],
            "field": [
                305
            ],
            "message": [
                305
            ],
            "__typename": [
                305
            ]
        },
        "MetafieldsSetUserErrorCode": {},
        "Metaobject": {
            "field": [
                227,
                {
                    "key": [
                        305,
                        "String!"
                    ]
                }
            ],
            "fields": [
                227
            ],
            "handle": [
                305
            ],
            "id": [
                180
            ],
            "type": [
                305
            ],
            "updatedAt": [
                149
            ],
            "__typename": [
                305
            ]
        },
        "MetaobjectConnection": {
            "edges": [
                226
            ],
            "nodes": [
                224
            ],
            "pageInfo": [
                249
            ],
            "__typename": [
                305
            ]
        },
        "MetaobjectEdge": {
            "cursor": [
                305
            ],
            "node": [
                224
            ],
            "__typename": [
                305
            ]
        },
        "MetaobjectField": {
            "key": [
                305
            ],
            "reference": [
                219
            ],
            "references": [
                220,
                {
                    "first": [
                        186
                    ],
                    "after": [
                        305
                    ],
                    "last": [
                        186
                    ],
                    "before": [
                        305
                    ]
                }
            ],
            "type": [
                305
            ],
            "value": [
                305
            ],
            "__typename": [
                305
            ]
        },
        "MetaobjectHandleInput": {
            "handle": [
                305
            ],
            "type": [
                305
            ],
            "__typename": [
                305
            ]
        },
        "Model3d": {
            "alt": [
                305
            ],
            "id": [
                180
            ],
            "mediaContentType": [
                204
            ],
            "presentation": [
                208
            ],
            "previewImage": [
                181
            ],
            "sources": [
                230
            ],
            "__typename": [
                305
            ]
        },
        "Model3dSource": {
            "filesize": [
                186
            ],
            "format": [
                305
            ],
            "mimeType": [
                305
            ],
            "url": [
                305
            ],
            "__typename": [
                305
            ]
        },
        "MoneyInput": {
            "amount": [
                150
            ],
            "currencyCode": [
                124
            ],
            "__typename": [
                305
            ]
        },
        "MoneyV2": {
            "amount": [
                150
            ],
            "currencyCode": [
                124
            ],
            "__typename": [
                305
            ]
        },
        "Mutation": {
            "cartAttributesUpdate": [
                26,
                {
                    "attributes": [
                        10,
                        "[AttributeInput!]!"
                    ],
                    "cartId": [
                        180,
                        "ID!"
                    ]
                }
            ],
            "cartBuyerIdentityUpdate": [
                30,
                {
                    "cartId": [
                        180,
                        "ID!"
                    ],
                    "buyerIdentity": [
                        29,
                        "CartBuyerIdentityInput!"
                    ]
                }
            ],
            "cartCreate": [
                40,
                {
                    "input": [
                        53
                    ]
                }
            ],
            "cartDiscountCodesUpdate": [
                49,
                {
                    "cartId": [
                        180,
                        "ID!"
                    ],
                    "discountCodes": [
                        305,
                        "[String!]"
                    ]
                }
            ],
            "cartLinesAdd": [
                60,
                {
                    "lines": [
                        58,
                        "[CartLineInput!]!"
                    ],
                    "cartId": [
                        180,
                        "ID!"
                    ]
                }
            ],
            "cartLinesRemove": [
                61,
                {
                    "cartId": [
                        180,
                        "ID!"
                    ],
                    "lineIds": [
                        180,
                        "[ID!]!"
                    ]
                }
            ],
            "cartLinesUpdate": [
                62,
                {
                    "cartId": [
                        180,
                        "ID!"
                    ],
                    "lines": [
                        59,
                        "[CartLineUpdateInput!]!"
                    ]
                }
            ],
            "cartMetafieldDelete": [
                64,
                {
                    "input": [
                        63,
                        "CartMetafieldDeleteInput!"
                    ]
                }
            ],
            "cartMetafieldsSet": [
                66,
                {
                    "metafields": [
                        65,
                        "[CartMetafieldsSetInput!]!"
                    ]
                }
            ],
            "cartNoteUpdate": [
                67,
                {
                    "cartId": [
                        180,
                        "ID!"
                    ],
                    "note": [
                        305
                    ]
                }
            ],
            "cartPaymentUpdate": [
                69,
                {
                    "cartId": [
                        180,
                        "ID!"
                    ],
                    "payment": [
                        68,
                        "CartPaymentInput!"
                    ]
                }
            ],
            "cartSelectedDeliveryOptionsUpdate": [
                71,
                {
                    "cartId": [
                        180,
                        "ID!"
                    ],
                    "selectedDeliveryOptions": [
                        70,
                        "[CartSelectedDeliveryOptionInput!]!"
                    ]
                }
            ],
            "cartSubmitForCompletion": [
                72,
                {
                    "cartId": [
                        180,
                        "ID!"
                    ],
                    "attemptToken": [
                        305,
                        "String!"
                    ]
                }
            ],
            "checkoutAttributesUpdateV2": [
                78,
                {
                    "checkoutId": [
                        180,
                        "ID!"
                    ],
                    "input": [
                        77,
                        "CheckoutAttributesUpdateV2Input!"
                    ]
                }
            ],
            "checkoutCompleteFree": [
                81,
                {
                    "checkoutId": [
                        180,
                        "ID!"
                    ]
                }
            ],
            "checkoutCompleteWithCreditCardV2": [
                82,
                {
                    "checkoutId": [
                        180,
                        "ID!"
                    ],
                    "payment": [
                        121,
                        "CreditCardPaymentInputV2!"
                    ]
                }
            ],
            "checkoutCompleteWithTokenizedPaymentV3": [
                83,
                {
                    "checkoutId": [
                        180,
                        "ID!"
                    ],
                    "payment": [
                        314,
                        "TokenizedPaymentInputV3!"
                    ]
                }
            ],
            "checkoutCreate": [
                85,
                {
                    "input": [
                        84,
                        "CheckoutCreateInput!"
                    ],
                    "queueToken": [
                        305
                    ]
                }
            ],
            "checkoutCustomerAssociateV2": [
                86,
                {
                    "checkoutId": [
                        180,
                        "ID!"
                    ],
                    "customerAccessToken": [
                        305,
                        "String!"
                    ]
                }
            ],
            "checkoutCustomerDisassociateV2": [
                87,
                {
                    "checkoutId": [
                        180,
                        "ID!"
                    ]
                }
            ],
            "checkoutDiscountCodeApplyV2": [
                88,
                {
                    "discountCode": [
                        305,
                        "String!"
                    ],
                    "checkoutId": [
                        180,
                        "ID!"
                    ]
                }
            ],
            "checkoutDiscountCodeRemove": [
                89,
                {
                    "checkoutId": [
                        180,
                        "ID!"
                    ]
                }
            ],
            "checkoutEmailUpdateV2": [
                90,
                {
                    "checkoutId": [
                        180,
                        "ID!"
                    ],
                    "email": [
                        305,
                        "String!"
                    ]
                }
            ],
            "checkoutGiftCardRemoveV2": [
                92,
                {
                    "appliedGiftCardId": [
                        180,
                        "ID!"
                    ],
                    "checkoutId": [
                        180,
                        "ID!"
                    ]
                }
            ],
            "checkoutGiftCardsAppend": [
                93,
                {
                    "giftCardCodes": [
                        305,
                        "[String!]!"
                    ],
                    "checkoutId": [
                        180,
                        "ID!"
                    ]
                }
            ],
            "checkoutLineItemsAdd": [
                99,
                {
                    "lineItems": [
                        97,
                        "[CheckoutLineItemInput!]!"
                    ],
                    "checkoutId": [
                        180,
                        "ID!"
                    ]
                }
            ],
            "checkoutLineItemsRemove": [
                100,
                {
                    "checkoutId": [
                        180,
                        "ID!"
                    ],
                    "lineItemIds": [
                        180,
                        "[ID!]!"
                    ]
                }
            ],
            "checkoutLineItemsReplace": [
                101,
                {
                    "lineItems": [
                        97,
                        "[CheckoutLineItemInput!]!"
                    ],
                    "checkoutId": [
                        180,
                        "ID!"
                    ]
                }
            ],
            "checkoutLineItemsUpdate": [
                102,
                {
                    "checkoutId": [
                        180,
                        "ID!"
                    ],
                    "lineItems": [
                        98,
                        "[CheckoutLineItemUpdateInput!]!"
                    ]
                }
            ],
            "checkoutShippingAddressUpdateV2": [
                103,
                {
                    "shippingAddress": [
                        199,
                        "MailingAddressInput!"
                    ],
                    "checkoutId": [
                        180,
                        "ID!"
                    ]
                }
            ],
            "checkoutShippingLineUpdate": [
                104,
                {
                    "checkoutId": [
                        180,
                        "ID!"
                    ],
                    "shippingRateHandle": [
                        305,
                        "String!"
                    ]
                }
            ],
            "customerAccessTokenCreate": [
                128,
                {
                    "input": [
                        127,
                        "CustomerAccessTokenCreateInput!"
                    ]
                }
            ],
            "customerAccessTokenCreateWithMultipass": [
                129,
                {
                    "multipassToken": [
                        305,
                        "String!"
                    ]
                }
            ],
            "customerAccessTokenDelete": [
                130,
                {
                    "customerAccessToken": [
                        305,
                        "String!"
                    ]
                }
            ],
            "customerAccessTokenRenew": [
                131,
                {
                    "customerAccessToken": [
                        305,
                        "String!"
                    ]
                }
            ],
            "customerActivate": [
                134,
                {
                    "id": [
                        180,
                        "ID!"
                    ],
                    "input": [
                        133,
                        "CustomerActivateInput!"
                    ]
                }
            ],
            "customerActivateByUrl": [
                132,
                {
                    "activationUrl": [
                        318,
                        "URL!"
                    ],
                    "password": [
                        305,
                        "String!"
                    ]
                }
            ],
            "customerAddressCreate": [
                135,
                {
                    "customerAccessToken": [
                        305,
                        "String!"
                    ],
                    "address": [
                        199,
                        "MailingAddressInput!"
                    ]
                }
            ],
            "customerAddressDelete": [
                136,
                {
                    "id": [
                        180,
                        "ID!"
                    ],
                    "customerAccessToken": [
                        305,
                        "String!"
                    ]
                }
            ],
            "customerAddressUpdate": [
                137,
                {
                    "customerAccessToken": [
                        305,
                        "String!"
                    ],
                    "id": [
                        180,
                        "ID!"
                    ],
                    "address": [
                        199,
                        "MailingAddressInput!"
                    ]
                }
            ],
            "customerCreate": [
                139,
                {
                    "input": [
                        138,
                        "CustomerCreateInput!"
                    ]
                }
            ],
            "customerDefaultAddressUpdate": [
                140,
                {
                    "customerAccessToken": [
                        305,
                        "String!"
                    ],
                    "addressId": [
                        180,
                        "ID!"
                    ]
                }
            ],
            "customerRecover": [
                142,
                {
                    "email": [
                        305,
                        "String!"
                    ]
                }
            ],
            "customerReset": [
                145,
                {
                    "id": [
                        180,
                        "ID!"
                    ],
                    "input": [
                        144,
                        "CustomerResetInput!"
                    ]
                }
            ],
            "customerResetByUrl": [
                143,
                {
                    "resetUrl": [
                        318,
                        "URL!"
                    ],
                    "password": [
                        305,
                        "String!"
                    ]
                }
            ],
            "customerUpdate": [
                147,
                {
                    "customerAccessToken": [
                        305,
                        "String!"
                    ],
                    "customer": [
                        146,
                        "CustomerUpdateInput!"
                    ]
                }
            ],
            "__typename": [
                305
            ]
        },
        "Node": {
            "id": [
                180
            ],
            "on_AppliedGiftCard": [
                3
            ],
            "on_Article": [
                4
            ],
            "on_Blog": [
                16
            ],
            "on_Cart": [
                25
            ],
            "on_CartLine": [
                55
            ],
            "on_Checkout": [
                76
            ],
            "on_CheckoutLineItem": [
                94
            ],
            "on_Collection": [
                106
            ],
            "on_Comment": [
                111
            ],
            "on_ExternalVideo": [
                165
            ],
            "on_GenericFile": [
                175
            ],
            "on_Location": [
                191
            ],
            "on_MailingAddress": [
                196
            ],
            "on_Market": [
                201
            ],
            "on_MediaImage": [
                207
            ],
            "on_MediaPresentation": [
                208
            ],
            "on_Menu": [
                210
            ],
            "on_MenuItem": [
                211
            ],
            "on_Metafield": [
                214
            ],
            "on_Metaobject": [
                224
            ],
            "on_Model3d": [
                229
            ],
            "on_Order": [
                236
            ],
            "on_Page": [
                246
            ],
            "on_Payment": [
                251
            ],
            "on_Product": [
                257
            ],
            "on_ProductOption": [
                264
            ],
            "on_ProductVariant": [
                268
            ],
            "on_Shop": [
                298
            ],
            "on_ShopPolicy": [
                300
            ],
            "on_UrlRedirect": [
                324
            ],
            "on_Video": [
                329
            ],
            "__typename": [
                305
            ]
        },
        "OnlineStorePublishable": {
            "onlineStoreUrl": [
                318
            ],
            "on_Article": [
                4
            ],
            "on_Blog": [
                16
            ],
            "on_Collection": [
                106
            ],
            "on_Page": [
                246
            ],
            "on_Product": [
                257
            ],
            "__typename": [
                305
            ]
        },
        "Order": {
            "billingAddress": [
                196
            ],
            "cancelReason": [
                237
            ],
            "canceledAt": [
                149
            ],
            "currencyCode": [
                124
            ],
            "currentSubtotalPrice": [
                232
            ],
            "currentTotalDuties": [
                232
            ],
            "currentTotalPrice": [
                232
            ],
            "currentTotalTax": [
                232
            ],
            "customAttributes": [
                9
            ],
            "customerLocale": [
                305
            ],
            "customerUrl": [
                318
            ],
            "discountApplications": [
                158,
                {
                    "first": [
                        186
                    ],
                    "after": [
                        305
                    ],
                    "last": [
                        186
                    ],
                    "before": [
                        305
                    ],
                    "reverse": [
                        20
                    ]
                }
            ],
            "edited": [
                20
            ],
            "email": [
                305
            ],
            "financialStatus": [
                240
            ],
            "fulfillmentStatus": [
                241
            ],
            "id": [
                180
            ],
            "lineItems": [
                243,
                {
                    "first": [
                        186
                    ],
                    "after": [
                        305
                    ],
                    "last": [
                        186
                    ],
                    "before": [
                        305
                    ],
                    "reverse": [
                        20
                    ]
                }
            ],
            "metafield": [
                214,
                {
                    "namespace": [
                        305,
                        "String!"
                    ],
                    "key": [
                        305,
                        "String!"
                    ]
                }
            ],
            "metafields": [
                214,
                {
                    "identifiers": [
                        179,
                        "[HasMetafieldsIdentifier!]!"
                    ]
                }
            ],
            "name": [
                305
            ],
            "orderNumber": [
                186
            ],
            "originalTotalDuties": [
                232
            ],
            "originalTotalPrice": [
                232
            ],
            "phone": [
                305
            ],
            "processedAt": [
                149
            ],
            "shippingAddress": [
                196
            ],
            "shippingDiscountAllocations": [
                155
            ],
            "statusUrl": [
                318
            ],
            "subtotalPrice": [
                232
            ],
            "subtotalPriceV2": [
                232
            ],
            "successfulFulfillments": [
                170,
                {
                    "first": [
                        186
                    ]
                }
            ],
            "totalPrice": [
                232
            ],
            "totalPriceV2": [
                232
            ],
            "totalRefunded": [
                232
            ],
            "totalRefundedV2": [
                232
            ],
            "totalShippingPrice": [
                232
            ],
            "totalShippingPriceV2": [
                232
            ],
            "totalTax": [
                232
            ],
            "totalTaxV2": [
                232
            ],
            "__typename": [
                305
            ]
        },
        "OrderCancelReason": {},
        "OrderConnection": {
            "edges": [
                239
            ],
            "nodes": [
                236
            ],
            "pageInfo": [
                249
            ],
            "totalCount": [
                323
            ],
            "__typename": [
                305
            ]
        },
        "OrderEdge": {
            "cursor": [
                305
            ],
            "node": [
                236
            ],
            "__typename": [
                305
            ]
        },
        "OrderFinancialStatus": {},
        "OrderFulfillmentStatus": {},
        "OrderLineItem": {
            "currentQuantity": [
                186
            ],
            "customAttributes": [
                9
            ],
            "discountAllocations": [
                155
            ],
            "discountedTotalPrice": [
                232
            ],
            "originalTotalPrice": [
                232
            ],
            "quantity": [
                186
            ],
            "title": [
                305
            ],
            "variant": [
                268
            ],
            "__typename": [
                305
            ]
        },
        "OrderLineItemConnection": {
            "edges": [
                244
            ],
            "nodes": [
                242
            ],
            "pageInfo": [
                249
            ],
            "__typename": [
                305
            ]
        },
        "OrderLineItemEdge": {
            "cursor": [
                305
            ],
            "node": [
                242
            ],
            "__typename": [
                305
            ]
        },
        "OrderSortKeys": {},
        "Page": {
            "body": [
                177
            ],
            "bodySummary": [
                305
            ],
            "createdAt": [
                149
            ],
            "handle": [
                305
            ],
            "id": [
                180
            ],
            "metafield": [
                214,
                {
                    "namespace": [
                        305,
                        "String!"
                    ],
                    "key": [
                        305,
                        "String!"
                    ]
                }
            ],
            "metafields": [
                214,
                {
                    "identifiers": [
                        179,
                        "[HasMetafieldsIdentifier!]!"
                    ]
                }
            ],
            "onlineStoreUrl": [
                318
            ],
            "seo": [
                272
            ],
            "title": [
                305
            ],
            "updatedAt": [
                149
            ],
            "__typename": [
                305
            ]
        },
        "PageConnection": {
            "edges": [
                248
            ],
            "nodes": [
                246
            ],
            "pageInfo": [
                249
            ],
            "__typename": [
                305
            ]
        },
        "PageEdge": {
            "cursor": [
                305
            ],
            "node": [
                246
            ],
            "__typename": [
                305
            ]
        },
        "PageInfo": {
            "endCursor": [
                305
            ],
            "hasNextPage": [
                20
            ],
            "hasPreviousPage": [
                20
            ],
            "startCursor": [
                305
            ],
            "__typename": [
                305
            ]
        },
        "PageSortKeys": {},
        "Payment": {
            "amount": [
                232
            ],
            "amountV2": [
                232
            ],
            "billingAddress": [
                196
            ],
            "checkout": [
                76
            ],
            "creditCard": [
                120
            ],
            "errorMessage": [
                305
            ],
            "id": [
                180
            ],
            "idempotencyKey": [
                305
            ],
            "nextActionUrl": [
                318
            ],
            "ready": [
                20
            ],
            "test": [
                20
            ],
            "transaction": [
                315
            ],
            "__typename": [
                305
            ]
        },
        "PaymentSettings": {
            "acceptedCardBrands": [
                24
            ],
            "cardVaultUrl": [
                318
            ],
            "countryCode": [
                119
            ],
            "currencyCode": [
                124
            ],
            "enabledPresentmentCurrencies": [
                124
            ],
            "shopifyPaymentsAccountId": [
                305
            ],
            "supportedDigitalWallets": [
                154
            ],
            "__typename": [
                305
            ]
        },
        "PaymentTokenType": {},
        "PriceRangeFilter": {
            "min": [
                169
            ],
            "max": [
                169
            ],
            "__typename": [
                305
            ]
        },
        "PricingPercentageValue": {
            "percentage": [
                169
            ],
            "__typename": [
                305
            ]
        },
        "PricingValue": {
            "on_MoneyV2": [
                232
            ],
            "on_PricingPercentageValue": [
                255
            ],
            "__typename": [
                305
            ]
        },
        "Product": {
            "availableForSale": [
                20
            ],
            "collections": [
                107,
                {
                    "first": [
                        186
                    ],
                    "after": [
                        305
                    ],
                    "last": [
                        186
                    ],
                    "before": [
                        305
                    ],
                    "reverse": [
                        20
                    ]
                }
            ],
            "compareAtPriceRange": [
                265
            ],
            "createdAt": [
                149
            ],
            "description": [
                305,
                {
                    "truncateAt": [
                        186
                    ]
                }
            ],
            "descriptionHtml": [
                177
            ],
            "featuredImage": [
                181
            ],
            "handle": [
                305
            ],
            "id": [
                180
            ],
            "images": [
                182,
                {
                    "first": [
                        186
                    ],
                    "after": [
                        305
                    ],
                    "last": [
                        186
                    ],
                    "before": [
                        305
                    ],
                    "reverse": [
                        20
                    ],
                    "sortKey": [
                        262
                    ]
                }
            ],
            "isGiftCard": [
                20
            ],
            "media": [
                203,
                {
                    "first": [
                        186
                    ],
                    "after": [
                        305
                    ],
                    "last": [
                        186
                    ],
                    "before": [
                        305
                    ],
                    "reverse": [
                        20
                    ],
                    "sortKey": [
                        263
                    ]
                }
            ],
            "metafield": [
                214,
                {
                    "namespace": [
                        305,
                        "String!"
                    ],
                    "key": [
                        305,
                        "String!"
                    ]
                }
            ],
            "metafields": [
                214,
                {
                    "identifiers": [
                        179,
                        "[HasMetafieldsIdentifier!]!"
                    ]
                }
            ],
            "onlineStoreUrl": [
                318
            ],
            "options": [
                264,
                {
                    "first": [
                        186
                    ]
                }
            ],
            "priceRange": [
                265
            ],
            "productType": [
                305
            ],
            "publishedAt": [
                149
            ],
            "requiresSellingPlan": [
                20
            ],
            "sellingPlanGroups": [
                290,
                {
                    "first": [
                        186
                    ],
                    "after": [
                        305
                    ],
                    "last": [
                        186
                    ],
                    "before": [
                        305
                    ],
                    "reverse": [
                        20
                    ]
                }
            ],
            "seo": [
                272
            ],
            "tags": [
                305
            ],
            "title": [
                305
            ],
            "totalInventory": [
                186
            ],
            "updatedAt": [
                149
            ],
            "variantBySelectedOptions": [
                268,
                {
                    "selectedOptions": [
                        275,
                        "[SelectedOptionInput!]!"
                    ]
                }
            ],
            "variants": [
                269,
                {
                    "first": [
                        186
                    ],
                    "after": [
                        305
                    ],
                    "last": [
                        186
                    ],
                    "before": [
                        305
                    ],
                    "reverse": [
                        20
                    ],
                    "sortKey": [
                        271
                    ]
                }
            ],
            "vendor": [
                305
            ],
            "__typename": [
                305
            ]
        },
        "ProductCollectionSortKeys": {},
        "ProductConnection": {
            "edges": [
                260
            ],
            "filters": [
                166
            ],
            "nodes": [
                257
            ],
            "pageInfo": [
                249
            ],
            "__typename": [
                305
            ]
        },
        "ProductEdge": {
            "cursor": [
                305
            ],
            "node": [
                257
            ],
            "__typename": [
                305
            ]
        },
        "ProductFilter": {
            "available": [
                20
            ],
            "variantOption": [
                328
            ],
            "productType": [
                305
            ],
            "productVendor": [
                305
            ],
            "price": [
                254
            ],
            "productMetafield": [
                217
            ],
            "variantMetafield": [
                217
            ],
            "tag": [
                305
            ],
            "__typename": [
                305
            ]
        },
        "ProductImageSortKeys": {},
        "ProductMediaSortKeys": {},
        "ProductOption": {
            "id": [
                180
            ],
            "name": [
                305
            ],
            "values": [
                305
            ],
            "__typename": [
                305
            ]
        },
        "ProductPriceRange": {
            "maxVariantPrice": [
                232
            ],
            "minVariantPrice": [
                232
            ],
            "__typename": [
                305
            ]
        },
        "ProductRecommendationIntent": {},
        "ProductSortKeys": {},
        "ProductVariant": {
            "availableForSale": [
                20
            ],
            "barcode": [
                305
            ],
            "compareAtPrice": [
                232
            ],
            "compareAtPriceV2": [
                232
            ],
            "currentlyNotInStock": [
                20
            ],
            "id": [
                180
            ],
            "image": [
                181
            ],
            "metafield": [
                214,
                {
                    "namespace": [
                        305,
                        "String!"
                    ],
                    "key": [
                        305,
                        "String!"
                    ]
                }
            ],
            "metafields": [
                214,
                {
                    "identifiers": [
                        179,
                        "[HasMetafieldsIdentifier!]!"
                    ]
                }
            ],
            "price": [
                232
            ],
            "priceV2": [
                232
            ],
            "product": [
                257
            ],
            "quantityAvailable": [
                186
            ],
            "requiresShipping": [
                20
            ],
            "selectedOptions": [
                274
            ],
            "sellingPlanAllocations": [
                278,
                {
                    "first": [
                        186
                    ],
                    "after": [
                        305
                    ],
                    "last": [
                        186
                    ],
                    "before": [
                        305
                    ],
                    "reverse": [
                        20
                    ]
                }
            ],
            "sku": [
                305
            ],
            "storeAvailability": [
                303,
                {
                    "first": [
                        186
                    ],
                    "after": [
                        305
                    ],
                    "last": [
                        186
                    ],
                    "before": [
                        305
                    ],
                    "reverse": [
                        20
                    ],
                    "near": [
                        176
                    ]
                }
            ],
            "title": [
                305
            ],
            "unitPrice": [
                232
            ],
            "unitPriceMeasurement": [
                319
            ],
            "weight": [
                169
            ],
            "weightUnit": [
                331
            ],
            "__typename": [
                305
            ]
        },
        "ProductVariantConnection": {
            "edges": [
                270
            ],
            "nodes": [
                268
            ],
            "pageInfo": [
                249
            ],
            "__typename": [
                305
            ]
        },
        "ProductVariantEdge": {
            "cursor": [
                305
            ],
            "node": [
                268
            ],
            "__typename": [
                305
            ]
        },
        "ProductVariantSortKeys": {},
        "SEO": {
            "description": [
                305
            ],
            "title": [
                305
            ],
            "__typename": [
                305
            ]
        },
        "ScriptDiscountApplication": {
            "allocationMethod": [
                157
            ],
            "targetSelection": [
                160
            ],
            "targetType": [
                161
            ],
            "title": [
                305
            ],
            "value": [
                256
            ],
            "__typename": [
                305
            ]
        },
        "SelectedOption": {
            "name": [
                305
            ],
            "value": [
                305
            ],
            "__typename": [
                305
            ]
        },
        "SelectedOptionInput": {
            "name": [
                305
            ],
            "value": [
                305
            ],
            "__typename": [
                305
            ]
        },
        "SellingPlan": {
            "checkoutCharge": [
                281
            ],
            "description": [
                305
            ],
            "id": [
                180
            ],
            "name": [
                305
            ],
            "options": [
                293
            ],
            "priceAdjustments": [
                295
            ],
            "recurringDeliveries": [
                20
            ],
            "__typename": [
                305
            ]
        },
        "SellingPlanAllocation": {
            "checkoutChargeAmount": [
                232
            ],
            "priceAdjustments": [
                280
            ],
            "remainingBalanceChargeAmount": [
                232
            ],
            "sellingPlan": [
                276
            ],
            "__typename": [
                305
            ]
        },
        "SellingPlanAllocationConnection": {
            "edges": [
                279
            ],
            "nodes": [
                277
            ],
            "pageInfo": [
                249
            ],
            "__typename": [
                305
            ]
        },
        "SellingPlanAllocationEdge": {
            "cursor": [
                305
            ],
            "node": [
                277
            ],
            "__typename": [
                305
            ]
        },
        "SellingPlanAllocationPriceAdjustment": {
            "compareAtPrice": [
                232
            ],
            "perDeliveryPrice": [
                232
            ],
            "price": [
                232
            ],
            "unitPrice": [
                232
            ],
            "__typename": [
                305
            ]
        },
        "SellingPlanCheckoutCharge": {
            "type": [
                283
            ],
            "value": [
                284
            ],
            "__typename": [
                305
            ]
        },
        "SellingPlanCheckoutChargePercentageValue": {
            "percentage": [
                169
            ],
            "__typename": [
                305
            ]
        },
        "SellingPlanCheckoutChargeType": {},
        "SellingPlanCheckoutChargeValue": {
            "on_MoneyV2": [
                232
            ],
            "on_SellingPlanCheckoutChargePercentageValue": [
                282
            ],
            "__typename": [
                305
            ]
        },
        "SellingPlanConnection": {
            "edges": [
                286
            ],
            "nodes": [
                276
            ],
            "pageInfo": [
                249
            ],
            "__typename": [
                305
            ]
        },
        "SellingPlanEdge": {
            "cursor": [
                305
            ],
            "node": [
                276
            ],
            "__typename": [
                305
            ]
        },
        "SellingPlanFixedAmountPriceAdjustment": {
            "adjustmentAmount": [
                232
            ],
            "__typename": [
                305
            ]
        },
        "SellingPlanFixedPriceAdjustment": {
            "price": [
                232
            ],
            "__typename": [
                305
            ]
        },
        "SellingPlanGroup": {
            "appName": [
                305
            ],
            "name": [
                305
            ],
            "options": [
                292
            ],
            "sellingPlans": [
                285,
                {
                    "first": [
                        186
                    ],
                    "after": [
                        305
                    ],
                    "last": [
                        186
                    ],
                    "before": [
                        305
                    ],
                    "reverse": [
                        20
                    ]
                }
            ],
            "__typename": [
                305
            ]
        },
        "SellingPlanGroupConnection": {
            "edges": [
                291
            ],
            "nodes": [
                289
            ],
            "pageInfo": [
                249
            ],
            "__typename": [
                305
            ]
        },
        "SellingPlanGroupEdge": {
            "cursor": [
                305
            ],
            "node": [
                289
            ],
            "__typename": [
                305
            ]
        },
        "SellingPlanGroupOption": {
            "name": [
                305
            ],
            "values": [
                305
            ],
            "__typename": [
                305
            ]
        },
        "SellingPlanOption": {
            "name": [
                305
            ],
            "value": [
                305
            ],
            "__typename": [
                305
            ]
        },
        "SellingPlanPercentagePriceAdjustment": {
            "adjustmentPercentage": [
                186
            ],
            "__typename": [
                305
            ]
        },
        "SellingPlanPriceAdjustment": {
            "adjustmentValue": [
                296
            ],
            "orderCount": [
                186
            ],
            "__typename": [
                305
            ]
        },
        "SellingPlanPriceAdjustmentValue": {
            "on_SellingPlanFixedAmountPriceAdjustment": [
                287
            ],
            "on_SellingPlanFixedPriceAdjustment": [
                288
            ],
            "on_SellingPlanPercentagePriceAdjustment": [
                294
            ],
            "__typename": [
                305
            ]
        },
        "ShippingRate": {
            "handle": [
                305
            ],
            "price": [
                232
            ],
            "priceV2": [
                232
            ],
            "title": [
                305
            ],
            "__typename": [
                305
            ]
        },
        "Shop": {
            "brand": [
                21
            ],
            "description": [
                305
            ],
            "id": [
                180
            ],
            "metafield": [
                214,
                {
                    "namespace": [
                        305,
                        "String!"
                    ],
                    "key": [
                        305,
                        "String!"
                    ]
                }
            ],
            "metafields": [
                214,
                {
                    "identifiers": [
                        179,
                        "[HasMetafieldsIdentifier!]!"
                    ]
                }
            ],
            "moneyFormat": [
                305
            ],
            "name": [
                305
            ],
            "paymentSettings": [
                252
            ],
            "primaryDomain": [
                164
            ],
            "privacyPolicy": [
                300
            ],
            "refundPolicy": [
                300
            ],
            "shippingPolicy": [
                300
            ],
            "shipsToCountries": [
                119
            ],
            "subscriptionPolicy": [
                301
            ],
            "termsOfService": [
                300
            ],
            "__typename": [
                305
            ]
        },
        "ShopPayWalletContentInput": {
            "billingAddress": [
                199
            ],
            "sessionToken": [
                305
            ],
            "__typename": [
                305
            ]
        },
        "ShopPolicy": {
            "body": [
                305
            ],
            "handle": [
                305
            ],
            "id": [
                180
            ],
            "title": [
                305
            ],
            "url": [
                318
            ],
            "__typename": [
                305
            ]
        },
        "ShopPolicyWithDefault": {
            "body": [
                305
            ],
            "handle": [
                305
            ],
            "id": [
                180
            ],
            "title": [
                305
            ],
            "url": [
                318
            ],
            "__typename": [
                305
            ]
        },
        "StoreAvailability": {
            "available": [
                20
            ],
            "location": [
                191
            ],
            "pickUpTime": [
                305
            ],
            "__typename": [
                305
            ]
        },
        "StoreAvailabilityConnection": {
            "edges": [
                304
            ],
            "nodes": [
                302
            ],
            "pageInfo": [
                249
            ],
            "__typename": [
                305
            ]
        },
        "StoreAvailabilityEdge": {
            "cursor": [
                305
            ],
            "node": [
                302
            ],
            "__typename": [
                305
            ]
        },
        "String": {},
        "StringConnection": {
            "edges": [
                307
            ],
            "pageInfo": [
                249
            ],
            "__typename": [
                305
            ]
        },
        "StringEdge": {
            "cursor": [
                305
            ],
            "node": [
                305
            ],
            "__typename": [
                305
            ]
        },
        "SubmissionError": {
            "code": [
                309
            ],
            "message": [
                305
            ],
            "__typename": [
                305
            ]
        },
        "SubmissionErrorCode": {},
        "SubmitAlreadyAccepted": {
            "attemptId": [
                305
            ],
            "__typename": [
                305
            ]
        },
        "SubmitFailed": {
            "checkoutUrl": [
                318
            ],
            "errors": [
                308
            ],
            "__typename": [
                305
            ]
        },
        "SubmitSuccess": {
            "attemptId": [
                305
            ],
            "__typename": [
                305
            ]
        },
        "SubmitThrottled": {
            "pollAfter": [
                149
            ],
            "__typename": [
                305
            ]
        },
        "TokenizedPaymentInputV3": {
            "paymentAmount": [
                231
            ],
            "idempotencyKey": [
                305
            ],
            "billingAddress": [
                199
            ],
            "paymentData": [
                305
            ],
            "test": [
                20
            ],
            "identifier": [
                305
            ],
            "type": [
                253
            ],
            "__typename": [
                305
            ]
        },
        "Transaction": {
            "amount": [
                232
            ],
            "amountV2": [
                232
            ],
            "kind": [
                316
            ],
            "status": [
                317
            ],
            "statusV2": [
                317
            ],
            "test": [
                20
            ],
            "__typename": [
                305
            ]
        },
        "TransactionKind": {},
        "TransactionStatus": {},
        "URL": {},
        "UnitPriceMeasurement": {
            "measuredType": [
                320
            ],
            "quantityUnit": [
                321
            ],
            "quantityValue": [
                169
            ],
            "referenceUnit": [
                321
            ],
            "referenceValue": [
                186
            ],
            "__typename": [
                305
            ]
        },
        "UnitPriceMeasurementMeasuredType": {},
        "UnitPriceMeasurementMeasuredUnit": {},
        "UnitSystem": {},
        "UnsignedInt64": {},
        "UrlRedirect": {
            "id": [
                180
            ],
            "path": [
                305
            ],
            "target": [
                305
            ],
            "__typename": [
                305
            ]
        },
        "UrlRedirectConnection": {
            "edges": [
                326
            ],
            "nodes": [
                324
            ],
            "pageInfo": [
                249
            ],
            "__typename": [
                305
            ]
        },
        "UrlRedirectEdge": {
            "cursor": [
                305
            ],
            "node": [
                324
            ],
            "__typename": [
                305
            ]
        },
        "UserError": {
            "field": [
                305
            ],
            "message": [
                305
            ],
            "__typename": [
                305
            ]
        },
        "VariantOptionFilter": {
            "name": [
                305
            ],
            "value": [
                305
            ],
            "__typename": [
                305
            ]
        },
        "Video": {
            "alt": [
                305
            ],
            "id": [
                180
            ],
            "mediaContentType": [
                204
            ],
            "presentation": [
                208
            ],
            "previewImage": [
                181
            ],
            "sources": [
                330
            ],
            "__typename": [
                305
            ]
        },
        "VideoSource": {
            "format": [
                305
            ],
            "height": [
                186
            ],
            "mimeType": [
                305
            ],
            "url": [
                305
            ],
            "width": [
                186
            ],
            "__typename": [
                305
            ]
        },
        "WeightUnit": {},
        "Query": {
            "article": [
                4,
                {
                    "id": [
                        180,
                        "ID!"
                    ]
                }
            ],
            "articles": [
                6,
                {
                    "first": [
                        186
                    ],
                    "after": [
                        305
                    ],
                    "last": [
                        186
                    ],
                    "before": [
                        305
                    ],
                    "reverse": [
                        20
                    ],
                    "sortKey": [
                        8
                    ],
                    "query": [
                        305
                    ]
                }
            ],
            "blog": [
                16,
                {
                    "id": [
                        180
                    ],
                    "handle": [
                        305
                    ]
                }
            ],
            "blogByHandle": [
                16,
                {
                    "handle": [
                        305,
                        "String!"
                    ]
                }
            ],
            "blogs": [
                17,
                {
                    "first": [
                        186
                    ],
                    "after": [
                        305
                    ],
                    "last": [
                        186
                    ],
                    "before": [
                        305
                    ],
                    "reverse": [
                        20
                    ],
                    "sortKey": [
                        19
                    ],
                    "query": [
                        305
                    ]
                }
            ],
            "cart": [
                25,
                {
                    "id": [
                        180,
                        "ID!"
                    ]
                }
            ],
            "cartCompletionAttempt": [
                35,
                {
                    "attemptId": [
                        305,
                        "String!"
                    ]
                }
            ],
            "collection": [
                106,
                {
                    "id": [
                        180
                    ],
                    "handle": [
                        305
                    ]
                }
            ],
            "collectionByHandle": [
                106,
                {
                    "handle": [
                        305,
                        "String!"
                    ]
                }
            ],
            "collections": [
                107,
                {
                    "first": [
                        186
                    ],
                    "after": [
                        305
                    ],
                    "last": [
                        186
                    ],
                    "before": [
                        305
                    ],
                    "reverse": [
                        20
                    ],
                    "sortKey": [
                        109
                    ],
                    "query": [
                        305
                    ]
                }
            ],
            "customer": [
                125,
                {
                    "customerAccessToken": [
                        305,
                        "String!"
                    ]
                }
            ],
            "localization": [
                190
            ],
            "locations": [
                193,
                {
                    "first": [
                        186
                    ],
                    "after": [
                        305
                    ],
                    "last": [
                        186
                    ],
                    "before": [
                        305
                    ],
                    "reverse": [
                        20
                    ],
                    "sortKey": [
                        195
                    ],
                    "near": [
                        176
                    ]
                }
            ],
            "menu": [
                210,
                {
                    "handle": [
                        305,
                        "String!"
                    ]
                }
            ],
            "metaobject": [
                224,
                {
                    "id": [
                        180
                    ],
                    "handle": [
                        228
                    ]
                }
            ],
            "metaobjects": [
                225,
                {
                    "type": [
                        305,
                        "String!"
                    ],
                    "sortKey": [
                        305
                    ],
                    "first": [
                        186
                    ],
                    "after": [
                        305
                    ],
                    "last": [
                        186
                    ],
                    "before": [
                        305
                    ],
                    "reverse": [
                        20
                    ]
                }
            ],
            "node": [
                234,
                {
                    "id": [
                        180,
                        "ID!"
                    ]
                }
            ],
            "nodes": [
                234,
                {
                    "ids": [
                        180,
                        "[ID!]!"
                    ]
                }
            ],
            "page": [
                246,
                {
                    "id": [
                        180
                    ],
                    "handle": [
                        305
                    ]
                }
            ],
            "pageByHandle": [
                246,
                {
                    "handle": [
                        305,
                        "String!"
                    ]
                }
            ],
            "pages": [
                247,
                {
                    "first": [
                        186
                    ],
                    "after": [
                        305
                    ],
                    "last": [
                        186
                    ],
                    "before": [
                        305
                    ],
                    "reverse": [
                        20
                    ],
                    "sortKey": [
                        250
                    ],
                    "query": [
                        305
                    ]
                }
            ],
            "product": [
                257,
                {
                    "id": [
                        180
                    ],
                    "handle": [
                        305
                    ]
                }
            ],
            "productByHandle": [
                257,
                {
                    "handle": [
                        305,
                        "String!"
                    ]
                }
            ],
            "productRecommendations": [
                257,
                {
                    "productId": [
                        180,
                        "ID!"
                    ],
                    "intent": [
                        266
                    ]
                }
            ],
            "productTags": [
                306,
                {
                    "first": [
                        186,
                        "Int!"
                    ]
                }
            ],
            "productTypes": [
                306,
                {
                    "first": [
                        186,
                        "Int!"
                    ]
                }
            ],
            "products": [
                259,
                {
                    "first": [
                        186
                    ],
                    "after": [
                        305
                    ],
                    "last": [
                        186
                    ],
                    "before": [
                        305
                    ],
                    "reverse": [
                        20
                    ],
                    "sortKey": [
                        267
                    ],
                    "query": [
                        305
                    ]
                }
            ],
            "publicApiVersions": [
                0
            ],
            "shop": [
                298
            ],
            "urlRedirects": [
                325,
                {
                    "first": [
                        186
                    ],
                    "after": [
                        305
                    ],
                    "last": [
                        186
                    ],
                    "before": [
                        305
                    ],
                    "reverse": [
                        20
                    ],
                    "query": [
                        305
                    ]
                }
            ],
            "__typename": [
                305
            ]
        }
    }
}