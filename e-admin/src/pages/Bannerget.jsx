import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdminEvents } from "../features/events/eventSlice";
import DataTable from "react-data-table-component";
import URL from "../utilis/Url";
import { PatchadminEevent } from "../features/events/eventSlice";
import { toast } from "react-toastify";
function Bannerget() {
  const { eventSuperAdmin } = useSelector((state) => state.event);
  const [state, setState] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e, input) => {
    dispatch(PatchadminEevent({ id: e, input: input }));
  
  };
  useEffect(() => {
    dispatch(getAdminEvents());
  }, [dispatch]);

  const [popoverContent, setPopoverContent] = useState(null);
  const [popoverShow, setPopoverShow] = useState(false);
  const [popoverPosition, setPopoverPosition] = useState({ x: 0, y: 0 });

  const handleImageClick = (imageUrl, event) => {
    setPopoverContent(
      <div className="popover-content">
        <img src={imageUrl} alt="Shop Image" />
      </div>
    );
    setPopoverPosition({ x: event.clientX, y: event.clientY });
    setPopoverShow(true);
  };

  const handleClosePopover = () => {
    setPopoverShow(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverShow && !event.target.closest(".popover")) {
        setPopoverShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popoverShow]);

  const col = [
    {
      name: "Id",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Shop Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Shop Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Image",
      cell: (row) => (
        <img
          src={`${URL.IMAGE_URL}${row.image}`}
          alt="Shop Image"
          width="50%"
          onClick={(e) => handleImageClick(`${URL.IMAGE_URL}${row.image}`, e)}
          style={{ cursor: "pointer" }}
        />
      ),
    },
    {
      name: "Action",
      selector: (row) => row.action,
    },
  ];

  const data = eventSuperAdmin.map((event, id) =>
  
  ({
  
    id: id + 1,
    name: event?.ShopId?.shop_name,
    email: (
      <a href={`mailto:${event?.ShopId?.shop_email}`}>
        {event?.ShopId?.shop_email}
      </a>
    ),
    image: event?.images[0],
    action: (
      <select
        name="status" 
        defaultValue={event.status}
        onChange={(e) => handleChange(event?._id, e.target.value)}
      >
        <option value="pending" >Pending</option>
        <option value="success" >Success</option>
        <option value="rejected" >Rejected</option>
      </select>
    ),
  }
  
  ));

  return (
    <div>
      <DataTable columns={col} data={data} pagination />
      {popoverShow && (
        <div
          className="popover"
          style={{ left: popoverPosition.x, top: popoverPosition.y }}
        >
          {popoverContent}
        </div>
      )}
    </div>
  );
}

export default Bannerget;
