import { useEffect, useRef } from "react";
import gsap from "gsap";
// import { IoMdHeartEmpty } from "react-icons/io";
import { FaHandMiddleFinger } from "react-icons/fa6";


const CustomCursor = () => {
  // Refs for cursor element
  const cursorRef = useRef(null);
  const cursorBorderRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorBorder = cursorBorderRef.current;

    gsap.set([cursor, cursorBorder], {
      xPercent: -50,
      yPercent: -50,
    });

    const xTo = gsap.quickTo(cursor, "x", {
      duration: 0.2,
      ease: "power3.out",
    });
    const yTo = gsap.quickTo(cursor, "y", {
      duration: 0.2,
      ease: "power3.out",
    });

    const xToBorder = gsap.quickTo(cursorBorder, "x", {
      duration: 0.5,
      ease: "power3.out",
    });
    const yToBorder = gsap.quickTo(cursorBorder, "y", {
      duration: 0.5,
      ease: "power3.out",
    });

    const handleMouseMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
      xToBorder(e.clientX);
      yToBorder(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    document.addEventListener("mousedown", () => {
      gsap.to([cursor, cursorBorder], {
        scale: 0.6,
        duration: 0.2,
      });
    });

    document.addEventListener("mouseup", () => {
      gsap.to([cursor, cursorBorder], {
        scale: 1,
        duration: 0.2,
      });
    });
  }, []);
  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width:768px)").matches;

  if (isMobile) {
    return null;
  }

  return (
    <>
      {/* <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-[20px] h-[20px] bg-white rounded-full pointer-events-none z-[999] mix-blend-difference"
      /> */}

      {/* <IoMdHeartEmpty
        ref={cursorRef}
        className="fixed top-0 left-0 w-[20px] h-[20px] text-red-500 pointer-events-none z-[999]"
      /> */}
      <FaHandMiddleFinger
        ref={cursorRef}
        className="fixed top-0 left-0 w-[20px] h-[20px] text-purple-500 pointer-events-none z-[999]"
      />

      {/* <div
        ref={cursorBorderRef}
        className="fixed top-0 left-0 w-[40px] h-[40px] border border-white rounded-full pointer-events-none z-[999] mix-blend-difference "
      /> */}
      {/* <IoMdHeartEmpty
        ref={cursorBorderRef}
        className="fixed top-0 left-0 w-[40px] h-[40px] pointer-events-none z-[999] mix-blend-overlay"
      /> */}
      <FaHandMiddleFinger
        ref={cursorBorderRef}
        className="fixed top-0 left-0 w-[40px] h-[40px] pointer-events-none z-[999] mix-blend-overlay"
      />
    </>
  );
};
export default CustomCursor;
