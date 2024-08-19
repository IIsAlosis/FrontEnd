
  export default function Signin() {
  return (

<div className="container d-flex justify-content-center align-items-center min-vh-100">
  <div className="card p-4 shadow" style={{width: '100%', maxWidth: 400}}>
    <h3 className="text-center">Sign In</h3>
    <form>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" />
      </div>
      <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
        </div>
      <button type="submit" className="btn btn-primary w-100">Sign In</button>
    </form>
  </div>
</div>


  );
  }
