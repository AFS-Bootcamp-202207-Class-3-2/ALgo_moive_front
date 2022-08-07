import {Result, Button} from 'antd';
import React from 'react';

const PageNotFound = () => {
    const turnHome = () => {
        //return home
    };
    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button type="primary" onClick={turnHome}>Back Home</Button>}
        />
    );
}

export default PageNotFound;
