module.exports = {
    models: {
        Account: require('./doctype/Account/Account.js'),
        AccountingLedgerEntry: require('./doctype/AccountingLedgerEntry/AccountingLedgerEntry.js'),
        Party: require('./doctype/Party/Party.js'),
        Item: require('./doctype/Item/Item.js'),
        Invoice: require('./doctype/Invoice/Invoice.js'),
        InvoiceItem: require('./doctype/InvoiceItem/InvoiceItem.js'),
        InvoiceSettings: require('./doctype/InvoiceSettings/InvoiceSettings.js'),
        Tax: require('./doctype/Tax/Tax.js'),
        TaxDetail: require('./doctype/TaxDetail/TaxDetail.js'),
        TaxSummary: require('./doctype/TaxSummary/TaxSummary.js')
    }
}
