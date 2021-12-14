export default function PricingCard(props){
    return <div class="col-lg-3">
    <div class="card text-center card-shadow on-hover border-0 mb-4">
      <div class="card-body font-14">
      {props.data.isPopular ? <span class="badge badge-inverse p-2 position-absolute price-badge font-weight-normal">Popular</span> : '' }
        <h5 class="mt-3 mb-1 font-weight-medium">{props.data.title}</h5>
        <h6 class="subtitle font-weight-normal">For Team of {props.data.members} Members</h6>
        <div class="pricing my-3">
          <sup>$</sup>
          <span class="monthly display-5">{props.data.price}</span>
          <small class="monthly">/mo</small>
          <span class="d-block">Save <span class="font-weight-medium">${props.data.save}</span> a Year</span>
        </div>
        <ul class="list-inline">

        {
            props.data.features.map((obj) => {
                return <li class="d-block py-2">{obj.name}</li>
            })
        }
        </ul>
        <div class="bottom-btn">
        {props.data.isPopular ? <a class="btn btn-danger-gradiant btn-md text-white btn-block" href="#f1"><span>Choose Plan</span></a> : <a class="btn btn-success-gradiant btn-md text-white btn-block" href="#f1"><span>Choose Plan</span></a>} 
        </div>
      </div>
    </div>
  </div>
}