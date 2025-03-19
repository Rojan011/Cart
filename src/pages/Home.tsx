import { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import AOS from "aos";

export function Home() {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = (): void => {
    setOrderPopup(!orderPopup);
  };
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <Carousel handleOrderPopup={handleOrderPopup} />
    </>
  );
}
