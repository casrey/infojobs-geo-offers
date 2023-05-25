import { Col } from "@tremor/react";
import Map from "./components/Map/Map";
import Layout from "./layouts/Layout/Layout";
import RightContainer from "./layouts/RightContainer/RightContainer";
import Search from "./components/Search/Search";
import AdvancedFilters from "./components/AdvancedFilters/AdvancedFilters";

function App() {
  return (
    <main className="bg-slate-50 p-6 sm:p-10 h-screen">
      <Layout>
        <Col numColSpan={4} numColSpanLg={4}>
          <Search />
        </Col>
        <Col numColSpan={4} numColSpanLg={4}>
          <AdvancedFilters />
        </Col>

        <Col numColSpan={3} numColSpanLg={3}>
          <Map />
        </Col>

        <Col numColSpan={1} numColSpanLg={1}>
          <RightContainer />
        </Col>
      </Layout>
    </main>
  );
}

export default App;
