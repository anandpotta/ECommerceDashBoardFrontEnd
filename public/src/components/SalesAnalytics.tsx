import { Card, Col, Row } from "antd"
import { useEffect, useState } from 'react';
import { Line, Pie, Bar } from '@ant-design/charts';
import axios from 'axios';
import { format, parseISO } from 'date-fns';

interface SalesData {
  monthYear: string;
  sales: number;
}

const SalesAnalytics = () => {
  const [monthlySalesData, setMonthlySalesData] = useState<SalesData[]>([]);
  const [salesData, setSalesData] = useState([]);
  const [productData, setProductData] = useState([]);


  useEffect(() => {
    // Fetch data from your API endpoint
    axios.get('https://ecommerce-backend-mockdata.onrender.com/sales').then((response) => {
      const data = response.data; // Assuming your API returns an array of objects with date and sales properties

      // Process the data to get monthly sales totals
      const monthlySales = data.reduce((acc: Record<string, number>, item: { saleDate: string, quantity: number }) => {
        const date = parseISO(item.saleDate);
        
        const monthYear = format(date, 'MM/yyyy');

        if (!acc[monthYear]) {
          acc[monthYear] = 0;
        }

        acc[monthYear] += item.quantity;
        return acc;
      }, {});

      // Convert the monthly sales data into an array of objects
      const formattedData = Object.keys(monthlySales).map((monthYear) => ({
        monthYear,
        sales: monthlySales[monthYear],
      }));

      setMonthlySalesData(formattedData);
    });
  }, []);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://ecommerce-backend-mockdata.onrender.com/sales')
      .then((response) => response.json())
      .then((data) => {
        // Transform the data to match the expected format for the Pie Chart
        const transformedData = data.slice(0, 30).map((item) => ({
          product: 'Product'+item.productId, // Replace with the actual property name in your data
          sales: item.quantity, // Replace with the actual property name in your data
        }));

        setSalesData(transformedData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    // Fetch data from your API
    fetch('https://ecommerce-backend-mockdata.onrender.com/sales')
      .then((response) => response.json())
      .then((data) => {
        // Assuming your API response has a structure like this:
        // data = [{ product: 'Product A', sales: 1500 }, { product: 'Product B', sales: 2200 }, ...]

        // Sort the data by sales in descending order
        data.sort((a: { quantity: number }, b: { quantity: number }) => b.quantity - a.quantity);

        // Select the top 10 products
        const topProducts = data.slice(0, 70).map((item) => ({
          product: 'Product'+item.productId, // Replace with the actual property name in your data
          sales: item.quantity, // Replace with the actual property name in your data
        }));

        setProductData(topProducts);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Configure the Line Chart
  const lineChartConfig = {
    data: monthlySalesData,
    padding: 'auto',
    xField: 'monthYear',
    yField: 'sales',
    xAxis: { title: { text: 'Month/Year' } },
    yAxis: { title: { text: 'Sales' } },
    seriesField: 'sales',
    legend: { position: 'top' }
  };

  // Configure the Pie Chart
  const pieChartConfig = {
    appendPadding: 10,
    data: salesData,
    angleField: 'sales',
    colorField: 'product',
    radius: 0.9,
    label: {
      type: 'inner',
      offset: '-30%',
      content: '{percentage}',
    },
    interactions: [{ type: 'element-active' }],
  };

  // Configuration for the Bar Chart
  const barChartConfig = {
    data: productData,
    xField: 'product',
    yField: 'sales',
    yAxis: {
      label: {
        formatter: (text: string) => `${text} USD`,
      },
    },
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
      },
    },
    title: {
      text: 'Top 10 Products by Sales',
    },
  };

  return (
    <>
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Sales Over Time" >
            <Line {...lineChartConfig} />
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Product Wise Sales" >
            <Pie {...pieChartConfig} />
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Top Selling Products" >
            <Bar {...barChartConfig} />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default SalesAnalytics;