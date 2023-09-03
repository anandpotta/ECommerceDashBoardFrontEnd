import { Menu } from "antd"
import Sider from "antd/es/layout/Sider"
import { TbPresentationAnalytics } from "react-icons/Tb"
import { AiOutlineUser } from "react-icons/Ai"
import { MdOutlineInventory } from "react-icons/Md"
import "../styles/dashboard.css"
import { useNavigate } from "react-router-dom"

function Sidebar() {
    const navigate = useNavigate();
    return (
      <>
        <Sider theme="light">
              <Menu
                mode="inline"
                defaultSelectedKeys={["salesanalytics"]}
                openKeys={["salesanalytics"]}
                onClick={({key}) => {
                  navigate(key)
                }}
                items={[
                  {
                    label: "Sales Analytics",
                    key: "salesanalytics",
                    icon: <TbPresentationAnalytics />
                  },
                  {
                    label: "User Activities",
                    key: "useractivities",
                    icon: <AiOutlineUser />
                  },
                  {
                    label: "Inventory Status",
                    key: "inventorystatus",
                    icon: <MdOutlineInventory />
                  }
                ]} />
            </Sider>
      </>
    )
  }

  export default Sidebar;