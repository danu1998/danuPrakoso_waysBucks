import React from "react";
import { FiUser } from "react-icons/fi";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { BiShoppingBag } from "react-icons/bi";
import { Dropdown } from "react-bootstrap";
import { userImg } from "../../../assets/images";
import { Link } from "react-router-dom";
const ProfileNav = () => {
  return (
    <div className="d-flex justify-content-end align-items-center gap-5">
      <Link to="/cart">
        <div className="d-flex">
          <BiShoppingBag
            style={{ width: "28px", height: "28px" }}
            className="text-danger"
          />
          <div
            class="rounded-pill bg-danger text-center text-white"
            style={{ width: "24px", height: "24px" }}
          >
            0
          </div>
        </div>
      </Link>

      <div>
        <Dropdown>
          <Dropdown.Toggle id="dropdown-button-dark-example1" variant="light">
            <img src={userImg} className="" alt="img-user"></img>
          </Dropdown.Toggle>

          <Dropdown.Menu variant="light">
            <Link
              to="/profile"
              className="d-flex justify-content-center text-dark align-items-center gap-3 text-decoration-none"
            >
              <FiUser className="text-danger" />
              Profile
            </Link>
            <Dropdown.Divider />
            <Link
              to="/"
              className="d-flex justify-content-center align-items-center text-decoration-none gap-3 text-dark"
            >
              <RiLogoutBoxRLine className="text-danger" /> Logout
            </Link>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default ProfileNav;
