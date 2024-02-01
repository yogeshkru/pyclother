import React from "react";
import UseInput from "../useCustom/useInput";
import DataTable from 'react-data-table-component';

function Couponlist() {
  const columns = [
    {
      name: 'Title',
      selector: row => row.title,
    },
    {
      name: 'Year',
      selector: row => row.year,
    },
  ];
  
  const data = [
      {
      id: 1,
      title: 'Beetlejuice',
      year: '1988',
    },
    {
      id: 2,
      title: 'Ghostbusters',
      year: '1984',
    },
  ]
  return (
    <div>
      <div className="row">
        <div className="col-lg-4">
          <div class="card">
            <div class="card-body shadow">
              <div className="">
                <h4 className="pb-2"> coupon</h4>
                <form>
                  <div className="mb-2">
                    <label className="fw-bold">Coupon Name</label>
                    <UseInput type="text" label="Name" />
                  </div>
                  <div className="mb-2">
                    <label className="fw-bold">Coupon Expired</label>
                    <UseInput type="date" label="expired" />
                  </div>
                  <div className="mb-2">
                    <label className="fw-bold"> Coupon Discount</label>
                    <UseInput type="number" label="discount" />
                  </div>
                  <div className="brand_padding">
                    <button
                      type="submit"
                      className="brand_padding--border"
                  
                    >
                   Add Coupon
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
        <DataTable
			columns={columns}
			data={data}
      pagination
		/>
        </div>
      </div>
    </div>
  );
}

export default Couponlist;
