import React from 'react';
const PayForms = (props: any) => {
  return (
    <div className="container">
      <form className="payform">
        <div className="heading">تفاصيل الدفع</div>

        <label htmlFor="name" className="label">
          <span className="title">اسم حامل البطاقة</span>
          <input
            className="input-field"
            type="text"
            name="input-name"
            title="Input title"
            placeholder="اسم حامل البطاقة"
          />
        </label>
        <label htmlFor="serialCardNumber" className="label">
          <span className="title">رقم البطاقة</span>
          <input
            id="serialCardNumber"
            className="input-field"
            type="number"
            name="input-name"
            title="رقم البطاقة"
            placeholder="0000 0000 0000 0000"
          />
        </label>
        <div className="split">
          <label htmlFor="ExDate" className="label">
            <span className="title">تاريخ الانتهاء</span>
            <input
              id="ExDate"
              className="input-field"
              type="text"
              name="input-name"
              title="تاريخ الانتهاء"
              placeholder="01/23"
            />
          </label>
          <label htmlFor="cvv" className="label">
            <span className="title"> CVV</span>
            <input
              id="cvv"
              className="input-field"
              type="number"
              name="cvv"
              title="CVV"
              placeholder="CVV"
            />
          </label>
        </div>
        <input
          className="checkout-btn"
          type="button"
          value="انهاء عملية الدفع"
        />
        <img
          src="https://help.zazzle.com/hc/article_attachments/360010513393/Logos-01.png"
          alt=""
          height={60}
          width={'100%'}
        />
      </form>
    </div>
  );
};
export default PayForms;
