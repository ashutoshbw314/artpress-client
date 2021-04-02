import React, {useState, useEffect} from "react";
import NavBar from "../shared-components/NavBar/NavBar";
import SquareSpinner from "../shared-components/Spinners/SquareSpinner";
import {getOrders} from "../../API/API"
import {useAuth} from "../../hooks/useAuth";
import OrderCard from "./OrderCard";

function OrdersPage() {
  const auth = useAuth();
  const uid = auth.user.uid;
  const [orders, setOrders] = useState(null);
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const myOrders = await getOrders(uid);
        setOrders(myOrders);
      } catch(error) {
        console.log(error.message);
      } 
    } 
    fetchOrders();
  }, []);

  return (
    <div>
      <NavBar />
      <div className='max-w-md px-8 py-8 mx-auto sm:max-w-xl lg:max-w-6xl lg:px-12'>
        <h1 className='mb-10 text-5xl font-bold text-center text-gray-800 text-shadow-lg'>My Orders</h1>
        {orders === null ? <SquareSpinner /> :
          <>
            {
              orders.length == 0 ? <p>You haven't placed any order yet. Go to homepage to start buying now!</p> :
              orders.map(order => {
                return <OrderCard key={order._id} order={order}/>
              })
            }
          </>
        }
      </div>
    </div>
  );
}

export default OrdersPage;

