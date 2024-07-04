import style from "./home.module.css";
export default function HomePage() {
  return (
    <>
      {/* Hero Section */}

      <div className={style.wrapper}>
        <div className={style.hero}>
          <h1>
            {" "}
            Upload & <br /> <span>Print</span>{" "}
          </h1>
          <span>India's First Online Print On Demand Service</span> <br />
          {/* <div className={style.buttons}>
          <div className={style.upload}>
          <i class="ri-upload-cloud-2-fill"></i>
            Upload
          </div>
          <i class="ri-arrow-right-line"></i>
          <button>
          <i class="ri-printer-fill"></i>
            Print
            </button>
            <i class="ri-check-double-line"></i>
        </div> */}
        </div>
      </div>

      {/* Services */}
      <div className={style.label}>
        Our Services
    </div>



  

    <div className={style.Services}>
        <div className={style.service}>
            <div className={style.card}>
                <div>
                <span className='font-extrabold text-3xl'>NOTES</span> <br />
                <span className='font-bold text-gray-700'>TO BOOK</span>

                </div>
            </div>
            <div className={style.Info}>
                Convert Your Handwritten Notes to Book.
            </div>
        </div>
    </div>


    <div className={style.Services}>
        <div className={style.service}>
        
            <div className={style.Info}>
                School Project File Print
            </div>


            <div className={style.card}>
                <div>
                <span className='font-extrabold text-3xl'>SCHOOL</span> <br />
                <span className='font-bold text-gray-700'>PROJECT FILE</span>

                </div>
            </div>
        </div>
    </div>



    <div className={style.Services}>
        <div className={style.service}>
            <div className={style.card}>
                <div>
                <span className='font-extrabold text-1xl'>VISITING CARD</span> <br />
                <span className='font-bold text-gray-700'>@ ₹3 Per Card</span>

                </div>
            </div>
            <div className={style.Info}>
                VISITING CARD PERSONAL / BUSINESS
            </div>
        </div>
    </div>



    </>
  );
}
