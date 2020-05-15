import React from "react";

const Footer = () => {

  return (
    <section id="footer">
      <div className="pt-1 pb-8 text-xs leading-relaxed opacity-75">
        <div>Licensed under MIT.</div>
        <div>Copyright {new Date().getFullYear()} Abhishek Bvs.</div>
        <div>Made with Love </div>
      </div>
    </section>
  );
};

export default Footer;
