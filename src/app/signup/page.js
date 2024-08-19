
  export default function Signup() {
  return (

    
<div className="container mt-5">
  <div className="card">
    <div className="card-header">
      กรอกข้อมูลลงทะเบียน
    </div>
    <div className="card-body">
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputFirstName1">First name</label>
          <input type="email" className="form-control" id="exampleInputFirstName1" placeholder="กรอกชื่อ" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputLastName1">Last name</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="กรอกนามสกุล" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="กรอกอีเมลของคุณ" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputAddress1">Address</label>
          <input type="email" className="form-control" id="exampleInputAddress1" placeholder="กรอกอีเมลของคุณ" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputAddress2">Address2</label>
          <input type="email" className="form-control" id="exampleInputAddress2" placeholder="กรอกอีเมลของคุณ" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPhoneNumber1">Phone Number</label>
          <input type="email" className="form-control" id="exampleInputPhoneNumber1" placeholder="กรอกอีเมลของคุณ" />
        </div>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">ฉันยอมรับเงื่อนไขการใช้งาน</label>
        </div>
        <button type="submit" className="btn btn-primary">Sign Up</button>
      </form>
    </div>
  </div>
</div>


  );
  }
