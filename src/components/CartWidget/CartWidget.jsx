
function CartWidget({ cartCount }) {
    return (
        <a style={{ color: "white" }} className="nav-link" href="#">
            <i className="fas fa-shopping-cart"></i>
            {cartCount}
        </a>
    );
}

export default CartWidget