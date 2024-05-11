import React from "react";
import Logo from "../assets/logo.png";
import cartIcon from "../assets/carticon.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((state) => state.carts);
  const totalItems = cartItems.reduce(
    (total, product) => (total += product.quantity),
    0
  );
  return (
    <nav className="bg-[#171C2A] py-4">
      <div className="navBar">
        <Link to="/">
          <img src={Logo} alt="akh" className="max-w-[140px]" />
        </Link>

        <div className="flex gap-4 items-center">
          <Link to="/" className="navHome" id="akh-home">
            {" "}
            Home{" "}
          </Link>
          <Link to="/cart" className="navCart" id="akh-cart">
            <img src={cartIcon} alt="cartIcon" className="w-5" />
            <span id="akh-totalCart">{totalItems}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
