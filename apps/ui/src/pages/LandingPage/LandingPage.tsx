import BuildGpu from './components/BuildGpu'
import Hero from './components/Hero'
import ManageInfastructure from './components/ManageInfastructure'
import SelectComponent from './components/SelectComponent'

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <div className="container mx-auto">
        <SelectComponent />
        <BuildGpu />
        <ManageInfastructure />
      </div>
    </div>
  );
}
  
export default LandingPage
