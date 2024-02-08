import styles from "../style";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-serif font-semibold ss:text-[56px] text-[47px] text-white ss:leading-[75.4px] leading-[55.5px]">
            Who <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Am I?</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
 
          </div>
        </div>


        <h1 className="font-serif font-semibold ss:text-[44px] text-[37px] text-white ss:leading-[50.4px] leading-[37.25px] w-full">
          New Methods.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>  
          Unique devfolio of talents and skills.
        </p>
      </div>


      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src=" " alt="" className="w-[100%] h-[100%] relative z-[5]" />
      </div>

    </section>
  );
};

export default Hero;
