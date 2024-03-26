import React, { useState } from 'react';
import { SecoundryLoader } from './loader';
const BillForms = (props: any) => {
  const [show,setShow]=useState(true)
  return (
    <div className="invoicecontainer">
      <SecoundryLoader show={show} setShow={setShow}/>
      <div className="heading">تفاصيل السيارة</div>
      <form className="payform form">
        <div className="row">
          <div className="col-7">
            <img
              src="https://s3.eu-central-1.amazonaws.com/zl-clients-sharings/90Tech.png"
              className="logo"
            />
          </div>
          <div className="col-5">
            <h1 className="document-type display-4">رقم الفاتورة</h1>
            <p className="text-right">
              <strong>0T-17-01-0123</strong>
            </p>
          </div>
        </div>
        <div className="row" style={{ alignContent: 'center' }}>
          <div className="col-7">
            <p>
              <strong>نوع التامين</strong>
              <br />
              تامين السيارات
              <br />
              شامل / ضد الغير
            </p>
          </div>
          <div className="col-5">
            <br />
            <br />
            <br />
            <p>
              <strong>ملاحظة: </strong>
         لن يتم خصم المبلغ الا بعد تاكيد الطلب سوف نتواصل معك للتاكيد
            </p>
          </div>
        </div>
        <br />

        <br />
        <table className="table table-striped">
          <thead>
            <tr>
              <th>التفاصيل</th>
              <th>المجموع</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>تامين شامل / ضد الغير</td>

              <td className="text-right">200,00 ريال </td>
            </tr>
          </tbody>
        </table>
        <div className="row">
          <div className="col-8"></div>
          <div className="col-4">
            <table className="table table-sm text-right">
              <tr>
                <td>
                  <strong>المجموع</strong>
                </td>
                <td className="text-right">200 ريال </td>
              </tr>
            </table>
            <input
              className="login-button"
              type="submit"
              value="الانتقال الى الدفع"
              onClick={() => {
                props.handleElement(4);
              }}
            />
          </div>
        </div>
      </form>
    </div>
  );
};
export default BillForms;
