import { Alert, Button } from 'antd';

export default function ErrorAlert(props) {
  return (
    <Alert
      className="fade-in"
      message="Something goes wrong   "
      showIcon
      description=""
      type="error"
      action={
        <Button
          size="small"
          danger
          onClick={(e) => {
            props.action();
          }}
        >
          Try again
        </Button>
      }
    />
  );
}

