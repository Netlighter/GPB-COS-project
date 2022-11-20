import { Card } from 'antd';

export default function DetailsCard({ data }) {
  return (
    <Card title={data.name}>
      {Object.entries(data).map(([key, value]) => (
        <p key={key}>
          <b>{key}</b>: {value}
        </p>
      ))}
    </Card>
  );
}

