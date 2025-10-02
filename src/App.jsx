import "./App.css";
import { Suspense } from "react";
import Navbar from "./assets/Components/Navbar";
import ProgressResolvedCard from "./assets/Components/ProgressResolvedCard";
import CustomerTicketsSection from "./assets/Components/CustomerTicketsSection";


const fetchTickets = fetch("/tickets.json").then(res => res.json());


function App() {
  return (
    <>
      <Navbar></Navbar>
      <ProgressResolvedCard></ProgressResolvedCard>
      <Suspense fallback={<p>Loading...</p>}>
        <CustomerTicketsSection fetchTickets={fetchTickets}></CustomerTicketsSection>
      </Suspense>
    </>
  );
}

export default App;
