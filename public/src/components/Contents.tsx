import { Card, Typography, Divider } from "antd"
import "../styles/dashboard.css"
import { Routes, Route } from "react-router-dom"
import SalesAnalytics from "./SalesAnalytics";

function Contents() {
    return (
     <>
        <Routes>
            <Route path="/" element={<Card className="content">
            <h2>Sales Analytics</h2>
                <Typography.Paragraph>Monthly sales informatdata, sales on each product and top 10 sold products over time.
    </Typography.Paragraph>
                <Divider />
                <SalesAnalytics />
            </Card>}></Route>
            <Route path="/salesanalytics" element={<Card className="content">
                <h2>Sales Analytics</h2>
                <Typography.Paragraph>Monthly sales informatdata, sales on each product and top 10 sold products over time.
    </Typography.Paragraph>
                <Divider />
                <SalesAnalytics />
            </Card>}></Route>
            <Route path="/useractivities" element={<Card className="content">User Activities Home</Card>}></Route>
            <Route path="/inventorystatus" element={<Card className="content">Inventory Status Home</Card>}></Route>
        </Routes>
      </>
    );
}

export default Contents;