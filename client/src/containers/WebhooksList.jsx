import React from 'react';
import Webhook from '@components/Webhook';

function WebhooksList() {
    return (
        <div>
            <Webhook
                title={"Vertical bar chart"}
                webhookUrl="http://localhost:5173/vertical?title=Sample%20Chart&labels=Label%201;Label%202;Label%203&dataSetLabels=Label%201.1;Label%202.1;Label%203.1&dataSetValues=4,9,3;5,7,5;8,4,7&dataSetColors=de6b48;e5b181;606e8c"
                width={400}
                height={200}
            />
        </div>
    );
}

export default WebhooksList;