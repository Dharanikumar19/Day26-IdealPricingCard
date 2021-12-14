import './App.css';
import PricingCard from './PricingCard';

var priceCard = [
{
  title : 'BASIC',
  members : '3-5',
  price : 28,
  save : 20,
  isPopular : false,
  features : [
    {
      name : "Perfect of Small Team",
    },
    {
      name : 'Unlimited Invoices',
    },
    {
      name : 'Project Management',
    },
    {
      name : '-',
    },
    {
      name : '-'
    }
]
},
{
  title : 'INTERMEDIATE',
  members : '5-10',
  price : 39,
  save : 30,
  isPopular : true,
  features : [
    {
      name : "Perfect of Small Team",
    },
    {
      name : 'Unlimited Invoices',
    },
    {
      name : 'Project Management',
    },
    {
      name : 'Team Management'
    },
    {
      name : '-'
    }
  ]
},
{
  title : 'HIGH CLASS',
  members : '10-25',
  price : 58,
  save : 50,
  isPopular : false,
  features : [
    {
      name : "Perfect of Small Team",
    },
    {
      name : 'Unlimited Invoices',
    },
    {
      name : 'Project Management',
    },
    {
      name : 'Team Management'
    },
    {
      name : 'Time Tracking'
    }
  ]
},
{
  title : 'SUPREME',
  members : '25-100',
  price : 99,
  save : 80,
  isPopular : false,
  features : [
    {
      name : "Perfect of Small Team",
    },
    {
      name : 'Unlimited Invoices',
    },
    {
      name : 'Project Management',
    },
    {
      name : 'Team Management'
    },
    {
      name : 'Time Tracking'
    }
  ]
}
]




function App() {
  return (
    <div class="pricing1 py-5 bg-light">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8 text-center">
          <h3 class="mt-3 font-weight-medium mb-1">Pricing to make your Work Effective</h3>
          <h6 class="subtitle">We offer 100% satisafaction and Money back Guarantee</h6>
         </div>
          </div>
        </div>
        <div class="row mt-5 col-md-10 offset-md-1">
        
        {
    priceCard.map((obj) =>  <PricingCard data={obj}></PricingCard> )
    }

      </div>
      </div>

  );
}

export default App;
