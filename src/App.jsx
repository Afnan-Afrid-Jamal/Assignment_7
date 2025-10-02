import "./App.css";
import { Suspense, useState } from "react";
import Navbar from "./assets/Components/Navbar";
import ProgressResolvedCard from "./assets/Components/ProgressResolvedCard";
import CustomerTicketsSection from "./assets/Components/CustomerTicketsSection";
import TaskStatus from "./assets/Components/TaskStatus";


const fetchTickets = fetch("/tickets.json").then(res => res.json());


function App() {

  const [inprogressCount, setInProgressCount] = useState(0);
  const [showTaskStatus, setShowTaskStatus] = useState(false);
  const [getData,setGetData] = useState([])

  return (
    <>
      <Navbar></Navbar>
      <ProgressResolvedCard inprogressCount={inprogressCount}></ProgressResolvedCard>
      <Suspense fallback={<p>Loading...</p>}>
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-20 max-w-[1440px] mx-auto px-3 md:px-0">
          <div className="col-span-6 md:col-span-9">
            <CustomerTicketsSection fetchTickets={fetchTickets} inprogressCount={inprogressCount} setInProgressCount={setInProgressCount} showTaskStatus={showTaskStatus} setShowTaskStatus={setShowTaskStatus} setGetData={setGetData}></CustomerTicketsSection>
          </div>
          <div className="col-span-6 md:col-span-3">
              <TaskStatus fetchTickets={fetchTickets} showTaskStatus={showTaskStatus} setShowTaskStatus={setShowTaskStatus} getData={getData}></TaskStatus>
          </div>
        </section>
      </Suspense>
    </>
  );
}

export default App;
