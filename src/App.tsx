import { Layout } from "antd"
import "./styles/dashboard.css"
import TopNavbar from "./components/TopNavBar"
import Sidebar from "./components/Sidebar"
import Contents from "./components/Contents"

function App() {
  return (
    <>
      <Layout className='container'>
        <TopNavbar />
        <Layout>
          <Sidebar />
          <Contents />
        </Layout>
      </Layout>
    </>
  )
}

export default App