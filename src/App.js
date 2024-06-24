import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar.jsx";
import Home from "./components/pages/home/home";
import About from "./components/pages/about/about";
import Leadership from "./components/pages/leadership/leadership";
import Team from "./components/pages/team/team";
import Tribunals from "./components/pages/tribunals/tribunals";
import Decisions from "./components/pages/decisions/decisions";
import Gallery from "./components/pages/gallery/gallery";
import Contacts from "./components/pages/contact/contacts";
import Footer from "./components/footer/footer";
import Eat from './components/transitioned tribunals/Civiltribunals/Eattribunal/Eat.jsx'
import Hattribunal from './components/transitioned tribunals/Civiltribunals/Hattribunal/Hat.jsx'
import Leattribunal from './components/transitioned tribunals/Civiltribunals/Leattribunal/Leat.jsx'
import Neattribunal from './components/transitioned tribunals/Civiltribunals/Neattribunal/Neat.jsx'
import Ppdttribunal from './components/transitioned tribunals/Civiltribunals/Ppdttribunal/Ppdt.jsx'
import Pppctribunal from './components/transitioned tribunals/Civiltribunals/Pppctribunal/Pppc.jsx'
import Scattribunal from './components/transitioned tribunals/Civiltribunals/Scattribunal/Scat.jsx'
import Sdttribuinal from './components/transitioned tribunals/Civiltribunals/Sdttribunal/Sdt.jsx'
import Cmttribunal from './components/transitioned tribunals/commercialtribunals/Capitalmarkets/Cmt.jsx'
import Competitiontribunal from './components/transitioned tribunals/commercialtribunals/Competitiontribunal/Competition.jsx'
import Cooptribunal from './components/transitioned tribunals/commercialtribunals/Cooperativetribunal/Coop.jsx'
import Fcttribunal from './components/transitioned tribunals/commercialtribunals/Financialcenter/Fct.jsx'
import Msettribunal from './components/transitioned tribunals/commercialtribunals/Msettribunal/Mset.jsx'
import Ncaarttribunal from './components/transitioned tribunals/commercialtribunals/Ncaarttribunal/Ncaart.jsx'
import Standardtribunal from './components/transitioned tribunals/commercialtribunals/Standardtribunal/Standard.jsx'
import Taxtribunal from './components/transitioned tribunals/commercialtribunals/Taxappeals/Tat.jsx'
import Tlabtribunal from './components/transitioned tribunals/commercialtribunals/Tlabtribunal/Tlab.jsx'
import Bprttribunal from './components/transitioned tribunals/Environmentandland/Businesspremises/Bprt.jsx'
import Epttribunal from './components/transitioned tribunals/Environmentandland/Epttribunal/Ept.jsx'
import Lattribuinal from './components/transitioned tribunals/Environmentandland/Lattribunal/Lat.jsx'
import Nettribunal from './components/transitioned tribunals/Environmentandland/Nettribunal/Net.jsx'
import Rrrttribunal from './components/transitioned tribunals/Environmentandland/Rrttribunal/Rrt.jsx'
import Watertribunal from './components/transitioned tribunals/Environmentandland/Watertribunal/Water.jsx'
import Camattribunal from './components/transitioned tribunals/Intellectualpropertiestribunal/Camattribunal/Camat.jsx'
import Copyrighttribunal from './components/transitioned tribunals/Intellectualpropertiestribunal/Copyrighttribunal/Copyright.jsx'
import Ipttribunal from './components/transitioned tribunals/Intellectualpropertiestribunal/Ipttribunal/Ipt.jsx'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />;
        <Route path="/about" element={<About />} />;
        <Route path="/leadership" element={<Leadership />} />;
        <Route path="/team" element={<Team />} />;
        <Route path="/tribunals" element={<Tribunals />} />;
        <Route path='EducationAppealsTribunal' element={<Eat/>}/>
          <Route path='HivandAidsTribunal' element={<Hattribunal/>}/>
          <Route path='LegalEducationAppealsTribunal' element={<Leattribunal/>}/>
          <Route path='NationalExaminationsAppealsTribunal' element={<Neattribunal/>}/>
          <Route path='PoliticalPartiesDisputesTribunal' element={<Ppdttribunal/>}/>
          <Route path='Public-PrivatePartnershipCommittee' element={<Pppctribunal/>}/>
          <Route path='StateCorporationsAppealsTribunal' element={<Scattribunal/>}/>
          <Route path='SportsDisputeTribunals' element={<Sdttribuinal/>}/>
          <Route path='CapitalMarkets' element={<Cmttribunal/>}/>
          <Route path='CompetitionTribunal' element={<Competitiontribunal/>}/>
          <Route path='CooperativeTribunal' element={<Cooptribunal/>}/>
          <Route path='FinancialCenterTribunal' element={<Fcttribunal/>}/>
          <Route path='MicroandSmallEnterprisesTribunal' element={<Msettribunal/>}/>
          <Route path='NationalCivilAviationAdministrativeReviewTribunal' element={<Ncaarttribunal/>}/>
          <Route path='StandardsTribunal' element={<Standardtribunal/>}/>
          <Route path='TaxAppealsTribunal' element={<Taxtribunal/>}/>
          <Route path='TransportLicensingAppealsTribunal' element={<Tlabtribunal/>}/>
          <Route path='BusinessPremisesRentTribunal' element={<Bprttribunal/>}/>
          <Route path='EnergyandPetroleumTribunal' element={<Epttribunal/>}/>
          <Route path='LandAppealsTribunal' element={<Lattribuinal/>}/>
          <Route path='NationalEnvironmentTribunal' element={<Nettribunal/>}/>
          <Route path='RentRestrictionsTribunal' element={<Rrrttribunal/>}/>
          <Route path='WaterTribunal' element={<Watertribunal/>}/>
          <Route path='CommunicationandMulti-MediaAppealsTribunal' element={<Camattribunal/>}/>
          <Route path='CopyrightTribunal' element={<Copyrighttribunal/>}/>
          <Route path='IndustrialPropertyTribunal' element={<Ipttribunal/>}/>
        <Route path="/decisions" element={<Decisions />} />;
        <Route path="/gallery" element={<Gallery />} />;
        <Route path="/contact" element={<Contacts />} />;
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
