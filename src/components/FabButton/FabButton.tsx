/* eslint-disable @typescript-eslint/no-unused-expressions */
import { ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./FabButton.css";
import { BookA, House, Plus,  ShoppingBag } from "lucide-react";

type IconProps = {
  children: ReactNode;
};

const Icon = ({ children }: IconProps) => (
  <span className="material-symbols-outlined">{children}</span>
);

export const FabButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Function to handle navigation on button click
  const handleNavigate = (route: string) => {
    navigate(route);
  };

  return (
    <section className="page fab-button-page">
      <div className={`fab ${isOpen ? "open" : ""}`}>
        <button onClick={() => setIsOpen(!isOpen)}>
          <Icon>
            <Plus />
          </Icon>
        </button>
        <div className="fab-menu">
          <button
            onClick={() => {
              handleNavigate("/about"), setIsOpen(!isOpen);
            }}
          >
            <Icon>
              <BookA />
            </Icon>
          </button>
          <button
            onClick={() => {
              handleNavigate("/store"), setIsOpen(!isOpen);
            }}
          >
            <Icon>
              <ShoppingBag />
            </Icon>
          </button>
          <button
            onClick={() => {
              handleNavigate("/"), setIsOpen(!isOpen);
            }}
          >
            <Icon>
              <House />
            </Icon>
          </button>
         
        </div>
      </div>
    </section>
  );
};
