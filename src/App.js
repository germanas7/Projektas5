import logo from './logo.svg';
import './App.css';
import'bootstrap/dist/css/bootstrap.css';
import Product from './components/product';


function App() {
  return (
    <div class='container'>
    <div  className='container text-center mt-5'>
      <div class='row' >

        <div class='col-md-4'>
          <Product title="React kursai" price="9,99"></Product>
        </div>

        <div class='col-md-4'>
        <Product title="Angular.JS kursai" price="29,99"></Product>
        </div>

        <div class='col-md-4 text-bg-success'>
        <Product title="PHP kursai" price="49,99" ></Product>
        </div>
       
      </div>
    </div>




    <div class='mt-5'>
      <h2>Mūsu dėstytojai</h2>
      <hr ></hr>
    </div>




    <div class='container '>

      <div class='row justify-content-between mt-5'>

        <div class='col-6 border row '>
          
          <div class='col-3 p-3'>
          <img class='rounded-circle'src="https://avatars.dicebear.com/v2/avataaars/e3ca288f13da554c16bb7d3a5bccd638.svg" alt="React Image" />
          </div>


          <div class='col-9 d-flex flex-column p-0 justify-content-end'>
            <h2 class=''>Gordon <span class='fs-4 fw-normal'>Samuel</span></h2>
            <p class='fw-lighter'>Ui UX Designer<br></br>
            795 Ukmerges apsk. vienzindziu g. 25-67, Lietuva, LT-98456</p>
          </div>
          
        </div>

        
        <div class='col-6 border  row '>
          <div class='col-3 p-3'>
          <img class='rounded-circle 'src="https://avatars.dicebear.com/v2/avataaars/72d7fd454da483b5af00213da9a858b8.svg" alt="React Image" />
          </div>


          <div class='col-9 d-flex flex-column p-0 d-flex justify-content-end'>
            <h2 class=''>Gordon <span class='fs-4 fw-normal'>Samuel</span></h2>
            <p class='fw-lighter'>Ui UX Designer<br></br>
            795 Ukmerges apsk. vienzindziu g. 25-67, Lietuva, LT-98456</p>
          </div>
        </div>
        
      </div>


      <div class='row justify-content-between mt-4'>

        <div class='col-6 border row '>
          
          <div class='col-3 p-3'>
          <img class='rounded-circle'src="https://avatars.dicebear.com/v2/avataaars/dc2456fb30415e7ed16a54dda3211473.svg" alt="React Image" />
          </div>


          <div class='col-9 d-flex flex-column p-0 justify-content-end'>
            <h2 class=''>Gordon <span class='fs-4 fw-normal'>Samuel</span></h2>
            <p class='fw-lighter'>Ui UX Designer<br></br>
            795 Ukmerges apsk. vienzindziu g. 25-67, Lietuva, LT-98456</p>
          </div>
          
        </div>

        
        <div class='col-6 border  row '>
          <div class='col-3 p-3'>
          <img class='rounded-circle 'src="https://avatars.dicebear.com/v2/avataaars/245741e63e89abb81748ddc3a5f5bad6.svg" alt="React Image" />
          </div>


          <div class='col-9 d-flex flex-column p-0 d-flex justify-content-end'>
            <h2 class=''>Gordon <span class='fs-4 fw-normal'>Samuel</span></h2>
            <p class='fw-lighter'>Ui UX Designer<br></br>
            795 Ukmerges apsk. vienzindziu g. 25-67, Lietuva, LT-98456</p>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default App;
