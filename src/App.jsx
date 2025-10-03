import "./App.css";
import { Suspense, useState } from "react";
import Navbar from "./assets/Components/Navbar";
import ProgressResolvedCard from "./assets/Components/ProgressResolvedCard";
import CustomerTicketsSection from "./assets/Components/CustomerTicketsSection";
import TaskStatus from "./assets/Components/TaskStatus";
import { ToastContainer } from 'react-toastify';
import Footer from "./assets/Components/Footer";

const fetchTickets = fetch("/tickets.json").then(res => res.json());

function App() {
  const [inprogressCount, setInProgressCount] = useState(0);
  const [resolveCount, setResolveCount] = useState(0);
  const [showTaskStatus, setShowTaskStatus] = useState(false);
  const [getData, setGetData] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);

  return (
    <>
      <Navbar />
      <ProgressResolvedCard inprogressCount={inprogressCount} resolveCount={resolveCount} />
      <Suspense fallback={<div className="flex justify-center items-center"><span className="loading loading-dots loading-xl"></span></div>}>
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-20 max-w-[1440px] mx-auto px-3 md:px-0">
          <div className="col-span-6 md:col-span-9">
            <CustomerTicketsSection
              fetchTickets={fetchTickets}
              setInProgressCount={setInProgressCount}
              setShowTaskStatus={setShowTaskStatus}
              getData={getData}
              setGetData={setGetData}
              resolvedTickets={resolvedTickets}
            />
          </div>
          <div className="col-span-6 md:col-span-3">
            <TaskStatus
              getData={getData}
              setGetData={setGetData}
              setInProgressCount={setInProgressCount}
              setResolveCount={setResolveCount}
              resolvedTickets={resolvedTickets}
              setResolvedTickets={setResolvedTickets}
            />
          </div>
        </section>
      </Suspense>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;