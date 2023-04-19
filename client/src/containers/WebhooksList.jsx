import React from 'react';
import Webhook from '@components/Webhook';
import '@styles/WebhooksList.scss';

function WebhooksList() {
    return (
        <div className='webhook-container'>
            <Webhook
                title={"Vertical bar chart"}
                webhookUrl="http://localhost:5173/bar/vertical?title=Sample%20Chart&labels=Label%201;Label%202;Label%203&dataSetLabels=Label%201.1;Label%202.1;Label%203.1&dataSetValues=4,9,3;5,7,5;8,4,7&dataSetColors=de6b48;e5b181;606e8c"
                width={400}
                height={200}
                className="webhook-item"
            />
            <Webhook
                title={"Horizontal bar chart"}
                webhookUrl="http://localhost:5173/bar/horizontal?title=Sample%20Chart&labels=Label%201;Label%202;Label%203&dataSetLabels=Label%201.1;Label%202.1;Label%203.1&dataSetValues=4,9,3;5,7,5;8,4,7&dataSetColors=de6b48;e5b181;606e8c"
                width={400}
                height={200}
                className="webhook-item"
            />
            <Webhook
                title={"Stacked bar chart"}
                webhookUrl="http://localhost:5173/bar/stacked?title=Sample%20Chart&labels=Label%201;Label%202;Label%203&dataSetLabels=Label%201.1;Label%202.1;Label%203.1&dataSetValues=4,9,3;5,7,5;8,4,7&dataSetColors=de6b48;e5b181;606e8c"
                width={400}
                height={200}
                className="webhook-item"
            />
            <Webhook
                title={"Grouped bar chart"}
                webhookUrl="http://localhost:5173/bar/grouped?title=Sample%20Chart&labels=Label%201;Label%202;Label%203&dataSetLabels=Label%201.1;Label%202.1;Label%203.1&dataSetValues=4,9,3;5,7,5;8,4,7&dataSetColors=de6b48;e5b181;606e8c&dataSetStack=0;1;2"
                width={400}
                height={200}
                className="webhook-item"
            />
        </div>
    );
}

export default WebhooksList;