import { useSelector } from "react-redux";
import { Container, Logo, LogoutButton } from "../index";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  console.log(`Header ${authStatus}`);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="py-5 shadow bg-[#10100F] text-[#C6D8FF]">
      <Container>
        <nav className="flex items-center">
          <div className="mr-10">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>

          <ul className="flex text-[#C4C7C2] text-lg font-extrabold">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-bock px-6 py-2 duration-200 hover:bg-[#888C8B] hover:text-[#FEFEFE] rounded-full"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li className="">
                <LogoutButton />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
