import Image from "next/image";
import styles from "./page.module.css";
import IANImage from './/IAN.jpg';
import AmdImage from './/Amd.jpg';
import intelImage from './/intel.png';
import nvidiaImage from './/nvidia.jpg';
import EbenlogoiImage from './/Ebenlogo.png';
import './/globals.css';
import Script from "next/script";
import Link from "next/link";

export default function Home() {
  return (
<>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <div className="carousel-item active">
                <Image src={EbenlogoiImage} alt="Nature" />
              </div>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
      <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/About">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/Contact">Contact</Link>
              </li>
              <li class="nav-item">
        <a href="/signup" class="btn btn-outline-dark" tabindex="-1" role="button" aria-disabled="true">Signup</a>
        </li>&nbsp;
        <li class="nav-item">
        <a href="/signin" class="btn btn-outline-dark" tabindex="-1" role="button" aria-disabled="true">Signin</a>
        </li>&nbsp;
      </ul>
      </div>
    </div>
</nav>


      <div className="container">

        <div className="row my-3">
          <div className="col-md-12 text-center bg-success p-5 border rounded">
            <div id="carouselExampleRided" className="carousel Silde" data-bs-ride="true">
              <div className="carousel-inner">
                <div className="carousel-item active">
                <Image src={IANImage} className="d-clock w-100" alt="Nature" />
              </div>
              <div className="carousel-item">
              <Image src={AmdImage} className="d-clock w-100" alt="Lake" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            </div>
          </div>

  <div className="d-flex flex-row">
  <div className="card" style={{width: '30rem'}}>
    <Image src={AmdImage} className="card-img-top" alt="Nature" />
    <div className="card-body">
      <h5 className="card-title">ประวัติ</h5>
      <p className="card-text"> บริษัท แอดวานซ์ ไมโคร ดีไวซ์ จำกัด หรือ เอเอ็มดี เป็นบริษัทสัญชาติอเมริกัน โดยเป็นผู้ผลิตและผู้พัฒนา ซีพียู และเทคโนโลยีต่าง ๆ โดยที่สินค้าหลักของบริษัทคือ ไมโครโพรเซสเซอร์ เมนบอร์ด และการ์ดแสดงผล สำหรับคอมพิวเตอร์เซิร์ฟเวอร์และคอมพิวเตอร์ส่วนบุคคล โดยที่ผลิตภัณฑ์ของเอเอ็มดีที่เป็นที่รู้จักได้แก่ไมโครโพรเซสเซอร์ตระกูล APU, Phenom, Athlon, Sempron บนคอมพิวเตอร์ส่วนบุคคล APU Mobile บนคอมพิวเตอร์แบบพกพา Opteron สำหรับเซิร์ฟเวอร์ และชิปกราฟิก Radeon[3]</p>
    </div>
  </div>
  <div className="card" style={{width: '30rem'}}>
    <Image src={intelImage} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">ประวัติ</h5>
      <p className="card-text">อินเทล (Intel) เป็นบริษัทผลิตชิพสารกึ่งตัวนำที่ใหญ่ที่สุดในโลกเมื่อวัดจากรายได้ บริษัทอินเทลเป็นผู้คิดค้นไมโครโพรเซสเซอร์ตระกูลx86 ออกมาวางจำหน่าย ซึ่งเป็นไมโครโปรเซสเซอร์ที่ใช้กันมากที่สุดในเครื่องคอมพิวเตอร์ส่วนบุคคล[1] อินเทลก่อตั้งขึ้นเมื่อวันที่ 18 กรกฎาคม ค.ศ. 1968 ในชื่อ Integrated Electronics Corporation</p>
    </div>
  </div>
  <div className="card" style={{width: '30rem'}}>
    <Image src={nvidiaImage} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">ประวัติ</h5>
      <p className="card-text">NVIDIA ก่อตั้งในปี 1993 โดย เจนเซน ฮวง (Jensen Huang), คริส มาลาชาวสกี้ (Chris Malachowsky) และ เคอร์ติส พรีเอม (Curtis Priem) ในเมืองซานตาคลารา รัฐแคลิฟอร์เนีย สหรัฐอเมริกา เป็นบริษัทผลิตอุปกรณ์อิเล็กทรอนิกส์ โดยเฉพาะอย่างยิ่งการ์ดแสดงผลกราฟิกสำหรับคอมพิวเตอร์ตั้งโต๊ะ หรือเรียกง่าย ๆ ว่าการ์ดจอนั่นเอง</p>
    </div>
  </div>
</div>

        <div className="row">
        <footer class="bg-success py-3 my-4 border rounded">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">About</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Contact</a></li>
    </ul>
    <p class="text-center text-body-secondary">© Chiang Mai Technical ollege</p>
  </footer>

            </div>
          </div>

</>
  );
} 