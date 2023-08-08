import {
  Container,
  FormControl,
  Navbar,
  Nav,
  Dropdown,
  Badge,
  Button,
} from "react-bootstrap";
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";
import { AiFillDelete } from "react-icons/ai";
import logo from "../components/logo.jpg";

const Header = () => {
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();

  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <Link to="/"><img src={logo} alt="logo" className="logo"/></Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 500 }}
            placeholder="Search a product"
            className="m-auto"
            onChange={(e) =>
              productDispatch({
                type: "FILTER_BY_SEARCH",
                payload: e.target.value,
              })
            }
          />
        </Navbar.Text>
        <Nav>
          {/* <Dropdown>
            <Dropdown.Toggle variant="success">
              <FaCartArrowDown color="white" fontSize="25px" />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu  style={{ minWidth: 370 }} >
              {cart.length > 0 ? (
                <>
                  {cart.map((prod) => (
                    <span className="cartitem" key={prod.id}>
                      <img
                        src={prod.image}
                        className="cartItemImg"
                        alt={prod.name}
                      />
                      <div className="cartItemDetail">
                        <span>{prod.name}</span>
                        <span>$ {prod.price + "." + 0}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          })
                        }
                      />
                    </span>
                  ))}
                  <Link to="/cart">
                    <Button style={{width: "95%", margin: "0 10px"}}>Go To Cart</Button>
                  </Link>
                </>
              ) : (
                <span style={{ padding: 10 }}>Cart is empty!</span>
              )}
            </Dropdown.Menu>
          </Dropdown> */}


          {/* i replace this to fit my desgin */}

          <Link to="/cart">
            <Dropdown>
              <Dropdown.Toggle variant="success">
                <FaCartArrowDown color="white" fontSize="25px" />
                <Badge>{cart.length}</Badge>
              </Dropdown.Toggle>
            </Dropdown>
          </Link>

          {/* end of my desgin */}

        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
