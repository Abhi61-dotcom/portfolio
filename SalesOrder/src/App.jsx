import React, { useState } from "react";
import "./App.css";

const SalesOrder = () => {
  const [customer, setCustomer] = useState({
    name: "",
    code: "",
    orderNo: "",
    date: "",
    salesman: "",
    notes: "",
  });

  const [items, setItems] = useState([
    { id: 1, item: "", qty: "", rate: "", disc: "", tax: "" },
  ]);

  const handleCustomerChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleItemChange = (id, field, value) => {
    setItems(
      items.map((it) =>
        it.id === id ? { ...it, [field]: value } : it
      )
    );
  };

  const addRow = () => {
    setItems([
      ...items,
      { id: Date.now(), item: "", qty: "", rate: "", disc: "", tax: "" },
    ]);
  };

  const removeRow = (id) => {
    setItems(items.filter((it) => it.id !== id));
  };

  const calcItem = (it) => {
    const amount = it.qty * it.rate;
    const discAmt = (amount * it.disc) / 100;
    const taxable = amount - discAmt;
    const cgst = (taxable * it.tax) / 200;
    const sgst = (taxable * it.tax) / 200;
    const igst = 0;
    const lineTotal = taxable + cgst + sgst + igst;
    return { amount, discAmt, cgst, sgst, igst, lineTotal };
  };

  const totals = items.reduce(
    (acc, it) => {
      const c = calcItem(it);
      acc.subtotal += c.amount;
      acc.discount += c.discAmt;
      acc.cgst += c.cgst;
      acc.sgst += c.sgst;
      acc.igst += c.igst;
      acc.grand += c.lineTotal;
      return acc;
    },
    { subtotal: 0, discount: 0, cgst: 0, sgst: 0, igst: 0, grand: 0 }
  );

  const handleSave = () => {
    const data = { customer, items, totals };
    console.log("Saved Data:", data);
    alert("Order Saved! Check console for data.");
  };

  return (
    <div className="page">
      <div className="container">
        <h2>Sales Order — Fast Entry</h2>

        {/* Customer Details */}
        <div className="customer-grid">
          <input type="text" name="name" placeholder="Customer Name" value={customer.name} onChange={handleCustomerChange} />
          <input type="text" name="code" placeholder="Customer Code" value={customer.code} onChange={handleCustomerChange} />
          <input type="text" name="orderNo" placeholder="Order No" value={customer.orderNo} onChange={handleCustomerChange} />
          <input type="date" name="date" value={customer.date} onChange={handleCustomerChange} />
          <input type="text" name="salesman" placeholder="Salesman" value={customer.salesman} onChange={handleCustomerChange} />
        </div>

        {/* Items Table */}
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Item</th>
                <th>Qty</th>
                <th>Rate</th>
                <th>Amount</th>
                <th>Disc %</th>
                <th>Disc Amt</th>
                <th>Tax %</th>
                <th>CGST</th>
                <th>SGST</th>
                <th>IGST</th>
                <th>Line Total</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {items.map((it, idx) => {
                const c = calcItem(it);
                return (
                  <tr key={it.id}>
                    <td>{idx + 1}</td>
                    <td>
                      <input type="text" value={it.item} onChange={(e) => handleItemChange(it.id, "item", e.target.value)} />
                    </td>
                    <td>
                      <input type="number" value={it.qty} onChange={(e) => handleItemChange(it.id, "qty", +e.target.value)} />
                    </td>
                    <td>
                      <input type="number" value={it.rate} onChange={(e) => handleItemChange(it.id, "rate", +e.target.value)} />
                    </td>
                    <td>{c.amount.toFixed(2)}</td>
                    <td>
                      <input type="number" value={it.disc} onChange={(e) => handleItemChange(it.id, "disc", +e.target.value)} />
                    </td>
                    <td>{c.discAmt.toFixed(2)}</td>
                    <td>
                      <input type="number" value={it.tax} onChange={(e) => handleItemChange(it.id, "tax", +e.target.value)} />
                    </td>
                    <td>{c.cgst.toFixed(2)}</td>
                    <td>{c.sgst.toFixed(2)}</td>
                    <td>{c.igst.toFixed(2)}</td>
                    <td>{c.lineTotal.toFixed(2)}</td>
                    <td>
                      <button className="delete-btn" onClick={() => removeRow(it.id)}>✕</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <button className="add-btn" onClick={addRow}>+ Add Row</button>

        <textarea name="notes" value={customer.notes} onChange={handleCustomerChange} placeholder="Notes"></textarea>

        {/* Summary */}
        <div className="summary">
          <h3>Summary</h3>
          <p>Sub Total: {totals.subtotal.toFixed(2)}</p>
          <p>Total Discount: {totals.discount.toFixed(2)}</p>
          <p>CGST Total: {totals.cgst.toFixed(2)}</p>
          <p>SGST Total: {totals.sgst.toFixed(2)}</p>
          <p>IGST Total: {totals.igst.toFixed(2)}</p>
          <p className="grand">Grand Total: {totals.grand.toFixed(2)}</p>
        </div>

        <button className="save-btn" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default SalesOrder;
